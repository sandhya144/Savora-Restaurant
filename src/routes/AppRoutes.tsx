import { Navigate, Route, Routes } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { MenuShowcase } from '../components/sections/MenuShowcase';
import { Philosophy } from '../components/sections/Philosophy';
import { HorizontalScroll } from '../components/sections/HorizontalScroll';
import { Atmosphere } from '../components/sections/Atmosphere';
import { ChefSection } from '../components/sections/ChefSection';
import { Accolades } from '../components/sections/Accolades';
import { Reservation } from '../components/sections/Reservation';
import { AuthPage } from '../components/sections/AuthPage';
import { Footer } from '../components/layout/Footer';
import type { AccountRole, AuthAccount } from '../types';

interface AppRoutesProps {
  account: AuthAccount | null;
  onAuthenticated: (account: AuthAccount) => void;
  onOpenReservation: () => void;
}

interface AuthRouteProps {
  role: AccountRole;
  mode: 'login' | 'signup';
  onAuthenticated: (account: AuthAccount) => void;
}

const AuthRoute = ({ role, mode, onAuthenticated }: AuthRouteProps) => (
  <AuthPage
    mode={mode}
    role={role}
    onAuthenticated={onAuthenticated}
  />
);

const AppRoutes = ({ account, onAuthenticated, onOpenReservation }: AppRoutesProps) => (
  <Routes>
    <Route
      path="/"
      element={
        account ? (
          <>
            <Hero onOpenReservation={onOpenReservation} />
            <Philosophy />
            <MenuShowcase onOpenReservation={onOpenReservation} />
            <HorizontalScroll />
            <Atmosphere onOpenReservation={onOpenReservation} />
            <ChefSection />
            <Accolades />
            <Reservation />
            <Footer />
          </>
        ) : (
          <>
            <Hero onOpenReservation={onOpenReservation} />
            <MenuShowcase onOpenReservation={onOpenReservation} />
          </>
        )
      }
    />
    <Route
      path="/login"
      element={<Navigate to="/user/login" replace />}
    />
    <Route
      path="/signup"
      element={<Navigate to="/user/register" replace />}
    />
    <Route
      path="/user/login"
      element={<AuthRoute role="user" mode="login" onAuthenticated={onAuthenticated} />}
    />
    <Route
      path="/user/register"
      element={<AuthRoute role="user" mode="signup" onAuthenticated={onAuthenticated} />}
    />
    <Route
      path="/food-partner/login"
      element={<AuthRoute role="foodPartner" mode="login" onAuthenticated={onAuthenticated} />}
    />
    <Route
      path="/food-partner/register"
      element={<AuthRoute role="foodPartner" mode="signup" onAuthenticated={onAuthenticated} />}
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
