
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
  BookOpen,
  Calendar,
  Clock,
  FileText,
  BarChart,
  Bell,
  GraduationCap,
} from "lucide-react";

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for display purposes
  const mockAttendance = 87;
  const mockInternalMarks = [
    { subject: "Data Structures", marks: 42, total: 50 },
    { subject: "Database Systems", marks: 38, total: 50 },
    { subject: "Web Development", marks: 45, total: 50 },
    { subject: "Computer Networks", marks: 40, total: 50 },
  ];
  
  const mockUpcomingExams = [
    { id: 1, subject: "Machine Learning", date: "2023-12-15", time: "10:00 AM" },
    { id: 2, subject: "Software Engineering", date: "2023-12-18", time: "02:00 PM" }
  ];
  
  const mockLatestAnnouncements = [
    { id: 1, title: "Mid-semester exams starting Dec 12", date: "2023-11-28" },
    { id: 2, title: "Winter vacation from Dec 24 to Jan 5", date: "2023-11-25" },
    { id: 3, title: "Submit project proposals by Dec 1", date: "2023-11-20" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your academic progress and recent activities
          </p>
        </div>
        <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Student Info Card */}
      <Card className="glass">
        <CardHeader className="pb-2">
          <CardTitle>Student Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Register Number</p>
            <p className="font-medium">{user?.registerNumber}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Department</p>
            <p className="font-medium">{user?.department}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user?.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Semester</p>
            <p className="font-medium">5th Semester</p>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Attendance Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">{mockAttendance}%</div>
              <div className="text-sm text-muted-foreground">Overall</div>
            </div>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${mockAttendance}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* GPA Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              GPA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">8.7</div>
              <div className="text-sm text-muted-foreground">Current</div>
            </div>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${(8.7/10)*100}%` }}
              />
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
              <div className="text-3xl font-bold text-gradient">24</div>
              <div className="text-sm text-muted-foreground">New</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              12 notes, 8 assignments, 4 others
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Card */}
        <Card className="neo-glass hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-1.5 rounded-md bg-primary/20">
                <Bell className="h-4 w-4 text-primary" />
              </div>
              Upcoming
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gradient">2</div>
              <div className="text-sm text-muted-foreground">Exams</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Starting Dec 15, 2023
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Internal Marks */}
        <Card className="glass lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Internal Assessment
            </CardTitle>
            <CardDescription>Your latest internal marks across subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockInternalMarks.map((subject) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{subject.subject}</span>
                    <span className="text-sm font-medium">
                      {subject.marks}/{subject.total}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: `${(subject.marks/subject.total)*100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Exams */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUpcomingExams.map((exam) => (
                  <div key={exam.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{exam.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {exam.time}
                      </p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-primary/50 pulse-soft"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockLatestAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="border-b border-muted pb-3 last:border-0 last:pb-0">
                    <p className="font-medium">{announcement.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(announcement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
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

export default StudentDashboard;
