import { ArrowRight, Bot, Globe2, Layers3, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

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

export default function Services() {
  const services = [
    {
      icon: Globe2,
      title: "Сайти для бізнесу",
      text: "Лендінги, сайти-візитки, каталоги, сторінки послуг та корпоративні сайти.",
    },
    {
      icon: ShoppingCart,
      title: "Веб-застосунки",
      text: "Кошики, форми замовлень, особисті кабінети та інтерактивні інтерфейси.",
    },
    {
      icon: Layers3,
      title: "Адмін-панелі",
      text: "Керування товарами, банерами, замовленнями, акціями та налаштуваннями.",
    },
    {
      icon: Bot,
      title: "Telegram-боти та інтеграції",
      text: "Сповіщення, бонуси, автоматизація комунікації та інтеграції з сервісами.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle label="Послуги" title="Що я роблю" />

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {services.map(({ icon: Icon, title, text }) => (
            <motion.article className="service-card" key={title} variants={fadeUp}>
              <div className="icon-box">
                <Icon size={26} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>

              <a href="#contacts">
                Детальніше <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}