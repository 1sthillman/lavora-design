import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { Layout } from '@/components/layout/Layout';
import AdminLayout from '@/layouts/AdminLayout';

// Public Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SourceCode from '@/pages/SourceCode';

// Admin Pages
import Login from '@/pages/admin/Login';
import Dashboard from '@/pages/admin/Dashboard';
import ProductManager from '@/pages/admin/ProductManager';

function App() {
  const isBasenameSet = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/';

  return (
    <Router basename={isBasenameSet ? import.meta.env.BASE_URL : undefined}>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout><Home /></Layout>} path="/" />
          <Route element={<Layout><Products /></Layout>} path="/products" />
          <Route element={<Layout><ProductDetail /></Layout>} path="/products/:id" />
          <Route element={<Layout><Gallery /></Layout>} path="/gallery" />
          <Route element={<Layout><About /></Layout>} path="/about" />
          <Route element={<Layout><Contact /></Layout>} path="/contact" />
          <Route element={<Layout><SourceCode /></Layout>} path="/source-code" />

          {/* Admin Login */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route element={<RequireAuth />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/products" element={<ProductManager />} />
              <Route path="/admin/settings" element={<div className="p-8">Ayarlar Gelecek...</div>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
