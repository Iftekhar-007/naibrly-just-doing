


import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";  // Assuming you have a UI component for Avatar
import cooker from "@/assets/cooker.png"

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Appliance Repairs Service",
      description:
        "Our Appliance Repairs service covers the repair of your everyday appliances, such as refrigerators, washing machines...",
      category: "Renovations & Upgrades",
      image: cooker, // Replace with actual image URL
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar image URL
    },
    {
      id: 2,
      title: "Appliance Repairs Service",
      description:
        "Our Appliance Repairs service covers the repair of your everyday appliances, such as refrigerators, washing machines...",
      category: "Home Repairs & Maintenance",
      image: cooker,
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      title: "Appliance Repairs Service",
      description:
        "Our Appliance Repairs service covers the repair of your everyday appliances, such as refrigerators, washing machines...",
      category: "Cleaning & Organization",
      image: cooker,
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      title: "Appliance Repairs Service",
      description:
        "Our Appliance Repairs service covers the repair of your everyday appliances, such as refrigerators, washing machines...",
      category: "Landscaping & Outdoor Services",
      image: cooker,
      avatar: "https://via.placeholder.com/50",
    },
    // Add more categories as needed
  ];

  return (
    <div className="p-6">
      <Button className="mb-4 bg-blue-500 text-white">Add Categories</Button>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader className="flex flex-col ">
              {/* Avatar */}

              <div className="flex flex-row-reverse items-center">
                <div>
                  {/* <Avatar src={category.avatar} alt="Category Avatar" className="w-12 h-12 mb-2" /> */}
                  <CardTitle>{category.title}</CardTitle>
                  <Badge variant="outline">{category.category}</Badge>
                </div>

                <div>
                  <img src={category.image} alt={category.title} className="w-full h-auto rounded" />
                </div>
              </div>

            </CardHeader>
            <CardContent>
              {/* Image */}

              <p>{category.description}</p>
              <div className="mt-4 flex justify-between">
                <Button variant="ghost" className="text-red-500">Delete</Button>
                <Button variant="ghost" className="text-blue-500">Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
