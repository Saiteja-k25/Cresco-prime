import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));

// Pure CSS Gold Loading Spinner Fallback
function LoadingSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0A0A0A]">
      <div className="w-12 h-12 border-4 border-[#C9A84C]/20 border-t-[#C9A84C] rounded-full animate-spin"></div>
    </div>
  );
}

// Simple Inline 404 Component
function NotFound() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#0A0A0A]">
      <h1 className="font-display text-8xl font-bold text-[#C9A84C] mb-2">404</h1>
      <p className="text-[#9E9E8F] text-xl mb-8">Page not found</p>
      <Link 
        to="/" 
        className="px-8 py-3 border border-[#C9A84C] text-[#C9A84C] rounded-md hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
