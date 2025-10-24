import { ChevronRight, FileText, FlagTriangleRight, Info, ScrollText, UserCog } from 'lucide-react';
// import { title } from 'process';
import React from 'react';
import {  Link } from 'react-router-dom';


   const  settingItem = [
      { title: "Profile", href: "/dashboard/settings/profile" },
      {title:"Reset Passworde",href:"/dashboard/settings/resetpassword"},
      {
        title: "Terms & Condition",
        href: "/dashboard/settings/terms",
        
      },
      {
        title: "Privacy Policy",
        href: "/dashboard/settings/privacy",
        
      },
      { title: "FAQ", href: "/dashboard/settings/faq" },
    ]


    


const Setting = () => {
    return (
        <div className='text-black bg-[#FFFFFF] p-10 rounded-2xl'>
            {settingItem.map((Item,index)=><div key={index} className='flex justify-between py-5'>
                <Link to={Item.href}>
                {Item.title}
               
                </Link>

                <ChevronRight />
            </div>)}
        </div>
    );
};

export default Setting;