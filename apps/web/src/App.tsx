
import { Routes, Route } from 'react-router-dom'
import LoginPage from './features/auth/components/LoginPage'
import SignupPage from './features/auth/components/SignupPage'
import HomePage from './features/auth/components/HomePage'
import PreferencesPage from './features/preferences/components/PreferencesPage'
import DecisionForm from './features/decisions/components/DecisionForm'
import DecisionsPage from './features/decisions/components/DecisionsPage'
import RootLayout from './components/layout/RootLayout'
import AuthLayout from './features/auth/providers/AuthLayout'

const App = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/signup"
        element={<SignupPage />}
      />
    </Route>

    <Route element={<RootLayout />}>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/preferences"
        element={<PreferencesPage />}
      />
      <Route
        path="/decisions/new"
        element={<DecisionForm />}
      />
      <Route
        path="/decisions"
        element={<DecisionsPage />}
      />
    </Route>
  </Routes>
)

export default App
