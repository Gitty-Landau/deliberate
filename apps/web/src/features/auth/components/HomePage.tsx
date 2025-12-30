import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import authMutations from '../hooks/auth.mutations';

const HomePage = () => {
    const { user } = useAuth();
    const { mutate: logout, isPending: isLogoutPending } = authMutations.useLogout();
    const navigate = useNavigate();

    const handleLogout = () => logout(undefined, {
        onSuccess: () => navigate('/login'),
    });

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-4">Deliberate</h1>
            <p className="text-muted-foreground mb-2">Decision Tracking App</p>
            {user && (
                <p className="text-sm text-muted-foreground mb-8">
                    Signed in as {user.email}
                </p>
            )}
            <Button
                onClick={handleLogout}
                variant="outline"
                disabled={isLogoutPending}
            >
                {isLogoutPending ? 'Signing out...' : 'Sign out'}
            </Button>
        </div>
    );
}

export default HomePage


