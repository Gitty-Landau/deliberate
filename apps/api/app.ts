import express, { Request, Response } from 'express';
import path from 'path';

import { authMiddleware } from './src/middleware/auth.middleware.js';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
const distPath = path.join(process.cwd(), '../web/dist');

app.use(express.static(distPath));

// Protected route for verification
app.get('/api/me', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
