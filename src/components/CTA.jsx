import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contacts" className="cta-section">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <h2>Маєте ідею для сайту або застосунку?</h2>
            <p>
              Обговоримо задачу, знайдемо найкраще рішення та запустимо ваш
              проєкт без зайвої води.
            </p>
          </div>

          <a
            className="btn btn--white"
            href="https://t.me/dimas_raf"
            target="_blank"
            rel="noreferrer"
          >
            <Send size={18} />
            Написати в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}