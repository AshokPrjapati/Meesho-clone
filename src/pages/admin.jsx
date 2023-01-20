import React from "react";
import AddProductPage from "@/components/Admin/Admin_Components/AddProductPage";
import Header from "@/components/Admin/Header";
import LeftNavbar from "@/components/Admin/LeftNavbar";
import Content from "@/components/Admin/Content";

const admin = () => {
  return (
    <div>
      <LeftNavbar />
      <Header />
      <Content />
    </div>
  );
};

export default admin;
