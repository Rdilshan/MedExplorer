/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Material-UI icons
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

function Action({ id }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <SoftBox display="flex" alignItems="center" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
      <EditIcon fontSize="small" />
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "Role", align: "left", style: { marginRight: "20px" } },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      Role: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="checking" color="success" size="xs" container />
      ),
      action: <Action id="john-michael" />,
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      Role: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="unchecking" color="secondary" size="xs" container />
      ),
      action: <Action id="alexa-liras" />,
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      Role: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="checking" color="success" size="xs" container />
      ),
      action: <Action id="laurent-perrier" />,
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      Role: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="checking" color="success" size="xs" container />
      ),
      action: <Action id="michael-levi" />,
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      Role: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="unchecking" color="secondary" size="xs" container />
      ),
      action: <Action id="richard-gran" />,
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Role: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="unchecking" color="secondary" size="xs" container />
      ),
      action: <Action id="miriam-eric" />,
    },
  ],
};

export default authorsTableData;
