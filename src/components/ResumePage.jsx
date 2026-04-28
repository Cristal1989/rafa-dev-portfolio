import {
  ArrowLeft,
  Briefcase,
  Code2,
  ExternalLink,
  Globe2,
  Mail,
  Server,
  Send,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "REST API",
  "Telegram Bot API",
  "Cloudinary",
  "Vercel",
  "Railway",
  "GitHub",
];

const projectFeatures = [
  "React frontend",
  "Mobile-first adaptive layout",
  "Shopping cart and checkout",
  "Express.js backend",
  "PostgreSQL database",
  "Admin panel",
  "Product CRUD",
  "Cloudinary image upload",
  "Telegram order notifications",
  "Bonus logic for Telegram-linked customers",
  "UTM / gclid tracking",
  "Deployment on Vercel and Railway",
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <header className="resume-header">
        <div className="container resume-header__inner">
          <Link to="/" className="resume-back">
            <ArrowLeft size={18} />
            На головну
          </Link>

          <a
            className="header__cta"
            href="https://t.me/dimas_raf"
            target="_blank"
            rel="noreferrer"
          >
            <Send size={17} />
            Telegram
          </a>
        </div>
      </header>

      <main>
        <section className="resume-hero">
          <div className="container resume-hero__inner">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="resume-main-card"
            >
              <div className="resume-label">CV / Portfolio</div>

              <h1>Dmytro Rafalovsky</h1>

              <h2>Junior Frontend Developer / Junior Fullstack Developer</h2>

              <p>
                Розробляю веб-застосунки на React та JavaScript. Маю практичний
                досвід створення реального комерційного проєкту: сайт доставки
                з каталогом, кошиком, оформленням замовлень, адмін-панеллю,
                backend на Express.js, PostgreSQL та Telegram-інтеграцією.
              </p>

              <div className="resume-actions">
                <a
                  className="btn btn--primary"
                  href="https://github.com/Cristal1989/rafa-dev-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ExternalLink size={17} />
                </a>

                <a
                  className="btn btn--ghost"
                  href="https://karakatizza.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Featured project
                  <ExternalLink size={17} />
                </a>

                <a className="btn btn--ghost" href="mailto:gips5921@gmail.com">
                  Email
                  <Mail size={17} />
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="resume-side-card"
            >
              <h3>Contact</h3>

              <a href="mailto:gips5921@gmail.com">
                <Mail size={17} />
                gips5921@gmail.com
              </a>

              <a
                href="https://t.me/dimas_raf"
                target="_blank"
                rel="noreferrer"
              >
                <Send size={17} />
                Telegram
              </a>

              <a
                href="https://github.com/Cristal1989"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                GitHub
              </a>

              <div className="resume-location">Ukraine · Remote / Hybrid</div>
            </motion.aside>
          </div>
        </section>

        <section className="resume-section">
          <div className="container resume-grid">
            <motion.div
              className="resume-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="resume-card__icon">
                <Code2 size={22} />
              </div>

              <h3>Tech Stack</h3>

              <div className="resume-stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="resume-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="resume-card__icon">
                <Briefcase size={22} />
              </div>

              <h3>What I’m looking for</h3>

              <p>
                Шукаю позицію Junior Frontend Developer / Junior Fullstack
                Developer, де зможу працювати з React, JavaScript, API,
                UI-логікою та реальними бізнес-задачами.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="resume-section">
          <div className="container">
            <motion.div
              className="resume-project"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div>
                <div className="resume-label">Featured Project</div>

                <h2>Karakatizza Delivery Website</h2>

                <p>
                  Реальний комерційний проєкт для служби доставки суші:
                  frontend, backend, database, admin panel, Telegram
                  integration та бізнес-логіка для замовлень і бонусів.
                </p>

                <div className="resume-project__links">
                  <a
                    href="https://karakatizza.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live website <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://github.com/Cristal1989/karakatizza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <div className="resume-project__features">
                {projectFeatures.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="resume-section">
          <div className="container resume-columns">
            <motion.div
              className="resume-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="resume-card__icon">
                <Globe2 size={22} />
              </div>

              <h3>Frontend</h3>

              <ul>
                <li>React components and state logic</li>
                <li>Responsive / mobile-first layout</li>
                <li>Forms, validation and checkout UX</li>
                <li>Working with REST API</li>
                <li>UI polish and animations</li>
              </ul>
            </motion.div>

            <motion.div
              className="resume-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="resume-card__icon">
                <Server size={22} />
              </div>

              <h3>Backend</h3>

              <ul>
                <li>Node.js / Express.js API</li>
                <li>PostgreSQL database logic</li>
                <li>Order and customer data handling</li>
                <li>Telegram bot integration</li>
                <li>Deployment on Railway</li>
              </ul>
            </motion.div>

            <motion.div
              className="resume-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="resume-card__icon">
                <Smartphone size={22} />
              </div>

              <h3>Product thinking</h3>

              <ul>
                <li>Business logic, not only layout</li>
                <li>Admin panel for real users</li>
                <li>Customer journey and checkout flow</li>
                <li>Analytics tags: UTM / gclid</li>
                <li>Clear communication and iteration</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="resume-section resume-section--last">
          <div className="container">
            <motion.div
              className="resume-cta"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div>
                <h2>Open to Junior Frontend / Fullstack roles</h2>
                <p>
                  Готовий працювати з React, JavaScript, API, UI-логікою,
                  backend-задачами та реальними продуктами.
                </p>
              </div>

              <a
                className="btn btn--white"
                href="https://t.me/dimas_raf"
                target="_blank"
                rel="noreferrer"
              >
                Contact me
                <Send size={17} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}