import { Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="logo">
            <span className="logo__mark">R</span>
            <span>
              Rafa <b>Dev</b>
            </span>
          </a>

          <p>Сайти, веб-застосунки та автоматизація для малого бізнесу.</p>
        </div>

        <div>
          <h4>Контакти</h4>

          <a href="mailto:dmitry.rafa@gmail.com">
            <Mail size={16} />
            dmitry.rafa@gmail.com
          </a>

          <a href="https://t.me/dimas_raf" target="_blank" rel="noreferrer">
            <Send size={16} />
            Telegram
          </a>
        </div>

        <div>
          <h4>Навігація</h4>
          <a href="#services">Послуги</a>
          <a href="#case">Кейс</a>
          <a href="#process">Процес</a>
        </div>
      </div>

      <div className="container footer__bottom">
        © 2026 Rafa Dev. Усі права захищені.
      </div>
    </footer>
  );
}