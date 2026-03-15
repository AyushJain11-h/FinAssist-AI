import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">FinAssist AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          {user && <Link to="/apply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Apply</Link>}
          {user && <Link to="/profile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Profile</Link>}
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          {user ? (
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-1" /> Sign Out
            </Button>
          ) : (
            <Button size="sm" onClick={() => navigate("/auth")}>Get Started</Button>
          )}
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          <Link to="/" className="block text-sm" onClick={() => setOpen(false)}>Home</Link>
          {user && <Link to="/apply" className="block text-sm" onClick={() => setOpen(false)}>Apply</Link>}
          {user && <Link to="/profile" className="block text-sm" onClick={() => setOpen(false)}>Profile</Link>}
          <Link to="/contact" className="block text-sm" onClick={() => setOpen(false)}>Contact</Link>
          {user ? (
            <Button variant="ghost" size="sm" onClick={() => { handleSignOut(); setOpen(false); }}>Sign Out</Button>
          ) : (
            <Button size="sm" onClick={() => { navigate("/auth"); setOpen(false); }}>Get Started</Button>
          )}
        </div>
      )}
    </nav>
  );
}
