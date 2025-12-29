import { Routes, Route } from 'react-router-dom'
import LoginPage from './features/auth/components/LoginPage'
import SignupPage from './features/auth/components/SignupPage'
import HomePage from './features/auth/components/HomePage'
import ProtectedRoute from './features/auth/providers/ProtectedRoute'
import PublicRoute from './features/auth/providers/PublicRoute'
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { PublicLayout } from "@/components/layout/public-layout"

const App = () => (
  <div className="min-h-screen bg-background text-foreground font-sans antialiased">
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <PublicLayout>
              <SignupPage />
            </PublicLayout>
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <HomePage />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  </div>
)

export default App
