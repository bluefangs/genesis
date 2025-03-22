export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Main Dashboard</h1>
      <p className="text-muted-foreground">Welcome to your dashboard. Select an option from the sidebar to get started.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
          <div className="bg-muted/50 h-32 rounded-lg" />
        </div>
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <div className="bg-muted/50 h-32 rounded-lg" />
        </div>
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <div className="bg-muted/50 h-32 rounded-lg" />
        </div>
      </div>
    </div>
  )
} 