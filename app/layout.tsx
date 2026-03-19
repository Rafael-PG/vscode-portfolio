import "tailwindcss/tailwind.css";
import "./globals.css";
import "@fontsource/jetbrains-mono"; // ← Importa JetBrains Mono
import "@fontsource/poppins"; // Todos los pesos

// Provider
import { TabProvider } from "../lib/store/client/TabContext";

// Components
import Sidebar from "../components/sidebar/sidebar";
import Explorer from "../components/explorer/explorer";
import TabBar from "../components/tab-bar/tabBar";
import BottomBar from "../components/bottom-bar/bottomBar";
import Header from "../components/header/Header";

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden">
      <head>
        <title>Stuard Rafael | Portafolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Rafael Portfolio - Backend Engineer, AI/ML Dev, Data Scientist" />
        <meta name="keywords" content="rafael portfolio, backend engineer, AI/ML, data scientist" />
        <meta property="og:description" content="Backend Engineer specializing in AI/ML and Data Science" />
        <meta property="og:title" content="Rafael's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.vercel.app/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tu-dominio.vercel.app/" />
        <meta property="twitter:title" content="Rafael | Backend Engineer" />
        <meta property="twitter:description" content="Building intelligent backend systems with AI/ML" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className="font-jetbrains-mono overflow-hidden h-screen"> {/* ← Cambiado: ahora usa JetBrains Mono */}
        <Analytics />
        <div className="h-full overflow-hidden">
          <div className="h-full flex flex-col overflow-hidden">
            <Header />
            <div className="flex h-[calc(100%_-_17px_-_38px)] overflow-hidden">
              <Sidebar />
              <TabProvider>
                <div className="h-full overflow-hidden">
                  <Explorer />
                </div>
                <div className="max-width flex flex-col flex-1 overflow-hidden">
                  <TabBar />
                  <div className="max-width flex-1 bg-main overflow-hidden">
                    {children}
                  </div>
                </div>
              </TabProvider>
            </div>
            <BottomBar />
          </div>
        </div>
      </body>
    </html>
  );
}