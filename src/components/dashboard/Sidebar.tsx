
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  CalendarDays, 
  BarChart, 
  Bell, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  FileText,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";

export type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMobile: boolean;
  userRole: string;
};

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
  roles: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, isMobile, userRole }) => {
  const location = useLocation();
  const { logout } = useAuth();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile, setIsOpen]);

  const navItems: NavItem[] = [
    { 
      label: "Dashboard", 
      icon: Home, 
      href: `/dashboard/${userRole}`, 
      roles: ["student", "staff", "admin"] 
    },
    { 
      label: "Study Materials", 
      icon: BookOpen, 
      href: `/dashboard/${userRole}/materials`, 
      roles: ["student", "staff"] 
    },
    { 
      label: "Exams & Results", 
      icon: FileText, 
      href: `/dashboard/${userRole}/exams`, 
      roles: ["student", "staff", "admin"] 
    },
    { 
      label: "Attendance", 
      icon: ClipboardList, 
      href: `/dashboard/${userRole}/attendance`, 
      roles: ["student", "staff", "admin"] 
    },
    { 
      label: "Notifications", 
      icon: Bell, 
      href: `/dashboard/${userRole}/notifications`, 
      roles: ["student", "staff", "admin"] 
    },
    { 
      label: "Users", 
      icon: Users, 
      href: `/dashboard/admin/users`, 
      roles: ["admin"] 
    },
    { 
      label: "Reports", 
      icon: BarChart, 
      href: `/dashboard/admin/reports`, 
      roles: ["admin"] 
    },
    { 
      label: "Settings", 
      icon: Settings, 
      href: `/dashboard/${userRole}/settings`, 
      roles: ["student", "staff", "admin"] 
    },
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(userRole)
  );

  return (
    <>
      {/* Sidebar backdrop for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col w-64 shadow-lg transition-all duration-300 ease-in-out bg-sidebar border-r border-sidebar-border",
          isMobile && "shadow-xl",
          isMobile && !isOpen && "-translate-x-full",
          !isMobile && !isOpen && "w-20"
        )}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
              U
            </div>
            {isOpen && (
              <span className="text-xl font-bold text-white">UNAI</span>
            )}
          </Link>
          
          {!isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-sidebar-accent text-sidebar-foreground"
            >
              {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="px-2 space-y-1">
            {filteredNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors duration-200",
                    "hover:bg-sidebar-accent group",
                    location.pathname === item.href
                      ? "bg-sidebar-accent text-primary"
                      : "text-sidebar-foreground"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "flex-shrink-0",
                      isOpen ? "mr-3 h-5 w-5" : "h-6 w-6 mx-auto"
                    )} 
                  />
                  {isOpen && <span>{item.label}</span>}
                  
                  {/* Tooltip for collapsed sidebar */}
                  {!isOpen && (
                    <div className="absolute left-full ml-6 hidden group-hover:block px-2 py-1 rounded bg-sidebar-accent text-sidebar-foreground text-sm whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={logout}
            className={cn(
              "flex items-center w-full px-3 py-2 text-sidebar-foreground rounded-md hover:bg-sidebar-accent transition-colors duration-200"
            )}
          >
            <Settings className={cn(
              "flex-shrink-0",
              isOpen ? "mr-3 h-5 w-5" : "h-6 w-6 mx-auto"
            )} />
            {isOpen && <span>Logout</span>}
            
            {/* Tooltip for collapsed sidebar */}
            {!isOpen && (
              <div className="absolute left-full ml-6 hidden group-hover:block px-2 py-1 rounded bg-sidebar-accent text-sidebar-foreground text-sm">
                Logout
              </div>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
