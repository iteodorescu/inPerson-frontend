import React from "react"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Calendar from '../components/Calendar'
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function IndexPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar classes={classes} />
      <Menu classes = {classes}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Calendar/>
      </main>
    </div>
  );
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
