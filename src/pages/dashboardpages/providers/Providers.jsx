import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Providers = () => {
  // Example user data (add or modify as needed)
  const users = [
    { id: 29506, name: "Jacob Maicle", email: "oxheart@email.com", contact: "Unverified", status: "Verified" },
    { id: 29505, name: "Marvin McKinney", email: "mountain@email.com", contact: "Pending", status: "Verified" },
    { id: 29504, name: "Kristin Watson", email: "juniper@email.com", contact: "Inactive", status: "Verified" },
    { id: 29502, name: "Darrell Steward", email: "oxheart@email.com", contact: "Pending", status: "Unverified" },
    { id: 29501, name: "Theresa Webb", email: "juniper@email.com", contact: "Active", status: "Unverified" },
    { id: 29501, name: "Theresa Webb", email: "juniper@email.com", contact: "Active", status: "Unverified" },
    { id: 29501, name: "Theresa Webb", email: "juniper@email.com", contact: "Active", status: "Unverified" },
    { id: 29501, name: "Theresa Webb", email: "juniper@email.com", contact: "Active", status: "Unverified" },
    { id: 29500, name: "Eleanor Pena", email: "oxheart@email.com", contact: "Active", status: "Verified" },
    { id: 29499, name: "Kathryn Murphy", email: "mountain@email.com", contact: "Verified", status: "Verified" }
  ];

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/dashboard/providers/provideraccount")
  }

  // Pagination State
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderTableRows = () => {
    const indexOfLastUser = currentPage * rowsPerPage;
    const indexOfFirstUser = indexOfLastUser - rowsPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return currentUsers.map((user) => (
      <tr key={user.id} className="border-b hover:bg-gray-50">
        <td className="px-6 py-4">{user.id}</td>
        <td className="px-6 py-4">{user.name}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">
          {/* Fixing Badge color for 'Contact' */}
          <Badge
            className=
            // user.contact === "Verified" ? "bg-green-500 text-white" : 
            // user.contact === "Unverified" ? "bg-red-500 text-white" :
            // user.contact === "Pending" ? "bg-yellow-500 text-white" : 
            " text-black bg-transparent"

          >
            {user.contact}
          </Badge>
        </td>
        <td className="px-6 py-4">
          {/* Fixing Badge color for 'Status' */}
          <Badge
            className={`${user.status === "Verified" ? "bg-[#E4F6E8] text-[#3EBF5A]" :
                user.status === "Unverified" ? "bg-[#FDDEDE] text-[#F34F4F]" :
                  "bg-gray-500 text-white"
              }`}
          >
            {user.status}
          </Badge>
        </td>
        <td className="px-6 py-4">
          <Button onClick={handleClick} variant="outline" size="sm" className="border-0 bg-transparent shadow-none">
            <Eye />
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-row gap-3 px-4 py-2 border rounded-md mr-4">
          <Search />
          <input
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <Menu />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">User ID</th>
              <th scope="col" className="px-6 py-3">User Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Contact</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>

      {/* Pagination footer */}
      <div className="flex justify-end items-center mt-4 text-sm text-gray-500 gap-5">
        <div className="flex items-center gap-2">
          Rows per page:
          <select className="border rounded-md px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex flex-row items-center gap-3">
          <p>Page 1 of 7</p>
          <button className="btn border p-1 rounded-sm cursor-pointer">
            <ChevronLeft />
          </button>
          <button className="btn border p-1 rounded-sm cursor-pointer">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Providers;
