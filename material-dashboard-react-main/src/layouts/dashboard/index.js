import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  const [counts, setCounts] = useState({
    doctorCount: 0,
    patientCount: 0,
    prescriptionCount: 2300, // Hardcoded example value
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/count");
        console.log(response.data); // Check the data in the console
        setCounts({
          doctorCount: response.data.doctorCount,
          patientCount: response.data.patientCount,
          prescriptionCount: counts.prescriptionCount, // Preserve the hardcoded prescription count
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []); // Empty dependency array to run only once on mount

  return (
    <DashboardLayout>
      <MDBox py={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<PersonPinIcon />}
                title="Doctor's count"
                count={counts.doctorCount}
                percentage={{ color: "success" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="Prescription's count"
                count={counts.prescriptionCount}
                percentage={{ color: "success" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAddIcon />}
                title="Patient's count"
                count={counts.patientCount}
                percentage={{ color: "success" }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
