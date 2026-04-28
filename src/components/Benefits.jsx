import { Briefcase, Code2, MessageCircle, Smartphone } from "lucide-react";
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

export default function Benefits() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Розумію бізнес",
      text: "Не просто пишу код, а вирішую задачі бізнесу та користувачів.",
    },
    {
      icon: Smartphone,
      title: "Думаю про mobile UX",
      text: "Створюю інтерфейси, якими зручно користуватись на всіх пристроях.",
    },
    {
      icon: MessageCircle,
      title: "Пояснюю без зайвої води",
      text: "Прозора комунікація, чіткі етапи та зрозумілі рішення.",
    },
    {
      icon: Code2,
      title: "Роблю логіку, а не тільки верстку",
      text: "Frontend, backend, база даних, інтеграції та автоматизація.",
    },
  ];

  return (
    <section id="benefits" className="section section--compact">
      <div className="container">
        <SectionTitle label="Переваги" title="Чому зі мною зручно" />

        <motion.div
          className="benefits-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {benefits.map(({ icon: Icon, title, text }) => (
            <motion.div className="benefit-card" key={title} variants={fadeUp}>
              <Icon size={25} />

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}