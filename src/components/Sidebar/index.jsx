import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white h-screen p-4 w-64 overflow-y-auto">
      <div className="text-xl font-bold mb-6">MyApp</div>
      <ul className="space-y-4">
        <li>
          <a href="#dashboard" className="block hover:bg-gray-700 p-2 rounded">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#profile" className="block hover:bg-gray-700 p-2 rounded">
            Profile
          </a>
        </li>
        <li>
          <a href="#settings" className="block hover:bg-gray-700 p-2 rounded">
            Settings
          </a>
        </li>
        <li>
          <a href="#logout" className="block hover:bg-gray-700 p-2 rounded">
            Logout
          </a>
        </li>
        <li>
          <a href="#extra1" className="block hover:bg-gray-700 p-2 rounded">
            Extra Link 1
          </a>
        </li>
        <li>
          <a href="#extra2" className="block hover:bg-gray-700 p-2 rounded">
            Extra Link 2
          </a>
        </li>
        <li>
          <a href="#extra3" className="block hover:bg-gray-700 p-2 rounded">
            Extra Link 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
