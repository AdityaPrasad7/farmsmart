import React, { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Home from './pages/farmer/Home';
import FarmerDashboard from './pages/farmer/Dashboard';
import Form from './pages/farmer/Form';
import Result from './pages/farmer/Result';
import AIScan from './pages/farmer/Aiscan';
import VoiceAssistant from './components/VoiceAssistant';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminSidebar from './components/admin/AdminSidebar';
import AdminTopNavbar from './components/admin/AdminTopNavbar';
import Dashboard from './pages/admin/Dasboard';
import Crops from './pages/admin/Crops';
import ServiceProviders from './pages/admin/ServiceProviders';
import Farmers from './pages/admin/Farmers';
import Queries from './pages/admin/Queries';
import ImageAnalysis from './pages/admin/ImageAnalysis';
import Language from './pages/admin/Language';
import Settings from './pages/admin/Settings';
import ServiceProviderSidebar from './components/service-provider/ServiceProviderSidebar';
import Products from './pages/service-provider/Products';
import NearbyFarmers from './pages/service-provider/NearbyFarmers';

const AUTH_STORAGE_KEY = 'farmsmart_auth_session';

function loadAuthSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return { isAuthenticated: false, role: null };

    const parsed = JSON.parse(raw);
    return {
      isAuthenticated: Boolean(parsed?.isAuthenticated),
      role: parsed?.role || null,
    };
  } catch {
    return { isAuthenticated: false, role: null };
  }
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialAuth = useMemo(() => loadAuthSession(), []);

  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth.isAuthenticated);
  const [userRole, setUserRole] = useState(initialAuth.role);
  const [recommendationData, setRecommendationData] = useState(null);
  const [farmContext, setFarmContext] = useState({
    location: '',
    district: '',
    soilType: '',
    recommendations: []
  });

  const routeFromStep = (step) => {
    const routeMap = {
      home: '/home',
      form: '/form',
      result: '/result',
      aiscan: '/aiscan',
    };
    navigate(routeMap[step] || '/home');
  };

  const handleAuthSuccess = async (authData = {}) => {
    const role = authData.role || 'farmer';
    const session = {
      isAuthenticated: true,
      role,
    };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    setIsAuthenticated(true);
    setUserRole(role);

    if (role === 'admin') {
      navigate('/admin/dashboard', { replace: true });
      return;
    }
    if (role === 'serviceProvider') {
      navigate('/service-provider/products', { replace: true });
      return;
    }
    navigate('/dashboard', { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setUserRole(null);
    setRecommendationData(null);
    setFarmContext({
      location: '',
      district: '',
      soilType: '',
      recommendations: []
    });
    navigate('/login', { replace: true });
  };

  const ProtectedFarmerLayout = () => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== 'farmer') return <Navigate to="/login" replace />;

    return (
      <div className="min-h-screen relative overflow-hidden bg-[#e8f1e9]">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img src="/bg.png" alt="Farmland" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf9]/90 via-[#f8faf9]/60 to-[#f8faf9]/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar setStep={routeFromStep} onLogout={handleLogout} />

          <main className="max-w-4xl mx-auto p-6 pt-8 w-full flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </main>

          {/* Global Conversational AI Agent */}
          <VoiceAssistant farmContext={farmContext} />

          <footer className="py-12 text-center mt-auto">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
              Farmsmart AI • Premium Edition
            </p>
          </footer>
        </div>
      </div>
    );
  };

  const ProtectedAdminLayout = () => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== 'admin') return <Navigate to="/login" replace />;

    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-lime-50">
        <div className="flex min-h-screen w-full flex-col lg:flex-row">
          <AdminSidebar onLogout={handleLogout} />
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">
            <AdminTopNavbar />
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  };

  const ProtectedServiceProviderLayout = () => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== 'serviceProvider') return <Navigate to="/login" replace />;

    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-lime-50">
        <div className="flex min-h-screen w-full flex-col lg:flex-row">
          <ServiceProviderSidebar onLogout={handleLogout} />
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

  const redirectAuthenticatedUser = () => {
    if (!isAuthenticated) return <Outlet />;
    if (userRole === 'admin') return <Navigate to="/admin/dashboard" replace />;
    if (userRole === 'serviceProvider') return <Navigate to="/service-provider/products" replace />;
    return <Navigate to="/dashboard" replace />;
  };

  return (
    <Routes>
      <Route element={redirectAuthenticatedUser()}>
        <Route
          path="/login"
          element={(
            <AnimatePresence mode="wait">
              <Login
                key="login"
                onSubmit={handleAuthSuccess}
                onToggleAuth={() => navigate('/register')}
              />
            </AnimatePresence>
          )}
        />
        <Route
          path="/register"
          element={(
            <AnimatePresence mode="wait">
              <Register
                key="register"
                onSubmit={handleAuthSuccess}
                onToggleAuth={() => navigate('/login')}
              />
            </AnimatePresence>
          )}
        />
      </Route>

      <Route element={<ProtectedFarmerLayout />}>
        <Route
          path="/home"
          element={<Home key={location.pathname} setStep={routeFromStep} />}
        />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route
          path="/form"
          element={(
            <Form
              key={location.pathname}
              onRecommendationReady={(data, inputDetails) => {
                setRecommendationData(data);
                setFarmContext({
                  ...inputDetails,
                  recommendations: data.recommendations || data
                });
                navigate('/result');
              }}
            />
          )}
        />
        <Route
          path="/result"
          element={(
            <Result
              key={location.pathname}
              setStep={routeFromStep}
              recommendationData={recommendationData}
            />
          )}
        />
        <Route
          path="/aiscan"
          element={<AIScan key={location.pathname} setStep={routeFromStep} />}
        />
      </Route>

      <Route element={<ProtectedAdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/crops" element={<Crops />} />
        <Route path="/admin/service-providers" element={<ServiceProviders />} />
        <Route path="/admin/dealers" element={<ServiceProviders />} />
        <Route path="/admin/farmers" element={<Farmers />} />
        <Route path="/admin/queries" element={<Queries />} />
        <Route path="/admin/image-analysis" element={<ImageAnalysis />} />
        <Route path="/admin/language" element={<Language />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>

      <Route element={<ProtectedServiceProviderLayout />}>
        <Route path="/service-provider/products" element={<Products />} />
        <Route path="/service-provider/nearby-farmers" element={<NearbyFarmers />} />
      </Route>

      <Route
        path="*"
        element={
          <Navigate
            to={
              !isAuthenticated
                ? '/login'
                : userRole === 'admin'
                  ? '/admin/dashboard'
                  : userRole === 'serviceProvider'
                    ? '/service-provider/products'
                    : '/dashboard'
            }
            replace
          />
        }
      />
    </Routes>
  );
}