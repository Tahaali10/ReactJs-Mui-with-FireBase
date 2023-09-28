import React from "react";
import SideNav from "../Components/SideNav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import { Button, Card, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../Components/AccordionDash";
import BarChart from "../Charts/BarChart";
import CountUp from 'react-countup';

export default function Home() {
  return (
    <>
    <div className="bg-color">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradiant">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      <div className="iconstyle">
                      <CreditCardIcon/>
                      </div>
                      $<CountUp delay={0.9} end={500} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradiant-light">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                    <div className="iconstyle">
                      <ShoppingBagIcon/>
                      </div>
                      $<CountUp delay={0.9} end={900} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} className="gradiant-light">
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                    <StorefrontIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricetitle">$203k</span>
                    <br />
                    <span className="pricesubtitle">Total income</span>
                  </div>
                </Stack>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <Stack spacing={2} direction="row">
                  <div className="iconstyleblack">
                    <StorefrontIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricetitle">$203k</span>
                    <br />
                    <span className="pricesubtitle">Total income</span>
                  </div>
                </Stack>
              </Card>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <BarChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <div className="paddingall">
                    <span className="pricetitle">Popular Products</span>
                  </div>
                  <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </>

  );
}
