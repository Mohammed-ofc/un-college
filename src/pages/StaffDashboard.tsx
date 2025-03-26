
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
  BookOpen,
  Calendar,
  Clock,
  FileText,
  BarChart,
  Bell,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const StaffDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for display purposes
  const mockStudentStats = {
    totalStudents: 120,
    attendanceToday: 112,
    attendancePercentage: 93,
  };
  
  const mockClasses = [
    { id: 1, name: "CS301", title: "Database Systems", students: 42, time: "10:00 AM - 11:30 AM" },
    { id: 2, name: "CS305", title: "Web Development", students: 38, time: "1:00 PM - 2:30 PM" },
    { id: 3, name: "CS401", title: "Machine Learning", students: 40, time: "3:00 PM - 4:30 PM" },
  ];
  
  const mockStudentPerformance = [
    { subject: "Database Systems", above90: 12, above75: 18, above60: 8, below60: 4 },
    { subject: "Web Development", above90: 10, above75: 15, above60: 10, below60: 3 },
    { subject: "Machine Learning", above90: 8, above75: 20, above60: 9, below60: 3 },
  ];
  
  const mockRecentUploads = [
    { id: 1, title: "Database Normalization Notes", type: "Notes", date: "2023-11-28" },
    { id: 2, title: "Web Development Assignment 4", type: "Assignment", date: "2023-11-25" },
    { id: 3, title: "Machine Learning Lab 5", type: "Lab Material", date: "2023-11-20" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Manage your classes, materials, and student performance
          </p>
        </div>
        <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Staff Info Card */}
      <Card className="glass">
        <CardHeader className="pb-2">
          <CardTitle>Staff Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Department</p>
            <p className="font-medium">{user?.department}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user?.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="font-medium">Associate Professor</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Courses</p>
            <p className="font-medium">3 Active Courses</p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="text-3xl font-bold text-gradient">{mockStudentStats.totalStudents}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {mockStudentStats.attendanceToday} present today ({mockStudentStats.attendancePercentage}%)
            </div>
          </CardContent>
        </Card>

        {/* Materials Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">32</div>
              <div className="text-sm text-muted-foreground">Uploads</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              15 notes, 12 assignments, 5 others
            </div>
          </CardContent>
        </Card>

        {/* Assignments Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">18</div>
              <div className="text-sm text-muted-foreground">Submissions</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Need evaluation by Dec 5, 2023
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Today's Classes */}
        <Card className="glass lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Your scheduled classes for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockClasses.map((classItem) => (
                <div key={classItem.id} className="p-4 rounded-lg border border-border flex justify-between hover:bg-muted/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{classItem.name}</span>
                      <span className="text-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {classItem.students} students
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground">{classItem.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{classItem.time}</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Uploads */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Recent Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentUploads.map((upload) => (
                  <div key={upload.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{upload.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {upload.type} • {new Date(upload.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                    <Button size="sm" variant="ghost">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Upload New Material
              </Button>
            </CardContent>
          </Card>

          {/* Student Performance */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Student Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockStudentPerformance.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-medium">{subject.subject}</p>
                    <div className="w-full h-6 flex rounded-md overflow-hidden">
                      <div className="bg-green-500/80 h-full" style={{ width: `${(subject.above90 / mockStudentStats.totalStudents) * 100}%` }}></div>
                      <div className="bg-blue-500/80 h-full" style={{ width: `${(subject.above75 / mockStudentStats.totalStudents) * 100}%` }}></div>
                      <div className="bg-yellow-500/80 h-full" style={{ width: `${(subject.above60 / mockStudentStats.totalStudents) * 100}%` }}></div>
                      <div className="bg-red-500/80 h-full" style={{ width: `${(subject.below60 / mockStudentStats.totalStudents) * 100}%` }}></div>
                    </div>
                    <div className="flex text-xs text-muted-foreground justify-between">
                      <span>90%+ ({subject.above90})</span>
                      <span>75%+ ({subject.above75})</span>
                      <span>60%+ ({subject.above60})</span>
                      <span>&lt;60% ({subject.below60})</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
