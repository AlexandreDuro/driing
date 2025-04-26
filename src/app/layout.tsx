import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Driing - Conciergerie",
  description: "Driing - Conciergerie d'entreprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
