
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(`/dashboard/${selectedRole}`);
    }
  }, [isAuthenticated, navigate, selectedRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(email, password, selectedRole);
      if (!success) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred");
      setIsLoading(false);
    }
  };
  
  // Sample login credentials for demonstration
  const sampleCredentials = {
    student: {
      email: "student@unai.edu",
      password: "password123"
    },
    staff: {
      email: "staff@unai.edu",
      password: "password123"
    },
    admin: {
      email: "admin@unai.edu",
      password: "password123"
    }
  };

  const fillSampleCredentials = (role: UserRole) => {
    setEmail(sampleCredentials[role].email);
    setPassword(sampleCredentials[role].password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 md:p-0">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-64 h-64 rounded-full blur-3xl ${selectedRole === "student" ? "bg-blue-950/30" : "bg-pink-950/30"}`}></div>
        <div className={`absolute bottom-1/4 -right-20 w-72 h-72 rounded-full blur-3xl ${selectedRole === "student" ? "bg-blue-950/20" : "bg-pink-950/20"}`}></div>
      </div>
      
      {/* Back to home */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center text-foreground/70 hover:text-foreground transition"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>
      
      <Card className={`w-full max-w-md glass animate-scale-in ${selectedRole === "student" ? "border-blue-950/30 bg-blue-950/5" : "border-pink-950/30 bg-pink-950/5"}`}>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${selectedRole === "student" ? "bg-blue-950" : "bg-pink-950"}`}>
              U
            </div>
            <span className="text-xl font-bold">UNAI</span>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Choose your role and enter your credentials
          </CardDescription>
        </CardHeader>
        
        <Tabs 
          value={selectedRole} 
          onValueChange={(value) => setSelectedRole(value as UserRole)}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mx-4">
            <TabsTrigger 
              value="student"
              className={`${selectedRole === "student" ? "bg-blue-950 text-white" : ""} hover:bg-blue-950/90 hover:text-white transition-colors`}
            >
              Student
            </TabsTrigger>
            <TabsTrigger 
              value="staff"
              className={`${selectedRole === "staff" ? "bg-pink-950 text-white" : ""} hover:bg-pink-950/90 hover:text-white transition-colors`}
            >
              Staff
            </TabsTrigger>
          </TabsList>
          <div className="mt-4 text-center">
            <Link to="/admin-login" className={`text-sm hover:underline ${selectedRole === "student" ? "text-blue-950" : "text-pink-950"}`}>
              Admin Portal
            </Link>
          </div>
          
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@unai.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`${selectedRole === "student" ? "border-blue-950/40 focus:border-blue-950 bg-blue-950/10" : "border-pink-950/40 focus:border-pink-950 bg-pink-950/10"}`}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button 
                      type="button" 
                      variant="link" 
                      className={`px-0 text-xs h-auto ${selectedRole === "student" ? "text-blue-900" : "text-pink-900"}`}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`${selectedRole === "student" ? "border-blue-950/40 focus:border-blue-950 bg-blue-950/10" : "border-pink-950/40 focus:border-pink-950 bg-pink-950/10"}`}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className={`w-full mt-6 ${selectedRole === "student" ? "bg-blue-950 hover:bg-blue-900" : "bg-pink-950 hover:bg-pink-900"}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
              
              <div className="mt-4 text-center text-sm">
                <Button 
                  type="button" 
                  variant="link" 
                  className={`text-xs text-muted-foreground ${selectedRole === "student" ? "hover:text-blue-900" : "hover:text-pink-900"}`}
                  onClick={() => fillSampleCredentials(selectedRole)}
                >
                  Use demo credentials for {selectedRole}
                </Button>
              </div>
            </form>
          </CardContent>
        </Tabs>
        
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm text-muted-foreground mt-2">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
