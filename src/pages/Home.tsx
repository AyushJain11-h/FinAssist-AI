import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Shield, FileText, ArrowRight, MessageSquare, CheckCircle, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8">
              <Zap className="h-3.5 w-3.5" /> AI-Powered Loan Decisions
            </div>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
            Capital,{" "}
            <span className="text-gradient-primary">clarified.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Apply for a personal loan through conversation, not paperwork. Get instant decisions with transparent reasoning.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/auth")}>
              Check Eligibility <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => navigate("/contact")}>
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why FinAssist AI?
          </motion.h2>
          <motion.p {...fadeUp} className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            We replaced the traditional loan form with a conversation. Faster, clearer, better.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Chat-First Application", desc: "Answer simple questions in a natural conversation. No intimidating forms." },
              { icon: Zap, title: "Instant Decisions", desc: "Get approved, reviewed, or clear rejection reasons in under 10 seconds." },
              { icon: Shield, title: "Transparent Logic", desc: "Every decision comes with a clear explanation. No black boxes." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="surface-card p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-[1px]">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Bot, title: "Chat with AI", desc: "Our assistant asks a few simple questions about your income and needs." },
              { step: "02", icon: CheckCircle, title: "Get a Decision", desc: "Instant evaluation with clear reasoning for approval, review, or rejection." },
              { step: "03", icon: Download, title: "Download Letter", desc: "Approved? Download your sanction letter as a professional PDF instantly." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="font-mono text-xs text-primary mb-3">{s.step}</div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="surface-card p-10 shadow-glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">Check your eligibility in under 2 minutes. No impact on your credit score.</p>
            <Button variant="hero" size="lg" onClick={() => navigate("/auth")}>
              Start Application <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">FinAssist AI</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FinAssist AI. Capital, clarified.</p>
        </div>
      </footer>
    </div>
  );
}
