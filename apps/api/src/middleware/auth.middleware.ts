
import { Request, Response, NextFunction } from 'express';
import type { User } from '@deliberate/types';
import { prisma } from '@deliberate/database';
import AuthClient from '../features/auth/auth.client.js';

// Extend Express Request to include user
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const { data: { user: supabaseUser }, error } = await AuthClient.getUser(token);

        if (error || !supabaseUser || !supabaseUser.email) {
            console.error('Auth error:', error);
            return res.status(401).json({ error: 'Invalid token' });
        }

        const user = await prisma.user.upsert({
            where: { id: supabaseUser.id },
            update: { email: supabaseUser.email },
            create: {
                id: supabaseUser.id,
                email: supabaseUser.email,
            },
        });

        req.user = user;
        next();
    } catch (error) {
        console.error('Unexpected auth error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
