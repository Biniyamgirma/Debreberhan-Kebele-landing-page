import React, { useState, useEffect } from "react";

interface Props {
  isOnline: number;
  itemId:number;
  onClickedProp:(itemId:number)=>any;
}

const Switch: React.FC<Props> = ({ isOnline,onClickedProp,itemId }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isOnline === 1);
  }, [isOnline]);

  return (
    <label className="relative inline-flex items-center cursor-pointer" onClick={()=>onClickedProp(itemId)}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="sr-only peer"
      />

      <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-24 h-12 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-hover:after:scale-95">
      </div>
    </label>
  );
};

export default Switch;