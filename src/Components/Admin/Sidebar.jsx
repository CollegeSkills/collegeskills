import React from 'react';
import { Users, Contact, HelpCircle, UserPlus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { label: 'Join Now Users', icon: <UserPlus />, path: '/admin/join-now' },
    { label: 'Join Free Users', icon: <Users />, path: '/admin/join-free' },
    { label: 'Contact Users', icon: <Contact />, path: '/admin/contact' },
    { label: 'Need Help Users', icon: <HelpCircle />, path: '/admin/need-help' },
  ];

  return (
    <div className="w-full min-h-screen p-4 bg-gray-100 shadow-md md:w-60">
      <ul className="space-y-4">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              className="flex items-center gap-3 p-2 pt-3 pb-3 mt-3 text-gray-700 rounded hover:bg-gray-200"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-2 mt-96">
        <Link to="/logout" className="flex gap-3 p-2 text-red-500 bg-red-200 rounded-md">
          <LogOut /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
