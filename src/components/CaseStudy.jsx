import {
  CheckCircle2,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

import desktopMockup from "../assets/desktop.jpg";
import mobileMockup from "../assets/mobile.PNG";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CaseStudy() {
  const features = [
    "Каталог і категорії",
    "Кошик і checkout",
    "Admin panel",
    "CRUD товарів",
    "PostgreSQL database",
    "Cloudinary image upload",
    "Telegram notifications",
    "UTM / gclid tracking",
  ];

  return (
    <section id="case" className="section case-section">
      <div className="container">
        <motion.div
          className="case-card case-card--real"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="case-content" variants={fadeUp}>
            <div className="section-label">Featured Project</div>

            <h2>
              Karakatizza — сервіс доставки з повноцінною бізнес-логікою
            </h2>

            <p>
              Реальний комерційний проєкт для служби доставки: каталог товарів,
              кошик, оформлення замовлення, адмін-панель, backend, база даних
              та Telegram-інтеграція.
            </p>

            <div className="case-features">
              {features.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </div>
              ))}
            </div>

            <div className="case-actions">
              <a
                className="btn btn--primary"
                href="https://karakatizza.com/"
                target="_blank"
                rel="noreferrer"
              >
                Переглянути сайт
                <ExternalLink size={17} />
              </a>

              <a
                className="btn btn--ghost"
                href="https://github.com/Cristal1989/karakatizza"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ExternalLink size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div className="case-real-visual" variants={fadeUp}>
            <div className="case-orbit case-orbit--one" />
            <div className="case-orbit case-orbit--two" />

            <div className="real-browser">
              <div className="real-browser__top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-url">karakatizza.com</div>
              </div>

              <img src={desktopMockup} alt="Karakatizza desktop website" />
            </div>

            <div className="real-phone">
              <div className="real-phone__speaker" />
              <img src={mobileMockup} alt="Karakatizza mobile website" />
            </div>

            <div className="real-admin">
              <div className="real-admin__icon">
                <Monitor size={18} />
              </div>

              <div>
                <b>Admin panel</b>
                <span>товари, банери, акції, налаштування</span>
              </div>
            </div>

            <div className="real-mobile-badge">
              <Smartphone size={18} />
              <span>Mobile-first checkout</span>
            </div>

            <div className="real-project-badge real-project-badge--new">
              <CheckCircle2 size={18} />
              <span>
                <b>Реальний комерційний</b>
                проєкт, а не навчальний макет.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}