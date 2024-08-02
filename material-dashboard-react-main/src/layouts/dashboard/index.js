// @mui material components
import Grid from "@mui/material/Grid";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
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
                count={281}
                percentage={{
                  color: "success",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<LeaderboardIcon />}
                title="Prescription's count"
                count="2,300"
                percentage={{
                  color: "success",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<PersonAddIcon />}
                title="Patient's count"
                count="91"
                percentage={{
                  color: "success",
                  amount: "",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
