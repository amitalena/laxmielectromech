import React from "react";
import { Link, Outlet } from "react-router-dom";
import { 
  Package, 
  PlusCircle, 
  Home, 
  Settings, 
  ChevronRight,
  BookText
} from "lucide-react";

const DashboardLayout = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
      path: "/admin/dashboard",
    },
    {
      title: "Products",
      icon: <Package className="mr-2 h-4 w-4" />,
      path: "/admin/products",
    },
    {
      title: "Blogs",
      icon: <BookText className="mr-2 h-4 w-4" />,
      path: "/admin/blogs",
    },
    {
      title: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-sm border-r sticky top-0 h-screen">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center">
            <h1 className="text-lg font-bold">Laxmi Electromech</h1>
            <span className="text-xs ml-2 bg-black text-white px-2 py-0.5 rounded">
              Admin
            </span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="flex items-center py-2 px-3 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900"
                >
                  {item.icon}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;