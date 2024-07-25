

// @mui material components
import { Button } from "@mui/material";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";


function Tables() {
  const { columns, rows } = authorsTableData;
 

  return (
    <DashboardLayout>

      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3} >
              <SoftTypography variant="h6" style={{fontSize:22}} >User Managment</SoftTypography>
            </SoftBox>
            <Button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '8px', width:"175px",marginLeft:"20px" }}>
               Add New User
            </Button>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
       
      </SoftBox>
     
    </DashboardLayout>
  );
}

export default Tables;
