import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check localStorage on mount
        const storedUser = localStorage.getItem('lavora_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email, password) => {
        // Mock Validation
        if (email === 'adminlavora5@gmail.com' && password === 'lavorasezer') {
            const userData = { email, name: 'Admin User', role: 'admin' };
            localStorage.setItem('lavora_user', JSON.stringify(userData));
            setUser(userData);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('lavora_user');
        setUser(null);
        navigate('/admin/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
