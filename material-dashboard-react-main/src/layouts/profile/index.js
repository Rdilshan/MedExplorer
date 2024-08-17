import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";

function Overview() {
  const [cimSelected, setCimSelected] = useState("CMI Num 1");

  const handleCimSelectedChange = (event) => {
    setCimSelected(event.target.value);
  };

  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} md={8} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Divider orientation="vertical" sx={{ ml: -10, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m Alec Thompson. Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  cimSelected: (
                    <FormControl sx={{ mt: -2.95, minWidth: 72 }} fullWidth>
                      <Select
                        labelId="cim-selected-label"
                        id="cim-selected-select"
                        value={cimSelected}
                        onChange={handleCimSelectedChange}
                        sx={{ height: 28 }}
                      >
                        <MenuItem value="CMI Num 1">CMI Num 1</MenuItem>
                        <MenuItem value="CMI Num 2">CMI Num 2</MenuItem>
                      </Select>
                    </FormControl>
                  ),
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
