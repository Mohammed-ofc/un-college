
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Define user types
export type UserRole = "student" | "staff" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  registerNumber?: string; // For students
  department?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: Record<string, User> = {
  "student@unai.edu": {
    id: "s1",
    name: "Alex Johnson",
    email: "student@unai.edu",
    role: "student",
    registerNumber: "UNA2023001",
    department: "Computer Science",
    avatar: "/avatars/student.png"
  },
  "staff@unai.edu": {
    id: "t1",
    name: "Dr. Sarah Chen",
    email: "staff@unai.edu",
    role: "staff",
    department: "Computer Science",
    avatar: "/avatars/staff.png"
  },
  "admin@unai.edu": {
    id: "a1",
    name: "Admin User",
    email: "admin@unai.edu",
    role: "admin",
    avatar: "/avatars/admin.png"
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("unai_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem("unai_user");
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
      
      // Check if the user exists in our mock data
      const mockUser = MOCK_USERS[email];
      
      if (mockUser && mockUser.role === role) {
        setUser(mockUser);
        localStorage.setItem("unai_user", JSON.stringify(mockUser));
        
        // Redirect to appropriate dashboard
        navigate(`/dashboard/${role}`);
        toast.success(`Welcome back, ${mockUser.name}!`);
        return true;
      } else {
        toast.error("Invalid credentials or user role");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("unai_user");
    navigate("/login");
    toast.success("You have been logged out");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
