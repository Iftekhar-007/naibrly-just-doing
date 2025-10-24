

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CirclePlus, Upload } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog"; // Add Dialog import
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import cooker from "@/assets/cooker.png"

const Categories = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
  const [categoryName, setCategoryName] = useState(""); // State for category name
  const [categoryType, setCategoryType] = useState(""); // State for category type
  const [description, setDescription] = useState(""); // State for description
  const [image, setImage] = useState(null); // For image upload (you can manage it)

  


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
  const handleOpenDialog = () => {
    setIsDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
    // Reset form fields after dialog close
    setCategoryName("");
    setCategoryType("");
    setDescription("");
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (you can log or send this data to a server)
    console.log({ categoryName, categoryType, description, image });
    handleCloseDialog(); // Close the dialog after submission
  };

  return (
    <div className="p-6">
      <div className="flex justify-end items-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4 bg-white text-[#666666] hover:bg-white hover:text-[#666666] font-medium lg:text-sm">
              <CirclePlus /> Add Categories
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[480px] bg-white p-6 rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>Add Categories</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new category Card.
              </DialogDescription>
            </DialogHeader>

            

            <div className="mb-4">
              <label htmlFor="uploadImage" className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <div className="mt-2">
                <label
                  htmlFor="uploadImage"
                  className="w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-md py-16 flex justify-center items-center hover:border-blue-500 hover:bg-gray-50"
                >
                  <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="hidden"
                  />
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400"> <Upload  className="mx-auto"/> Click to upload image</span>
                  )}
                </label>
              </div>
            </div>


            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                  Category Name
                </label>
                <Input
                  id="categoryName"
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name"
                  className="mt-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="categoryType" className="block text-sm font-medium text-gray-700">
                  Select Category Type
                </label>
                <select
                  id="categoryType"
                  value={categoryType}
                  onChange={(e) => setCategoryType(e.target.value)}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Choose category type</option>
                  <option value="Renovations & Upgrades">Renovations & Upgrades</option>
                  <option value="Home Repairs & Maintenance">Home Repairs & Maintenance</option>
                  <option value="Cleaning & Organization">Cleaning & Organization</option>
                  <option value="Landscaping & Outdoor Services">Landscaping & Outdoor Services</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write a short description..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              

              <div className="flex  mt-6">
                <Button
                  type="submit"
                  className="bg-[#0E7A60] w-full text-white hover:bg-[#0E7A60] px-6 py-2 rounded-md"
                >
                  Create Category
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader className="flex flex-col">
              <div className="flex flex-row-reverse items-start gap-4">
                <div className="flex flex-col gap-2">
                  <CardTitle>{category.title}</CardTitle>
                  {getCategoryBadge(category.category)}
                </div>
                <div>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{category.description}</p>
              <div className="mt-4 flex w-full gap-3">
                <div className="flex-1">
                  <Button
                    variant="ghost"
                    className="text-white bg-[#0E7A60] hover:text-white hover:bg-[#0E7A60] w-full"
                  >
                    Delete
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    variant="ghost"
                    className="text-black bg-[#0E7A601A]/90 hover:bg-[#0E7A601A]/90 w-full"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const getCategoryBadge = (category) => {
  switch (category) {
    case "Renovations & Upgrades":
      return (
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
          {category}
        </Badge>
      );
    case "Home Repairs & Maintenance":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          {category}
        </Badge>
      );
    case "Cleaning & Organization":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          {category}
        </Badge>
      );
    case "Landscaping & Outdoor Services":
      return (
        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
          {category}
        </Badge>
      );
    default:
      return <Badge>{category}</Badge>;
  }
};

export default Categories;
