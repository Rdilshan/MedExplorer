// @mui material components
import Grid from '@mui/material/Grid';

// Soft UI Dashboard React components
import SoftBox from 'components/SoftBox';

// Soft UI Dashboard React examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard';

function Dashboard() {
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<SoftBox py={3} style={{ height: '1000px' }}>
				<SoftBox mb={3} flex={1}>
					<Grid container spacing={4} justifyContent="center" alignItems="center">
						<Grid item xs={12} sm={12} md={6} lg={8}>
							<MiniStatisticsCard
								title={{ text: "Doctor's Count" }}
								count="52"
								icon={{ color: 'info', component: 'D' }}
								style={{ height: '500px', width: '400px' }} // Increased height and width
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={8}>
							<MiniStatisticsCard
								title={{ text: "Patient's Count" }}
								count="150"
								percentage={{ color: 'success' }}
								icon={{ color: 'info', component: 'P' }}
								style={{ height: '500px', width: '400px' }} // Increased height and width
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={8}>
							<MiniStatisticsCard
								title={{ text: 'Prescription Count' }}
								count="160"
								percentage={{ color: 'error' }}
								icon={{ color: 'info', component: 'emoji_events' }}
								style={{ height: '500px', width: '400px' }} // Increased height and width
							/>
						</Grid>
					</Grid>
				</SoftBox>
			</SoftBox>
		</DashboardLayout>
	);
}

export default Dashboard;
