import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
