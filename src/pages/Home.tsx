import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Shield, ArrowRight, MessageSquare, Landmark, PiggyBank, ShieldCheck, Sparkles, ClipboardCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
};

const services = [
  { icon: MessageSquare, title: "AI Loan Assistant", desc: "Apply for personal loans through a conversational chatbot.", link: "/apply" },
  { icon: Landmark, title: "Government Schemes", desc: "Explore PMJDY, MUDRA, PMAY, SSY, APY and more.", link: "/schemes" },
  { icon: PiggyBank, title: "FD Planner", desc: "Calculate maturity, compare bank rates with visual charts.", link: "/fd-planner" },
  { icon: ShieldCheck, title: "LIC Insurance", desc: "Compare LIC policies, estimate premiums and maturity.", link: "/insurance" },
  { icon: Sparkles, title: "AI Financial Advisor", desc: "Get personalized advice on investments, loans, and schemes.", link: "/ai-advisor" },
  { icon: ClipboardCheck, title: "Eligibility Checker", desc: "Check your eligibility for loans, schemes, and pensions.", link: "/eligibility" },
];

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
              <Zap className="h-3.5 w-3.5" /> Your Complete Financial Assistant
            </div>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
            Finance,{" "}
            <span className="text-gradient-primary">simplified.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Loans, investments, insurance, government schemes — all powered by AI. Get personalized financial guidance in minutes.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/auth")}>
              Get Started <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => navigate("/schemes")}>
              Explore Schemes
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need
          </motion.h2>
          <motion.p {...fadeUp} className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            One platform for all your financial planning — loans, savings, insurance, and government benefits.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i, duration: 0.5, ease: easeOut }}
                onClick={() => navigate(s.link)}
                className="surface-card p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-[1px] cursor-pointer group">
                <s.icon className="h-7 w-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-semibold mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Bot, title: "Tell Us About You", desc: "Share your age, income, and goals through chat or our simple forms." },
              { step: "02", icon: TrendingUp, title: "Get AI Analysis", desc: "Our AI evaluates your profile and recommends the best options." },
              { step: "03", icon: Shield, title: "Take Action", desc: "Apply for loans, start FDs, or enroll in schemes with full confidence." },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to plan your finances?</h2>
            <p className="text-muted-foreground mb-8">Get personalized recommendations from our AI advisor in minutes.</p>
            <Button variant="hero" size="lg" onClick={() => navigate("/auth")}>
              Start Now <ArrowRight className="h-4 w-4 ml-1" />
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
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FinAssist AI. Finance, simplified.</p>
        </div>
      </footer>
    </div>
  );
}
