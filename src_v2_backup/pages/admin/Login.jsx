import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const success = login(email, password);
        if (success) {
            navigate('/admin/dashboard');
        } else {
            setError('Giriş bilgileri hatalı!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md bg-surface border border-primary/20 p-8 rounded-sm shadow-2xl">
                <h1 className="text-3xl font-serif font-bold text-center bg-gold-gradient bg-clip-text text-transparent mb-8">
                    LAVORA ADMIN
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="E-posta"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Şifre"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <Button className="w-full">GİRİŞ YAP</Button>
                </form>
            </div>
        </div>
    );
}
