import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import profilePhoto from "../assets/myphoto.PNG";
import TechStrip from "./TechStrip";

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

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg hero__bg--one" />
      <div className="hero__bg hero__bg--two" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="eyebrow" variants={fadeUp}>
            <span className="pulse" />
            Freelance Full-Stack Developer
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Створюю сайти та веб-застосунки, які приносять бізнесу{" "}
            <span>результат</span>
          </motion.h1>

          <motion.p className="hero__text" variants={fadeUp}>
            Сайти, адмін-панелі, Telegram-боти та бізнес-логіка під ключ.
            Допомагаю автоматизувати процеси, приймати замовлення та запускати
            зручні цифрові рішення.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a
              className="btn btn--primary"
              href="https://t.me/dimas_raf"
              target="_blank"
              rel="noreferrer"
            >
              Обговорити проєкт
              <ArrowRight size={18} />
            </a>

            <a className="btn btn--ghost" href="#case">
              Переглянути кейс
              <ExternalLink size={17} />
            </a>
          </motion.div>

          <motion.div className="hero__features" variants={fadeUp}>
            <div>
              <CheckCircle2 size={18} />
              Чистий код
            </div>
            <div>
              <Zap size={18} />
              Бізнес-логіка
            </div>
            <div>
              <Smartphone size={18} />
              Mobile-first UX
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        >
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img src={profilePhoto} alt="Dmytro Rafalovsky" />
          </div>

          <motion.div
            className="floating-card floating-card--orders"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="floating-card__title">Останні замовлення</div>
            <div className="order-row">
              <span>#1258</span>
              <b>₴1,290</b>
            </div>
            <div className="order-row">
              <span>#1257</span>
              <b>₴890</b>
            </div>
            <div className="order-row">
              <span>#1256</span>
              <b>₴1,490</b>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card--stats"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="floating-card__title">Статистика</div>
            <div className="stat-number">+247%</div>
            <div className="mini-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card--code"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="code-dot" />
            <code>
              app.post('/order', async () =&gt; {"{"}
              <br />
              &nbsp;&nbsp;createOrder(req.body)
              <br />
              {"}"})
            </code>
          </motion.div>
        </motion.div>
      </div>

      <TechStrip />
    </section>
  );
}