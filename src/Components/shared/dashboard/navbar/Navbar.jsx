import { LayoutDashboard, BookUser, ReceiptText, History, CalendarDays, User, Dock, SquareMenu } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PanelLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem("sidebar-collapsed")
      return saved ? saved === "true" : false
    } catch {
      return false
    }
  })

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Patients", path: "/patients", icon: <BookUser size={18} /> },
    { name: "Billing", path: "/billing", icon: <ReceiptText size={18} /> },
    { name: "Reports", path: "/report", icon: <History size={18} /> },
    { name: "Appointments", path: "/appointments", icon: <CalendarDays size={18} /> },
    { name: "Staff", path: "/staff", icon: <User size={18} /> },
    { name: "Purchases", path: "/purchases", icon: <Dock size={18} /> },
  ]

  // Persist collapse state
  useEffect(() => {
    try {
      localStorage.setItem("sidebar-collapsed", String(collapsed))
    } catch {
      // ignore localStorage failures 
    }
  }, [collapsed])

  return (
    <TooltipProvider>
    <nav
      className={cn(
        "fixed top-0 left-0 h-screen bg-white shadow-md flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <SquareMenu />
            <p className="text-lg font-semibold">Medica</p>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <PanelLeft size={18} />
        </Button>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-2 p-2">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition text-sm",
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100",
                      collapsed && "justify-center"
                    )
                  }
                >
                  {link.icon}
                  {!collapsed && <span>{link.name}</span>}
                </NavLink>
              </TooltipTrigger>

              {collapsed && (
                <TooltipContent side="right">
                  {link.name}
                </TooltipContent>
              )}
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
    </TooltipProvider>
  )
}

export default Navbar;