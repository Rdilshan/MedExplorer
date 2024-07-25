// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Soft UI Dashboard React components
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';

// Soft UI Dashboard React examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';

import ProfileInfoCard from 'examples/Cards/InfoCards/ProfileInfoCard';
import ProfilesList from 'examples/Lists/ProfilesList';
import DefaultProjectCard from 'examples/Cards/ProjectCards/DefaultProjectCard';
import PlaceholderCard from 'examples/Cards/PlaceholderCard';

// Overview page components
import Header from 'layouts/profile/components/Header';

// Data
import profilesListData from 'layouts/profile/data/profilesListData';


function Overview() {
	return (
		<DashboardLayout>
			<Header />
		  <SoftBox
        mt={5}
        mb={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6} xl={6}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: 'Alec M. Thompson',
                mobile: '(44) 123 1234 123',
                email: 'alecthompson@mail.com',
                location: 'USA',
              }}
              social={[
                {
                  link: 'https://www.facebook.com/CreativeTim/',
                  icon: <FacebookIcon />,
                  color: 'facebook',
                },
                {
                  link: 'https://twitter.com/creativetim',
                  icon: <TwitterIcon />,
                  color: 'twitter',
                },
                {
                  link: 'https://www.instagram.com/creativetimofficial/',
                  icon: <InstagramIcon />,
                  color: 'instagram',
                },
              ]}
              action={{ route: '', tooltip: 'Edit Profile' }}
            />
          </Grid>
        </Grid>
      </SoftBox>
		</DashboardLayout>
	);
}

export default Overview;
