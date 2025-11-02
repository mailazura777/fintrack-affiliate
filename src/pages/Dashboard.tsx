import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, Users, FolderKanban, Wallet } from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Komisi Kotor",
      value: "Rp 125.450.000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Komisi Bersih",
      value: "Rp 98.750.000",
      change: "+10.2%",
      trend: "up",
      icon: Wallet,
    },
    {
      title: "Total Komisi Cair",
      value: "Rp 85.200.000",
      change: "+8.7%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Total Pengeluaran",
      value: "Rp 32.100.000",
      change: "+5.3%",
      trend: "down",
      icon: TrendingDown,
    },
    {
      title: "Total Karyawan",
      value: "24",
      change: "",
      trend: null,
      icon: Users,
    },
    {
      title: "Total Group",
      value: "6",
      change: "",
      trend: null,
      icon: FolderKanban,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview performa affiliate marketing PT FAHMYID DIGITAL GROUP
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isNegative = metric.trend === "down";
          
          return (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${
                  isNegative 
                    ? "bg-destructive/10" 
                    : "bg-primary/10"
                }`}>
                  <Icon className={`h-4 w-4 ${
                    isNegative 
                      ? "text-destructive" 
                      : "text-primary"
                  }`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                {metric.change && (
                  <p className={`text-xs flex items-center gap-1 mt-1 ${
                    isNegative 
                      ? "text-destructive" 
                      : "text-success"
                  }`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {metric.change} vs bulan lalu
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Diagram Omset Harian</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart akan ditampilkan di sini
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Diagram Komisi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart akan ditampilkan di sini
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ranking Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Ranking Karyawan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Tabel ranking karyawan akan ditampilkan di sini
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
