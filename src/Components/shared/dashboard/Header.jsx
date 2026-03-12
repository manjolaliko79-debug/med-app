import React from "react";
import { SquareMenu, Search } from "lucide-react";
import Logo from "@/assets/img/Logo.png"
import DropDownAvatar from "./navbar/DropDownAvatar";
import { Input } from "@/components/ui/input";


const Header = ({ title, subtitle, children, search, setSearch }) => {
  return (
    <div className="h-16 bg-white border-b sticky top-0 z-10 flex items-center justify-between p-4">
      
      {/* Left Section */}
      <div className="flex items-center justify-content gap-4">
        <img src={Logo} alt="Logo" className="w-15 h-15 rounded-md" />
        <div>
          <h1 className="text-primary text-2xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-gray-500 text-sm">{subtitle}</p>
          )}
        </div>
        {children}
        
        
      </div>

      <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

      {/* Right Section */}
      <DropDownAvatar className="ml-auto"/>
      
    </div>
  );
};

export default Header;