// import React from "react";

// const ResetPassword = () => {
//   return <div>ResetPassword</div>;
// };

// export default ResetPassword;


import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

// import background images
import leftBg from "../../assets/";
import rightBg from "@/assets/resetpassbgright.png";

const ResetPassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F8FAFC] overflow-hidden px-4">
      {/* Background Images */}
      <img
        src={leftBg}
        alt="Background Left"
        className="absolute left-20 top-1/4 w-[280px] opacity-80"
      />
      <img
        src={rightBg}
        alt="Background Right"
        className="absolute right-20 bottom-10 w-[280px] opacity-80"
      />

      {/* Reset Password Form */}
      <div className="relative z-10 bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#017783] mb-6 text-center">
          Change Password
        </h2>

        <form className="space-y-4">
          {/* Current Password */}
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="********"
              className="mt-1"
            />
          </div>

          {/* New Password */}
          <div className="relative">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type={showNew ? "text" : "password"}
              placeholder="********"
              className="mt-1 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="********"
              className="mt-1 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Button */}
          <Button
            type="submit"
            className="w-full mt-6 bg-[#017783] hover:bg-[#016a75] text-white"
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
