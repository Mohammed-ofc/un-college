
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  UserPlus,
  Layers,
  Clock,
  FileText,
  BarChart,
  Settings,
  Calendar,
  ShieldAlert,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for display purposes
  const mockSystemStats = {
    totalStudents: 2450,
    totalStaff: 126,
    departments: 8,
    courses: 185,
  };
  
  const mockRecentActivities = [
    { id: 1, type: "User Added", description: "New student profile created: Maya Johnson", time: "2 hours ago" },
    { id: 2, type: "Course Update", description: "Curriculum updated for Computer Science", time: "5 hours ago" },
    { id: 3, type: "Announcement", description: "Semester exam schedule published", time: "Yesterday" },
    { id: 4, type: "Staff Update", description: "New faculty member added: Dr. James Wilson", time: "2 days ago" },
    { id: 5, type: "System", description: "Database backup completed", time: "2 days ago" },
  ];
  
  const mockDepartmentStats = [
    { name: "Computer Science", students: 420, staff: 25, courses: 35 },
    { name: "Electronics", students: 380, staff: 22, courses: 28 },
    { name: "Mechanical", students: 310, staff: 18, courses: 25 },
    { name: "Civil", students: 290, staff: 17, courses: 24 },
  ];
  
  const mockPendingApprovals = [
    { id: 1, type: "Leave Request", from: "Dr. Sarah Chen", date: "2023-12-02" },
    { id: 2, type: "New Course", from: "Engineering Department", date: "2023-12-01" },
    { id: 3, type: "Timetable Change", from: "Computer Science Dept", date: "2023-11-30" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage all aspects of the institution's digital ecosystem
          </p>
        </div>
        <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Students Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <Users className="h-4 w-4 text-primary" />
              </div>
              Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">{mockSystemStats.totalStudents}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="flex justify-between mt-2">
              <Button size="sm" variant="outline" className="h-8">
                <UserPlus className="h-3.5 w-3.5 mr-1" />
                Add
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Staff Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <School className="h-4 w-4 text-primary" />
              </div>
              Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">{mockSystemStats.totalStaff}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="flex justify-between mt-2">
              <Button size="sm" variant="outline" className="h-8">
                <UserPlus className="h-3.5 w-3.5 mr-1" />
                Add
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Departments Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <Layers className="h-4 w-4 text-primary" />
              </div>
              Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">{mockSystemStats.departments}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="flex justify-between mt-2">
              <Button size="sm" variant="outline" className="h-8">
                Manage
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Courses Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">{mockSystemStats.courses}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="flex justify-between mt-2">
              <Button size="sm" variant="outline" className="h-8">
                Add
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="glass lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>System-wide activities and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {mockRecentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 flex-shrink-0 mt-1">
                    {activity.type === "User Added" && <UserPlus className="h-4 w-4 text-primary" />}
                    {activity.type === "Course Update" && <FileText className="h-4 w-4 text-primary" />}
                    {activity.type === "Announcement" && <Calendar className="h-4 w-4 text-primary" />}
                    {activity.type === "Staff Update" && <School className="h-4 w-4 text-primary" />}
                    {activity.type === "System" && <Settings className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPendingApprovals.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.type}</p>
                      <p className="text-sm text-muted-foreground">
                        From: {item.from} • {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-500">
                        ✕
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-500">
                        ✓
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Approvals
              </Button>
            </CardContent>
          </Card>

          {/* Department Distribution */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Department Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDepartmentStats.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <p className="font-medium">{dept.name}</p>
                      <p className="text-sm">{dept.students} students</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${(dept.students / mockSystemStats.totalStudents) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{dept.staff} staff</span>
                      <span>{dept.courses} courses</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Department Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
