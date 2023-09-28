import React from "react";
import SideNav from "../Components/SideNav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import { Button, Card, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Dash.css";
import CountUp from 'react-countup';
import { GeoChart } from "../Charts/GeoChart";
import { PieChart } from "../Charts/PieChart";
import { HBarChart } from "../Charts/HBarChat";

export default function Analytics() {
  return (
    <>
      <div className="bg-color">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: "100%", height: 150 }}
                    className="gradiant"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                     <div>Visitors</div>
                     <CountUp delay={0.9} end={9999} duration={0.6}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: "100%", height: 150 }}
                    className="gradiant-light"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                     <div>Visitors</div>
               <CountUp delay={0.9} end={3700} duration={0.6}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: "100%", height: 150 }}
                    className="gradiant"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                     <div>Visitors</div>
                     <CountUp delay={0.9} end={1200} duration={0.6}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: "100%", height: 150 }}
                    className="gradiant-light"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                     <div>Visitors</div>
                     <CountUp delay={0.9} end={1479} duration={0.6}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Card sx={{ height: "82vh" }}>
                  <CardContent>
                    {" "}
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Card sx={{ height: "40vh" }}>
                      <CardContent>
                        <HBarChart />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card sx={{ height: "40vh" }}>
                      <CardContent>
                        <PieChart />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
