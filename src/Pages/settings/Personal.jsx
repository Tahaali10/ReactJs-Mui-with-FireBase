import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import "../../Dash.css";

const menu = [
  {
    value: "Personal",
    label: "Personal",
  },
  {
    value: "Private",
    label: "Private",
  },
];
export default function Personal() {
  return (
    <div>
      <Stack>
        <Box height={20} />
        <Box sx={{ display: "flex" }}>
          <Box
            height={350}
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
              Personal Information
            </Typography>
            <hr />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Name"
                  multiline
                  maxRows={4}
                />
                <TextField
                  id="outlined-textarea"
                  label="Father Name"
                  placeholder="Placeholder"
                  multiline
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Bio"
                  multiline
                  rows={4}
                  cols={10}
                  defaultValue="Hi, I am Taha. I am an experienced Full Stack Web Developer. I
                  have spent 3 years in the field. I also have great expertise in
                  building the Shopify stores and websites. I would prefer a long
                  and steady business relationship over a few bucks."
                  style={{ width: "100%" }}
                />
                <TextField id="outlined-select-currency" select label="Account Type">
                  {menu.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </Box>
          <Box
            height={350}
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
              Contact Information
            </Typography>
            <hr />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Contact Information"
                  multiline
                  maxRows={4}
                />
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Placeholder"
                  multiline
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Address"
                  multiline
                  rows={4}
                  cols={10}
                  defaultValue=""
                  style={{ width: "100%" }}
                />
                <TextField id="outlined-select-currency" select label="Account Type">
                  {menu.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
