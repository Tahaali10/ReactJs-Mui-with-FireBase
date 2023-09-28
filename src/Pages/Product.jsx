import React from "react";
import SideNav from "../Components/SideNav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import ProductList from "../Pages/products/ProductList";
import "../Dash.css";
export default function Product() {
  return (
    <>
      <div className="bg-color">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  );
}
