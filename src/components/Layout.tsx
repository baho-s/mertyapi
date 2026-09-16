import React from 'react';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
  language: 'TR' | 'EN';
  onLanguageChange: (lang: 'TR' | 'EN') => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  language,
  onLanguageChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink font-franklin">
      <Header
        language={language}
        onLanguageChange={onLanguageChange}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-12">
        {children}
      </main>
      <WhatsAppButton />
    </div>
  );
};
