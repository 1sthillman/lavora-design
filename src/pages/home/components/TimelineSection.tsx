import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineSection = () => {
    const milestones = [
        {
            year: '1998',
            title: 'Kuruluş',
            description: 'Lavora Design, lüks mobilya sektöründe yolculuğuna başladı',
            icon: 'ri-rocket-fill',
        },
        {
            year: '2005',
            title: 'İlk Showroom',
            description: 'İstanbul\'da prestijli showroom açılışı gerçekleştirildi',
            icon: 'ri-store-2-fill',
        },
        {
            year: '2010',
            title: 'Uluslararası Genişleme',
            description: 'Avrupa ve Orta Doğu pazarlarına ihracat başladı',
            icon: 'ri-global-fill',
        },
        {
            year: '2018',
            title: 'Ödüller',
            description: 'Mükemmellik ve Tasarım kategorisinde 3 büyük ödül',
            icon: 'ri-award-fill',
        },
        {
            year: '2025',
            title: 'Dijital Dönüşüm',
            description: 'V3.0 Modern Online Showroom lansmanı',
            icon: 'ri-macbook-fill',
        },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-DEFAULT/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-DEFAULT/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 relative z-10 overflow-hidden">
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-gold-DEFAULT text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        HİKAYEMİZ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-playfair text-white mb-4 md:mb-6 leading-tight px-4"
                    >
                        Yolculuğumuz
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-400 font-montserrat max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-4"
                    >
                        25 yılı aşkın deneyimimizle lüks mobilya sektöründe iz bıraktık
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent mx-auto mt-6 md:mt-8"
                    ></motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Animated Vertical Line - Desktop Only */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-gold-DEFAULT/0 via-gold-DEFAULT/50 to-gold-DEFAULT/0 transform -translate-x-1/2 hidden md:block"
                    ></motion.div>

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((milestone, index) => {
                            const ref = useRef<HTMLDivElement>(null);
                            const inView = useInView(ref, { once: true, margin: "-80px" });

                            return (
                                <motion.div
                                    key={milestone.year}
                                    ref={ref}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.15 }}
                                    className={`relative flex items-center gap-6 md:gap-8 flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Year Badge (Center Node - Desktop) */}
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={inView ? { scale: 1, rotate: 0 } : {}}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring" }}
                                            className="relative group"
                                        >
                                            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gold-DEFAULT/40 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center shadow-[0_0_40px_rgba(184,148,31,0.25)] relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <div className="absolute inset-0 rounded-full animate-ping opacity-20 border border-gold-DEFAULT"></div>
                                                <span className="font-playfair font-bold text-xl lg:text-2xl text-gold-DEFAULT relative z-10 group-hover:scale-110 transition-transform duration-300">{milestone.year}</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Mobile Year Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={inView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, type: "spring" }}
                                        className="md:hidden w-20 h-20 rounded-full border-2 border-gold-DEFAULT/40 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center shadow-[0_0_30px_rgba(184,148,31,0.2)] mb-4"
                                    >
                                        <span className="font-playfair font-bold text-xl text-gold-DEFAULT">{milestone.year}</span>
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
                                        className={`flex-1 w-full md:w-auto`}
                                    >
                                        <div className={`
                                    bg-gradient-to-br from-[#151515] to-[#0D0D0D] border border-white/5 p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl 
                                    hover:border-gold-DEFAULT/40 transition-all duration-500 group
                                    flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center
                                    shadow-2xl shadow-black/50 relative overflow-hidden backdrop-blur-sm
                                 `}>
                                            {/* Animated Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/5 to-gold-DEFAULT/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                            <div className="relative z-10 w-full">
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                                                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-DEFAULT/20 to-gold-DEFAULT/5 flex items-center justify-center mb-5 md:mb-6 text-gold-DEFAULT border border-gold-DEFAULT/20 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                                                >
                                                    <i className={`${milestone.icon} text-2xl md:text-3xl`}></i>
                                                </motion.div>
                                                <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair text-white mb-2 md:mb-3 group-hover:text-gold-DEFAULT transition-colors duration-300">{milestone.title}</h3>
                                                <p className="text-gray-400 font-montserrat leading-relaxed text-xs md:text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Empty Spacer */}
                                    <div className="flex-1 hidden md:block"></div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
