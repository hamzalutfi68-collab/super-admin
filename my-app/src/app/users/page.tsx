import { UsersTable } from "@/components/users/users-table";
import { Button } from "@/components/ui/button";
import { Plus, Users, UserCheck, UserPlus, ShieldAlert, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <div className="space-y-8">
      {/* 1. Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">User Management</h2>
          <p className="text-muted-foreground mt-1">
            Overview of team members, roles, and permissions.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden md:flex">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
                <Plus className="mr-2 h-4 w-4" />
                Add New User
            </Button>
        </div>
      </div>

      {/* 2. Stats Cards Section - The "Special" Touch */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Users */}
        <Card className="border-l-4 border-l-blue-500 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground mt-1">+180 from last month</p>
            </CardContent>
        </Card>

        {/* Active Users */}
        <Card className="border-l-4 border-l-green-500 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Now</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground mt-1">+201 since last hour</p>
            </CardContent>
        </Card>

        {/* New Users */}
        <Card className="border-l-4 border-l-purple-500 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Joiners</CardTitle>
            <UserPlus className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">+24</div>
            <p className="text-xs text-muted-foreground mt-1">In the last 7 days</p>
            </CardContent>
        </Card>

         {/* Suspended/Alert */}
         <Card className="border-l-4 border-l-red-500 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Suspended</CardTitle>
            <ShieldAlert className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
            </CardContent>
        </Card>
      </div>

      {/* 3. The Table Section */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-1">
        <UsersTable />
      </div>
    </div>
  );
}