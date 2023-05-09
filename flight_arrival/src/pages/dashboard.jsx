import React from 'react'
import Table from '../components/table';
import { NavLink } from "react-router-dom";

export default function Dashboard() {

  return (
    <>
      <div className="p-6 mx-3 flex justify-between">
        <NavLink
          to="/dashboard"
          className="text-[#5c96c2] hover:text-[#2b5677] border-2 border-black p-2 border-dashed bg-[#d6e7f4] hover:bg-[#bbd3ea] text-left text-md font-bold py-3"
        >
          HAMOYE
        </NavLink>
        <NavLink
          to="/login"
          className="bg-red-500 text-white hover:bg-red-300 hover:text-red-600 text-left text-md font-bold py-3 px-4 rounded-lg" 
        >
          LOG OUT
        </NavLink>
      </div>
      <Table />
    </>
  );
}
