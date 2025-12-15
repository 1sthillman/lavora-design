import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">İletişime Geçin</h1>
                <p className="text-primary max-w-2xl mx-auto">Sorularınız, proje talepleriniz veya randevu için bize ulaşın.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-surface p-8 border border-primary/10 shadow-2xl">
                    <h2 className="text-2xl font-serif font-bold text-text mb-6">Mesaj Gönderin</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Adınız Soyadınız" />
                            <Input label="Email Adresiniz" type="email" />
                        </div>
                        <Input label="Telefon Numaranız" />
                        <Input label="Konu" />
                        <textarea
                            className="w-full bg-background border border-primary/30 text-text px-4 py-3 outline-none focus:border-accent min-h-[150px] placeholder-primary/50"
                            placeholder="Mesajınız..."
                        />
                        <Button className="w-full">GÖNDER</Button>
                    </form>
                </div>

                {/* Info & Map */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: MapPin, title: "Adres", desc: "Yukarı Dudullu Mah. Feza Sok. 4B, Ümraniye, İstanbul" },
                            { icon: Phone, title: "Telefon", desc: "+90 537 580 32 96" },
                            { icon: Mail, title: "Email", desc: "info@lavoradesign.com" },
                            { icon: Clock, title: "Çalışma Saatleri", desc: "Pzt-Cum: 09:00-19:00\nCmt: 10:00-18:00" },
                        ].map((item, i) => (
                            <div key={i} className="bg-surface p-6 border border-primary/10 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
                                <item.icon className="text-accent mb-4" size={32} />
                                <h3 className="font-serif font-bold text-text mb-2">{item.title}</h3>
                                <p className="text-primary text-sm whitespace-pre-line">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-[300px] bg-surface relative grayscale hover:grayscale-0 transition-all duration-500 border border-primary/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6521369796856!2d29.155776315413364!3d40.98925597930268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadaba12345678%3A0x123456789abcdef!2sModoko!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
