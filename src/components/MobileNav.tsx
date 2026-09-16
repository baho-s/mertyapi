import React from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <nav
          className="flex flex-col gap-4 border-t border-[#4a4035] px-6 py-5 bg-ink"
          aria-label="Mobil menü"
        >
          <a
            href="#hakkimizda"
            onClick={handleNavClick}
            className="nav-link no-underline text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#fff8e8]"
          >
            Hakkımızda
          </a>
          <a
            href="#fiyatlar"
            onClick={handleNavClick}
            className="nav-link no-underline text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#fff8e8]"
          >
            Fiyatlar
          </a>
          <a
            href="#projeler"
            onClick={handleNavClick}
            className="nav-link no-underline text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#fff8e8]"
          >
            Projeler
          </a>
          <a
            href="#referanslar"
            onClick={handleNavClick}
            className="nav-link no-underline text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#fff8e8]"
          >
            Referanslar
          </a>
          <a
            href="#iletisim"
            onClick={handleNavClick}
            className="nav-link no-underline text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#fff8e8]"
          >
            İletişim
          </a>
        </nav>
      )}
    </>
  );
};
