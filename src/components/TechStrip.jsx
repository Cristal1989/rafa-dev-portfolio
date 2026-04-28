import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Rocket,
  Send,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.08,
    },
  },
};

export default function TechStrip() {
  const tech = [
    ["React", Code2],
    ["JavaScript", Sparkles],
    ["Node.js", Server],
    ["Express.js", Layers3],
    ["PostgreSQL", Database],
    ["REST API", Globe2],
    ["Telegram Bot API", Send],
    ["Cloudinary", Rocket],
    ["Vercel", Zap],
    ["Railway", Server],
  ];

  return (
    <div className="container">
      <motion.div
        className="tech-strip"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {tech.map(([name, Icon]) => (
          <motion.div className="tech-item" key={name} variants={fadeUp}>
            <Icon size={18} />
            {name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}