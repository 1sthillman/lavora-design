import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';

// Mock filter data
const filters = [
    { id: 'category', name: 'Kategori', options: ['Salon', 'Mutfak', 'Yatak Odası', 'Ofis', 'Bahçe', 'Aydınlatma', 'Aksesuar'] },
    { id: 'style', name: 'Tarz', options: ['Modern', 'Klasik', 'Endüstriyel', 'Minimalist', 'Bohem', 'Luxury'] },
    { id: 'material', name: 'Materyal', options: ['Ahşap', 'Mermer', 'Metal', 'Deri', 'Kadife', 'Cam'] },
];

export function FilterPanel({ onFilterChange }) {
    const [activeFilters, setActiveFilters] = useState({});
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleFilter = (type, value) => {
        setActiveFilters(prev => {
            const current = prev[type] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];

            const newFilters = { ...prev, [type]: updated };
            if (updated.length === 0) delete newFilters[type];

            onFilterChange && onFilterChange(newFilters);
            return newFilters;
        });
    };

    const clearFilters = () => {
        setActiveFilters({});
        onFilterChange && onFilterChange({});
    };

    const hasActiveFilters = Object.keys(activeFilters).length > 0;

    return (
        <div className="w-full relative z-30 mb-10">

            {/* Desktop & Tablet: Horizontal Bar */}
            <div className="hidden md:flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <SlidersHorizontal size={14} /> Filtrele:
                    </span>

                    {filters.map(filter => (
                        <div key={filter.id} className="relative group">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === filter.id ? null : filter.id)}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-light uppercase tracking-wider hover:text-white transition-colors py-2",
                                    activeFilters[filter.id]?.length > 0 ? "text-accent" : "text-stone-400"
                                )}
                            >
                                {filter.name}
                                {activeFilters[filter.id]?.length > 0 && (
                                    <span className="ml-1 text-[10px] bg-accent/20 text-accent rounded-full w-5 h-5 flex items-center justify-center">
                                        {activeFilters[filter.id].length}
                                    </span>
                                )}
                                <ChevronDown size={12} className={cn("transition-transform duration-300", openDropdown === filter.id ? "rotate-180" : "")} />
                            </button>

                            <AnimatePresence>
                                {openDropdown === filter.id && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-[#0A0A0A] border border-white/10 shadow-2xl z-20 rounded-sm overflow-hidden"
                                        >
                                            <div className="p-4 grid gap-1 max-h-80 overflow-y-auto custom-scrollbar">
                                                {filter.options.map(option => (
                                                    <button
                                                        key={option}
                                                        onClick={() => toggleFilter(filter.id, option)}
                                                        className="flex items-center justify-between w-full text-left px-3 py-2 text-stone-400 hover:text-white hover:bg-white/5 transition-colors rounded-sm group/opt"
                                                    >
                                                        <span className="text-sm font-light">{option}</span>
                                                        {activeFilters[filter.id]?.includes(option) && <Check size={14} className="text-accent" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-[10px] uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors">
                        Temizle
                    </button>
                )}
            </div>

            {/* Mobile: Filter Button & Sheet */}
            <div className="md:hidden flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {Object.values(activeFilters).flat().length} Seçim
                </span>
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="flex items-center gap-2 text-white text-sm uppercase tracking-widest border border-white/20 px-4 py-2 rounded-sm"
                >
                    <SlidersHorizontal size={14} /> Filtrele
                </button>
            </div>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex justify-end"
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full max-w-xs bg-[#0A0A0A] h-full shadow-2xl border-l border-white/10 p-6 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-serif text-white">Filtreleme</h3>
                                <button onClick={() => setIsMobileOpen(false)}><X className="text-white" /></button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-8">
                                {filters.map(filter => (
                                    <div key={filter.id}>
                                        <h4 className="text-xs uppercase tracking-widest text-accent mb-4 block">{filter.name}</h4>
                                        <div className="space-y-2">
                                            {filter.options.map(option => (
                                                <button
                                                    key={option}
                                                    onClick={() => toggleFilter(filter.id, option)}
                                                    className={cn(
                                                        "flex items-center gap-3 w-full text-left py-2 transition-colors",
                                                        activeFilters[filter.id]?.includes(option) ? "text-white" : "text-stone-500"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-4 h-4 rounded-sm border flex items-center justify-center transition-colors",
                                                        activeFilters[filter.id]?.includes(option) ? "border-accent bg-accent" : "border-stone-700"
                                                    )}>
                                                        {activeFilters[filter.id]?.includes(option) && <Check size={10} className="text-black" />}
                                                    </div>
                                                    <span className="text-sm">{option}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <button
                                    onClick={clearFilters}
                                    className="w-full text-xs uppercase tracking-widest text-white/30 mb-4 hover:text-white"
                                >
                                    Filtreleri Temizle
                                </button>
                                <Button variant="primary" className="w-full" onClick={() => setIsMobileOpen(false)}>Sonuçları Gör</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Active Tags Summary (Optional) */}
            {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 pt-4">
                    {Object.entries(activeFilters).map(([key, values]) =>
                        values.map(val => (
                            <span key={`${key}-${val}`} className="text-[10px] bg-white/5 border border-white/10 text-stone-300 px-3 py-1 rounded-full flex items-center gap-2">
                                {val} <button onClick={() => toggleFilter(key, val)}><X size={10} /></button>
                            </span>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
