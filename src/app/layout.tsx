import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Omyxia Central Portal & App Launcher',
  description: 'Enterprise Microservices Unified Hub & Launcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-100 text-slate-900 min-h-screen antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
