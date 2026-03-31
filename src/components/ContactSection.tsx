import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2f7787bf-f124-4c22-949a-a0fd7d844948",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      toast.success(t("contact.title") + " ✓");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Message failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: t("contact.phone"), value: "+49 152 3784 7955" },
    { icon: MapPin, label: t("contact.location"), value: "Hannover, Deutschland" },
    { icon: Mail, label: t("contact.email"), value: "akbari.radmehr@gmail.com" },
  ];

  return (
    <SectionWrapper id="contact" title={t("contact.title")}>
      <p className="text-muted-foreground mb-10 max-w-lg">{t("contact.subtitle")}</p>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-foreground font-medium text-sm">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder={t("contact.name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <textarea
            placeholder={t("contact.message")}
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover-lift flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {submitting ? "Sending..." : t("contact.send")}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
