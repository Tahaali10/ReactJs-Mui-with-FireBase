import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import "../../Dash.css";

export default function Profile() {
  return (
    <div>
      <Stack>
        <Box height={20} />
        <Box sx={{ display: "flex" }}>
          <Box
            height={240}
            width={60}
            component="main"
            sx={{ flexGrow: 1, p: 2 }}
            style={{
              marginLeft: "10px",
              boxShadow: "0 0 1px 0",
              fontSize: "14px",
              fontWeight: "300",
            }}
            className="profile-box"
          >
            <Typography
              variant="h5"
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Syed Taha Ali
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <EmailIcon style={{ marginRight: "20px" }} />
              <Typography variant="p1"> abc123@mail.com</Typography>
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <LocalPhoneIcon style={{ marginRight: "20px" }} />
              <Typography variant="p1"> 0311-1234567</Typography>
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <LocationOnIcon style={{ marginRight: "20px" }} />
              <Typography variant="p1"> Rawalpindi, Pakistan</Typography>
            </Typography>
          </Box>
          <Box
            height="auto"
            width={120}
            component="main"
            sx={{ flexGrow: 1, p: 2 }}
            style={{
              marginLeft: "10px",
              boxShadow: "0 0 1px 0",
              fontSize: "14px",
              fontWeight: "300",
            }}
            className="profile-box"
          >
            <Typography
              variant="h5"
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              About Me
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography variant="p1">
                Hi, I am Taha. I am an experienced Full Stack Web Developer. I
                have spent 3 years in the field. I also have great expertise in
                building the Shopify stores and websites. I would prefer a long
                and steady business relationship over a few bucks.
              </Typography>
            </Typography>
            <hr />
            <Typography
              variant="h5"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingTop:"10px",
                paddingBottom:"10px"
              }}
            >
              Details
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                fontSize: "15px",
              }}
            >
              <Typography
                variant="p1"
                style={{ fontWeight: 600, marginRight: "25px" }}
              >
                {" "}
                Name:{" "}
              </Typography>
              <Typography variant="p1"> Syed Taha Ali</Typography>
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Typography
                variant="p1"
                style={{ fontWeight: 600, marginRight: "25px" }}
              >
                {" "}
                Father Name:{" "}
              </Typography>
              <Typography variant="p1"> Ayaz Zaheer Hashmi</Typography>
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                fontSize: "15px",
              }}
            >
              <Typography
                variant="p1"
                style={{ fontWeight: 600, marginRight: "25px" }}
              >
                {" "}
                Email:{" "}
              </Typography>
              <Typography variant="p1"> abc123@mail.com</Typography>
            </Typography>
            <hr />
            <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                fontSize:"15px"
              }}
            >
              <Typography variant="p1" style={{fontWeight:600,marginRight:"25px"}}> Phone: </Typography>
              <Typography variant="p1">0311-1234567</Typography>
                </Typography>
                <hr />
                <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                fontSize:"15px"
              }}
            >
              <Typography variant="p1" style={{fontWeight:600,marginRight:"25px"}}> Address: </Typography>
              <Typography variant="p1">Rawalpindi, Pakistan</Typography>
                </Typography>
                <hr />
                <Typography
              variant="p1"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                fontSize:"15px"
              }}
            >
              <Typography variant="p1" style={{fontWeight:600,marginRight:"25px"}}> Website: </Typography>
              <Typography variant="p1">https://tahaali10.github.io/syed-taha-ali-portfolio/</Typography>
                </Typography>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
