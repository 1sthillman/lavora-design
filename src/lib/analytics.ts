declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: any) => void;
        dataLayer: any[];
    }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Initialize helper
export const initGA = () => {
    if (typeof window === 'undefined') return;

    // Check if script already exists
    if (document.getElementById('ga-script')) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.id = 'ga-script';

    const script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
};
