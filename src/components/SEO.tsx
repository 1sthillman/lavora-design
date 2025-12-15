import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: object;
}

const SEO = ({
    title = "Lavora Design - Premium Mobilya & Lüks İç Mekan Tasarımı | İstanbul Ümraniye",
    description = "1998'den beri İstanbul'da premium mobilya ve lüks iç mekan tasarımı hizmeti sunmaktadır. Salon, yatak odası, mutfak, ofis mobilyaları ve özel tasarım projeler. 15,000+ mutlu müşteri, 450+ tamamlanmış proje.",
    keywords = "lavora design, premium mobilya, lüks mobilya, iç mekan tasarımı, özel tasarım mobilya, İstanbul mobilya, Ümraniye mobilya, modern mobilya, klasik mobilya, ofis mobilyası",
    image = "https://lavoradesign.com/og-image.jpg", // Default OG image
    url = typeof window !== 'undefined' ? window.location.href : '',
    type = "website",
    schema
}: SEOProps) => {

    const siteTitle = title.includes("Lavora Design") ? title : `${title} | Lavora Design`;
    const currentUrl = url;

    // Default Organization Schema (Global)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lavora Design",
        "url": "https://lavoradesign.com",
        "logo": "https://lavoradesign.com/logo-lavora.webp",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-537-580-32-96",
            "contactType": "customer service",
            "areaServed": "TR",
            "availableLanguage": "Turkish"
        },
        "sameAs": [
            "https://www.instagram.com/lavoradesign",
            "https://www.linkedin.com/company/lavoradesign",
            "https://www.pinterest.com/lavoradesign"
        ]
    };

    // Local Business Schema (Global)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "FurnitureStore",
        "name": "Lavora Design Mobilya Atölyesi",
        "image": image,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Yukarı Dudullu Mahallesi, Feza Sokak 4B",
            "addressLocality": "Ümraniye",
            "addressRegion": "İstanbul",
            "postalCode": "34000",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.0200,
            "longitude": 29.1900
        },
        "telephone": "+90-537-580-32-96",
        "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "18:00" }
        ],
        "priceRange": "$$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lavoradesign.com" },
                        url !== "https://lavoradesign.com" && { "@type": "ListItem", "position": 2, "name": title.split(" | ")[0], "item": url }
                    ].filter(Boolean)
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
