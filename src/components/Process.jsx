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

export default function Process() {
  const steps = [
    [
      "01",
      "Обговорення",
      "Розбираємо задачу, цілі, функціонал та очікуваний результат.",
    ],
    [
      "02",
      "Планування",
      "Створюю структуру, прототип і зрозумілий план реалізації.",
    ],
    ["03", "Розробка", "Пишу код, інтегрую сервіси та тестую кожен етап."],
    [
      "04",
      "Запуск і підтримка",
      "Запускаємо проєкт та допрацьовуємо після старту.",
    ],
  ];

  return (
    <section id="process" className="section section--compact">
      <div className="container">
        <SectionTitle label="Процес" title="Як проходить робота" />

        <motion.div
          className="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {steps.map(([num, title, text]) => (
            <motion.div className="process-card" key={num} variants={fadeUp}>
              <div className="process-num">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}