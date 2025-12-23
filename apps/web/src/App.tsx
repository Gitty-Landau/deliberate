import { Routes, Route } from 'react-router-dom'
import LoginPage from './features/auth/components/LoginPage'
import SignupPage from './features/auth/components/SignupPage'
import HomePage from './features/auth/components/HomePage'
import ProtectedRoute from './features/auth/providers/ProtectedRoute'
import PublicRoute from './features/auth/providers/PublicRoute'



const App = () => (
  <Routes>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      }
    />
    <Route
      path="/signup"
      element={
        <PublicRoute>
          <SignupPage />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default App
