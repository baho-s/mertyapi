import React, { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleEscape}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="nav-link inline-flex items-center gap-1 bg-transparent border-0 p-0 text-[#d3cbbb] text-xs font-medium uppercase tracking-widest transition-colors duration-200 hover:text-[#fff8e8] focus-visible:text-[#fff8e8]"
      >
        <span>HAKKIMIZDA</span>
        <ChevronDown className="h-3 w-3" />
      </button>
      <div
        className={`absolute left-0 top-7 z-30 min-w-[155px] border border-[#51473a] bg-[#28221b] p-2 shadow-xl transition-all duration-200 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
      >
        <a
          href="#hakkimizda"
          onClick={() => setIsOpen(false)}
          className="block px-3 py-2 text-[10px] uppercase tracking-widest no-underline transition-colors duration-200 hover:bg-[#393027] text-[#d3cbbb] rounded"
        >
          Hakkımızda
        </a>
      </div>
    </div>
  );
};
