import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back to home */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center text-foreground/70 hover:text-foreground transition"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Features in Detail</h1>

        {/* Smart Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Smart Dashboard</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              Our AI-powered dashboard provides personalized insights and analytics tailored for each user role:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Real-time performance tracking and analytics</li>
              <li>Customizable widgets and data visualization</li>
              <li>Intelligent recommendations based on user behavior</li>
              <li>Quick access to frequently used features</li>
              <li>Role-specific information and tools</li>
            </ul>
          </div>
        </div>

        {/* Study Materials */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Study Materials Management</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              A comprehensive system for organizing and accessing academic resources:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Digital library with search and filter capabilities</li>
              <li>Version control for course materials</li>
              <li>Collaborative document sharing</li>
              <li>Integration with popular learning management systems</li>
              <li>Mobile-friendly access to resources</li>
            </ul>
          </div>
        </div>

        {/* Exams & Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Examination System</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              Advanced tools for managing examinations and assessments:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Automated exam scheduling</li>
              <li>Secure online examination platform</li>
              <li>Real-time result processing</li>
              <li>Performance analytics and reports</li>
              <li>Grade calculation and distribution tools</li>
            </ul>
          </div>
        </div>

        {/* Attendance System */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Attendance Management</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              Modern attendance tracking system with advanced features:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Digital attendance marking</li>
              <li>Automated attendance reports</li>
              <li>Leave management system</li>
              <li>Parent notification system</li>
              <li>Attendance analytics dashboard</li>
            </ul>
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Smart Notifications</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              Comprehensive notification system for keeping everyone informed:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Real-time alerts for important events</li>
              <li>Customizable notification preferences</li>
              <li>Multi-channel delivery (email, SMS, in-app)</li>
              <li>Scheduled announcements</li>
              <li>Emergency broadcast system</li>
            </ul>
          </div>
        </div>

        {/* Analytics */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Advanced Analytics</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              Powerful analytics tools for data-driven decision making:
            </p>
            <ul className="space-y-4 list-disc list-inside text-foreground/80">
              <li>Performance trend analysis</li>
              <li>Predictive analytics for student success</li>
              <li>Resource utilization tracking</li>
              <li>Custom report generation</li>
              <li>Data visualization tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;