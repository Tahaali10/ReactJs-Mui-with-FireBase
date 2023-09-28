import React from "react";
import SideNav from "../Components/SideNav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import List from "./settings/List";
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
// import CardContent from "@mui/icons-material/CardContent"

export default function Settings() {
  return (
    <>
        <div className="bg-color">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <List/>
        </Box>
      </Box>
      </div>
    </>
  );
}
