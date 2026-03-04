// components/admin/AdminHeader.tsx
import React from "react";

interface Props {
  adminName: string;
  onLogout: () => void;
}

const AdminHeader: React.FC<Props> = ({ adminName, onLogout }) => {
  return (
    <div className="flex w-screen justify-between items-center h-12 bg-[#1a4331]/95 text-white px-12 my-8">
      <h1 className="text-sm md:text-xl">
        እንኳን ወደ ድህረገጽ ማስተዳደሪያ በሰላም መጡ
      </h1>

      <div className="flex items-center space-x-4">
        <p className="text-sm md:text-lg">
          ዋና አስተዳዳሪ: {adminName}
        </p>
        <button
          onClick={onLogout}
          className="rounded-sm py-2 px-3 bg-white text-black hover:bg-white/90"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;