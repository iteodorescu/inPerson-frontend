import React from "react"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  root: {
    display: 'flex',
  }
});

function Navbar(props) {
  const { classes } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            inPerson
          </Typography>
        </Toolbar>
    </AppBar>
  );
}


Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
