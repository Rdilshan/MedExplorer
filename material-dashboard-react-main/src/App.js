import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import routes from "routes";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandDark from "assets/images/vector-doctor-icon.jpg";
import Overview from "layouts/profile";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, darkMode, layout, openConfigurator, sidenavColor } = controller;

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brandDark}
            brandName="Doctor"
            hideBrandIcon
            routes={routes}
            onMouseEnter={() => setMiniSidenav(dispatch, false)}
            onMouseLeave={() => setMiniSidenav(dispatch, true)}
          />
          <Configurator />
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        <Route path="/profile" element={<Overview />} /> 
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
