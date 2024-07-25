import { useState, useEffect } from 'react';

// react-router components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';

// Soft UI Dashboard React components
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';

// Soft UI Dashboard React examples
import DefaultNavbarLink from 'examples/Navbars/DefaultNavbar/DefaultNavbarLink';
import DefaultNavbarMobile from 'examples/Navbars/DefaultNavbar/DefaultNavbarMobile';

// Soft UI Dashboard React base styles
import breakpoints from 'assets/theme/base/breakpoints';

function DefaultNavbar({ transparent, light, action }) {
    const [ mobileNavbar, setMobileNavbar ] = useState(false);
    const [ mobileView, setMobileView ] = useState(false);

    const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
    const closeMobileNavbar = () => setMobileNavbar(false);

    useEffect(() => {
        // A function that sets the display state for the DefaultNavbarMobile.
        function displayMobileNavbar() {
            if (window.innerWidth < breakpoints.values.lg) {
                setMobileView(true);
                setMobileNavbar(false);
            } else {
                setMobileView(false);
                setMobileNavbar(false);
            }
        }

        /** 
        The event listener that's calling the displayMobileNavbar function when 
        resizing the window.
        */
        window.addEventListener('resize', displayMobileNavbar);

        // Call the displayMobileNavbar function to set the state with the initial value.
        displayMobileNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', displayMobileNavbar);
    }, []);

    return null;
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
    transparent: false,
    light: false,
    action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
    transparent: PropTypes.bool,
    light: PropTypes.bool,
    action: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            type: PropTypes.oneOf([ 'external', 'internal' ]).isRequired,
            route: PropTypes.string.isRequired,
            color: PropTypes.oneOf([ 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light' ]),
            label: PropTypes.string.isRequired,
        }),
    ]),
};

export default DefaultNavbar;
