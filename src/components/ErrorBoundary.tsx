import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-4">
                    <div className="text-center max-w-2xl">
                        <div className="mb-8">
                            <i className="ri-error-warning-line text-6xl text-gold-DEFAULT"></i>
                        </div>
                        <h1 className="text-4xl font-playfair mb-4">Bir Hata Oluştu</h1>
                        <p className="text-gray-400 mb-8">
                            Üzgünüz, bir şeyler yanlış gitti. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="px-8 py-3 bg-gold-DEFAULT text-black font-semibold rounded-full hover:bg-gold-light transition-all"
                            >
                                Ana Sayfaya Dön
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                            >
                                Sayfayı Yenile
                            </button>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-red-500 font-mono text-sm">
                                    Hata Detayları (Geliştirici Modu)
                                </summary>
                                <pre className="mt-4 p-4 bg-black/50 rounded text-xs overflow-auto">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

