import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCTA SUN Residence - Premium Villa Investment in Bali | SEVEN SKY",
  description: "Invest in Bali's premier villa project OCTA SUN Residence. From USD 392,000 with ROI up to 17% per year. Capital growth +40% until completion. Limited pre-sale units available.",
  keywords: "Bali villa investment, luxury villas Bali, Bukit Peninsula, OCTA SUN Residence, SEVEN SKY, villa investment, Bali real estate, luxury property investment",
  authors: [{ name: "SEVEN SKY Developments" }],
  creator: "SEVEN SKY Developments",
  publisher: "SEVEN SKY Developments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://octa-sun-residence.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "OCTA SUN Residence - Premium Villa Investment in Bali",
    description: "Invest in Bali's premier villa project with ROI up to 17% per year. Limited pre-sale units from USD 392,000.",
    url: 'https://octa-sun-residence.com',
    siteName: 'OCTA SUN Residence',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'OCTA SUN Residence Luxury Villa Investment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "OCTA SUN Residence - Premium Villa Investment in Bali",
    description: "Invest in Bali's premier villa project with ROI up to 17% per year. Limited pre-sale units from USD 392,000.",
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D6B278" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
