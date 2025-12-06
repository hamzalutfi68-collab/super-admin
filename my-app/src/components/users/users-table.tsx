"use client";

import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search, Filter, Edit, Trash, UserCheck, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Assuming you have a badge component, or use Tailwind directly

// Define the User type locally for this component (or import from @/types)
type User = {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin" | "User";
  status: "Active" | "Inactive" | "Pending";
  lastActive: string;
};

const MOCK_USERS: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@nexus.com", role: "Super Admin", status: "Active", lastActive: "2 mins ago" },
  { id: "2", name: "Bob Smith", email: "bob@nexus.com", role: "Admin", status: "Active", lastActive: "1 hour ago" },
  { id: "3", name: "Charlie Brown", email: "charlie@gmail.com", role: "User", status: "Inactive", lastActive: "3 days ago" },
  { id: "4", name: "Diana Prince", email: "diana@nexus.com", role: "Admin", status: "Pending", lastActive: "Never" },
  { id: "5", name: "Evan Wright", email: "evan@yahoo.com", role: "User", status: "Active", lastActive: "5 hours ago" },
];

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search
  const filteredUsers = MOCK_USERS.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Filters & Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-[300px]"
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* The Table */}
      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="w-[250px]">User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        No results found.
                    </TableCell>
                </TableRow>
            ) : (
                filteredUsers.map((user) => (
                <TableRow key={user.id}>
                    {/* User Info Column */}
                    <TableCell>
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold text-xs">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-medium text-sm text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    </TableCell>

                    {/* Role Column */}
                    <TableCell>
                    <div className="flex items-center gap-2">
                        {user.role === "Super Admin" && <Shield className="h-3 w-3 text-indigo-500" />}
                        <span className="text-sm text-gray-600">{user.role}</span>
                    </div>
                    </TableCell>

                    {/* Status Column */}
                    <TableCell>
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "Inactive"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                        {user.status}
                    </span>
                    </TableCell>

                    {/* Last Active Column */}
                    <TableCell className="text-gray-500 text-sm">{user.lastActive}</TableCell>

                    {/* Actions Column */}
                    <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <UserCheck className="mr-2 h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:text-red-600">
                            <Trash className="mr-2 h-4 w-4" /> Delete User
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Simple Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" disabled>Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
}