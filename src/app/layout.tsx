import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Driing - Conciergerie",
  description: "Driing - Conciergerie d'entreprise",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png' },
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${robotoMono.variable} antialiased`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function handleIntersection(entries, observer) {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('stagger-visible');
                    observer.unobserve(entry.target);
                  }
                });
              }

              // Only run on the client side, not during SSR
              if (typeof window !== 'undefined') {
                // Wait for document to be fully loaded
                if (document.readyState === 'complete') {
                  initAnimation();
                } else {
                  document.addEventListener('DOMContentLoaded', initAnimation);
                }
              }

              function initAnimation() {
                const observer = new IntersectionObserver(handleIntersection, { 
                  threshold: 0.1,
                  rootMargin: '0px 0px -100px 0px'
                });
                
                document.querySelectorAll('.stagger-item').forEach(item => {
                  observer.observe(item);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
