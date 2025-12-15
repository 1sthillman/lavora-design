import { useState } from 'react';
import { motion } from 'framer-motion';
import { LocationMap } from '../../../components/ui/expand-map';
import { TestimonialsSection } from '../../../components/ui/testimonials-with-marquee';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Mesajınız alındı. En kısa sürede dönüş yapacağız.');
    };

    return (
        <>
            {/* Customer Testimonials Section */}
            <TestimonialsSection
                title="Müşterilerimiz Hakkımızda Ne Diyor"
                description="Yıllardır kaliteli hizmet verdiğimiz değerli müşterilerimizin görüşleri"
                testimonials={[
                    {
                        author: {
                            name: "Ahmet Yılmaz",
                            handle: "Villa Sahibi",
                            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "Lavora Design ile çalışmak muhteşem bir deneyimdi. Villam için özel tasarlanan mobilyalar tam istediğim gibi oldu. El işçiliği ve kalite gerçekten üst seviyede. Her detay özenle düşünülmüş."
                    },
                    {
                        author: {
                            name: "Zeynep Kaya",
                            handle: "Konut Sahibi",
                            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "Modern tasarım anlayışları ve kaliteli malzeme kullanımları sayesinde evimiz tam bir sanat eserine dönüştü. Ekip çok profesyonel ve işlerinin ehli. Kesinlikle tavsiye ediyorum."
                    },
                    {
                        author: {
                            name: "Mehmet Demir",
                            handle: "Ofis Sahibi",
                            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "Ofisimiz için aldığımız özel tasarım mobilyalar hem estetik hem de fonksiyonel. Müşterilerimiz her zaman ofisimizin görünümünü övüyorlar. Lavora Design'a teşekkür ederiz."
                    },
                    {
                        author: {
                            name: "Ayşe Şahin",
                            handle: "Residence Sahibi",
                            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "Lüks residence projemiz için Lavora Design ile çalıştık. İtalyan deri kullanımı ve özel tasarım detayları harika. Teslimattan sonraki hizmet kalitesi de çok iyi. Çok memnunuz."
                    },
                    {
                        author: {
                            name: "Can Özdemir",
                            handle: "Ev Sahibi",
                            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "25 yıllık deneyimleri her detayda belli oluyor. Yatak odası takımımız gerçekten premium kalitede. Fiyat-performans açısından da çok makul. Herkese gönül rahatlığıyla önerebilirim."
                    },
                    {
                        author: {
                            name: "Elif Arslan",
                            handle: "Daire Sahibi",
                            avatar: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&h=150&fit=crop&crop=face"
                        },
                        text: "Mutfak mobilyalarımız için Lavora Design'ı tercih ettik ve çok doğru bir karar verdik. Hem modern tasarım hem de dayanıklılık bir arada. Ücretsiz 3D tasarım hizmeti çok faydalıydı."
                    }
                ]}
            />

            <section id="contact" className="relative py-24 bg-gradient-to-br from-nardo-dark via-matte to-nardo-dark border-t border-white/5">
                <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 overflow-hidden">
                    <div className="text-center mb-16">
                        <span className="px-4 py-1.5 bg-gold-DEFAULT/10 rounded-full text-gold-DEFAULT text-xs uppercase tracking-widest">İletişim</span>
                        <h2 className="text-5xl font-playfair text-white mt-6">Bize Ulaşın</h2>
                        <div className="w-12 h-[2px] bg-gold-DEFAULT mx-auto mt-6"></div>
                        <p className="text-gray-400 mt-6 max-w-lg mx-auto">Projeleriniz için bizimle iletişime geçin</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact info cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Interactive Map Component */}
                            <div className="flex justify-center mb-6">
                                <LocationMap
                                    location="Ümraniye, İstanbul"
                                    coordinates="41.0200° N, 29.1900° E"
                                    className="w-full max-w-xs"
                                />
                            </div>

                            {[
                                {
                                    title: "Adres",
                                    content: "Yukarı Dudullu Mah. Feza Sok. No:4/B\nÜmraniye, İstanbul",
                                    icon: "ri-map-pin-line",
                                    link: "https://share.google/4u18bRScWPppgIJIu"
                                },
                                { title: "Telefon", content: "+90 537 580 32 96", icon: "ri-phone-line", link: "tel:+905375803296" },
                                { title: "E-posta", content: "info@lavoradesign.com", icon: "ri-mail-line", link: "mailto:info@lavoradesign.com" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target={item.title === 'Adres' ? '_blank' : '_self'}
                                    rel={item.title === 'Adres' ? 'noopener noreferrer' : ''}
                                    className="flex p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-gold-DEFAULT/30 hover:bg-white/10 transition-all items-start gap-6 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 bg-gold-DEFAULT/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold-DEFAULT group-hover:text-matte transition-colors text-gold-DEFAULT">
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-playfair text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 font-montserrat whitespace-pre-line text-sm sm:text-base">{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </motion.div>

                        {/* Contact form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/5"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Ad Soyad</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white focus:border-gold-DEFAULT outline-none transition-colors"
                                        placeholder="Adınız ve soyadınız"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">E-posta</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white focus:border-gold-DEFAULT outline-none transition-colors"
                                        placeholder="E-posta adresiniz"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Telefon</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white focus:border-gold-DEFAULT outline-none transition-colors"
                                        placeholder="Telefon numaranız"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Mesajınız</label>
                                    <textarea
                                        rows={4}
                                        maxLength={500}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold-DEFAULT outline-none transition-colors resize-none"
                                        placeholder="Mesajınızı buraya yazın... (Maksimum 500 karakter)"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                    <div className="text-right text-xs text-gray-500">{formData.message.length}/500 karakter</div>
                                </div>

                                <button type="submit" className="w-full py-4 bg-gold-DEFAULT text-matte font-bold uppercase tracking-widest rounded-full hover:bg-gold-light transition-all transform hover:scale-[1.02]">
                                    Mesaj Gönder
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
