import React from 'react';

interface HeaderProps {
  language?: 'TR' | 'EN';
  onLanguageChange?: (lang: 'TR' | 'EN') => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language: _language,
  onLanguageChange: _onLanguageChange,
  searchQuery = '',
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9d0c2] bg-[#f2eee6] shadow-[0_1px_0_rgba(71,57,45,0.08)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid h-[68px] grid-cols-[auto_1fr] items-center gap-6">
          <div className="flex items-center justify-start gap-3 text-[#1f1b17]">
            <div className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-[#1f1b17]/80 bg-transparent">
              <div className="h-4 w-4 border border-[#1f1b17] border-t-0 border-r-[3px] border-b-[3px] border-l-0" aria-hidden="true" />
            </div>

            <a
              href="#"
              className="text-center no-underline transition-opacity hover:opacity-90"
              aria-label="MERTYAPI ana sayfa"
            >
              <span className="block font-[Georgia,serif] text-[22px] font-medium tracking-[0.02em] text-[#1f1b17] sm:text-[28px]">
                MERTYAPI
              </span>
            </a>
          </div>

          <div className="flex items-center justify-end gap-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#1f1b17] sm:gap-5">
            <a
              href="#"
              className="no-underline text-[#1f1b17] transition-opacity hover:opacity-70"
            >
              HAKKIMIZDA
            </a>
            <a
              href="#"
              className="no-underline text-[#1f1b17] transition-opacity hover:opacity-70"
            >
              İLETİŞİM
            </a>

            <div className="flex items-center gap-2 rounded-full border border-[#2a241d] bg-[#efe6d7] px-2 py-1.5 shadow-[inset_0_0_0_1px_rgba(31,27,23,0.06)]">
              <span aria-hidden="true" className="text-[#1f1b17]">⌕</span>
              <input
                type="text"
                aria-label="Arama"
                placeholder="ARA"
                value={searchQuery}
                onChange={(event) => onSearchChange?.(event.target.value)}
                className="w-16 border-0 bg-transparent px-0 py-0 text-[9px] font-medium uppercase tracking-[0.14em] text-[#1f1b17] placeholder:text-[#1f1b17]/70 outline-none"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#1d1a18] bg-[#efe6d7] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#1f1b17] transition-colors hover:bg-[#e8dcc2]"
            >
              KATALOG İNDİR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
