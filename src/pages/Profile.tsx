import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Loader2 } from "lucide-react";
import { generateSanctionLetterPDF } from "@/lib/generateSanctionLetterPDF";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface LoanApplication {
  id: string;
  full_name: string;
  income: number;
  loan_amount: number;
  tenure: number;
  employment: string;
  credit_score: number;
  status: string;
  reason: string;
  details: any;
  created_at: string;
}

export default function Profile() {
  const { user } = useAuth();
  const [apps, setApps] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("loan_applications")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error(error);
        setApps((data as any) || []);
        setLoading(false);
      });
  }, [user]);

  const handleDownload = (app: LoanApplication) => {
    if (!app.details) return;
    generateSanctionLetterPDF({ fullName: app.full_name, ...app.details });
    toast.success("Sanction letter downloaded!");
  };

  const statusBadge = (status: string) => {
    switch (status) {
      case "approved": return <Badge className="bg-primary/10 text-primary border-primary/20">Approved</Badge>;
      case "rejected": return <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
      default: return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Under Review</Badge>;
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-10">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Your Applications</h1>
          <p className="text-sm text-muted-foreground mt-1">View your loan application history and download documents.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : apps.length === 0 ? (
          <div className="surface-card p-10 text-center">
            <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold mb-1">No applications yet</h3>
            <p className="text-sm text-muted-foreground">Start a loan application to see your history here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`surface-card p-5 ${
                  app.status === "approved" ? "border-l-4 border-l-primary" :
                  app.status === "rejected" ? "border-l-4 border-l-destructive" :
                  "border-l-4 border-l-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {statusBadge(app.status)}
                      <span className="text-xs text-muted-foreground font-mono">
                        {new Date(app.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                      <div>
                        <div className="text-xs text-muted-foreground">Amount</div>
                        <div className="font-mono text-sm font-semibold">${app.loan_amount?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Tenure</div>
                        <div className="font-mono text-sm font-semibold">{app.tenure}mo</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Income</div>
                        <div className="font-mono text-sm font-semibold">${app.income?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Score</div>
                        <div className="font-mono text-sm font-semibold">{app.credit_score}</div>
                      </div>
                    </div>
                  </div>
                  {app.status === "approved" && app.details && (
                    <Button variant="outline" size="sm" onClick={() => handleDownload(app)}>
                      <Download className="h-3.5 w-3.5 mr-1" /> PDF
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
