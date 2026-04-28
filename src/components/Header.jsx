import { Menu, Send, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          href="#home"
          className="logo"
          aria-label="Rafa Dev home"
          onClick={closeMenu}
        >
          <span className="logo__mark">R</span>
          <span>
            Rafa <b>Dev</b>
          </span>
        </a>

        <nav className="nav">
          <a href="#services">Послуги</a>
          <a href="#case">Кейс</a>
          <a href="#benefits">Переваги</a>
          <a href="#process">Процес</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <a
          className="header__cta"
          href="https://t.me/dimas_raf"
          target="_blank"
          rel="noreferrer"
        >
          <Send size={17} />
          Telegram
        </a>

        <button
          className="mobile-menu"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <button
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

      <div className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}>
        <div className="mobile-nav__inner">
          <a href="#services" onClick={closeMenu}>
            Послуги
          </a>
          <a href="#case" onClick={closeMenu}>
            Кейс
          </a>
          <a href="#benefits" onClick={closeMenu}>
            Переваги
          </a>
          <a href="#process" onClick={closeMenu}>
            Процес
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Контакти
          </a>

          <a
            className="mobile-nav__cta"
            href="https://t.me/dimas_raf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Send size={17} />
            Написати в Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
