
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  Bell, 
  BarChart,
  ChevronRight
} from "lucide-react";

const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-background/80 backdrop-blur-xl shadow-md" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
              U
            </div>
            <span className="text-xl font-bold text-foreground">UNAI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-foreground/80 hover:text-primary transition">Features</Link>
            <Link to="/#modules" className="text-foreground/80 hover:text-primary transition">Modules</Link>
            <Link to="/#about" className="text-foreground/80 hover:text-primary transition">About</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-primary text-white hover:bg-primary/80">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-gradient">
            Gojan Academy
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10 animate-fade-in delay-100">
            Build by "UNAI TECH"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Link to="/login">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/80 w-full sm:w-auto">
                Login to Portal
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Abstract gradient orbs */}
          <div className="relative w-full max-w-6xl h-96 mt-16 mb-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            
            {/* Dashboard preview */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-5xl h-auto glass rounded-xl shadow-2xl border border-white/10 overflow-hidden animate-scale-in">
                <div className="w-full h-10 bg-sidebar border-b border-white/5 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="h-full bg-card p-4">
                  <div className="flex gap-4 h-64">
                    <div className="w-1/4 bg-background/50 rounded-lg p-3">
                      <div className="w-full h-8 bg-sidebar-accent rounded-md mb-3"></div>
                      <div className="w-full h-6 bg-sidebar-accent/50 rounded-md mb-2"></div>
                      <div className="w-full h-6 bg-sidebar-accent/50 rounded-md mb-2"></div>
                      <div className="w-full h-6 bg-sidebar-accent/50 rounded-md mb-2"></div>
                      <div className="w-full h-6 bg-sidebar-accent/50 rounded-md"></div>
                    </div>
                    <div className="w-3/4 flex flex-col gap-4">
                      <div className="flex gap-4 h-32">
                        <div className="w-1/2 bg-primary/10 rounded-lg p-3">
                          <div className="w-1/3 h-4 bg-primary/30 rounded-md mb-2"></div>
                          <div className="w-1/2 h-8 bg-primary/20 rounded-md"></div>
                        </div>
                        <div className="w-1/2 bg-accent/10 rounded-lg p-3">
                          <div className="w-1/3 h-4 bg-accent/30 rounded-md mb-2"></div>
                          <div className="w-2/3 h-8 bg-accent/20 rounded-md"></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-background/50 rounded-lg p-3">
                        <div className="w-1/4 h-4 bg-muted-foreground/20 rounded-md mb-3"></div>
                        <div className="w-full h-16 bg-muted/20 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-sidebar">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Designed to revolutionize how academic institutions operate in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Dashboard</h3>
              <p className="text-foreground/70">
                Personalized dashboards with AI-powered insights for students, faculty, and administrators.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Study Materials</h3>
              <p className="text-foreground/70">
                Centralized repository for notes, syllabi, and assignments with intelligent organization.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Award className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exams & Results</h3>
              <p className="text-foreground/70">
                Comprehensive tracking of exam schedules, results, and academic performance metrics.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Attendance System</h3>
              <p className="text-foreground/70">
                Real-time attendance tracking with visual analytics and trend reporting.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Bell className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Notifications</h3>
              <p className="text-foreground/70">
                Instant alerts and announcements for important academic events and deadlines.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="glass rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <BarChart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-foreground/70">
                Detailed reports and insights on academic performance for data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Modules</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              UNAI offers specialized portals for all members of the academic community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Module */}
            <div className="neo-glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Student Portal</h3>
                <p className="text-foreground/70 mb-6">
                  Empowering students with tools to manage their academic journey effectively.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Personal Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Study Materials Access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Exam Results & Schedule</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Attendance Tracking</span>
                  </li>
                </ul>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Student Login
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Staff Module */}
            <div className="neo-glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Staff Portal</h3>
                <p className="text-foreground/70 mb-6">
                  Equipping faculty with tools to simplify academic management and student engagement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Student Information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Upload Study Materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Result Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Attendance Management</span>
                  </li>
                </ul>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Staff Login
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Admin Module */}
            <div className="neo-glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Admin Portal</h3>
                <p className="text-foreground/70 mb-6">
                  Providing administrators with complete control over the institution's digital ecosystem.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">User Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Academic Control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Analytics & Reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">System Configuration</span>
                  </li>
                </ul>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Admin Login
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-sidebar">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                  U
                </div>
                <span className="text-xl font-bold text-foreground">UNAI</span>
              </Link>
              <p className="mt-2 text-foreground/70 max-w-md">
                Redefining college management for the digital age.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <nav className="flex gap-4 md:gap-8">
                <Link to="/#features" className="text-foreground/80 hover:text-primary transition">Features</Link>
                <Link to="/#modules" className="text-foreground/80 hover:text-primary transition">Modules</Link>
                <Link to="/#about" className="text-foreground/80 hover:text-primary transition">About</Link>
              </nav>
              
              <Link to="/login">
                <Button size="sm" className="bg-primary text-white hover:bg-primary/80">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-foreground/60">
            <p>© {new Date().getFullYear()} UNAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
