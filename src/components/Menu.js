import React from "react"

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import GroupsDisplay from './menu/GroupsDisplay'
import EventsDisplay from './menu/EventsDisplay'
import FollowerDisplay from './menu/FollowerDisplay'
import FollowingDisplay from './menu/FollowingDisplay'

import { drawerWidth } from '../consts/ui'

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

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: props.open,
            user: props.user
        };
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user || prevProps.open !== this.props.open) {
            this.setState({user: this.props.user, open: this.props.open})
        }
    }

    componentWillMount

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <Drawer
            className={classes.drawer}
            variant="persistent"
            open = {open}
            anchor="left"
            classes={{
                paper: classes.drawerPaper,
            }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <EventsDisplay user={this.state.user}/>
                <GroupsDisplay groups={this.state.user['groups']} 
                                netid={this.state.user['netid']}
                                first_name={this.state.user['first_name']}
                                last_name={this.state.user['last_name']}
                                class_year={this.state.user['class_year']}/>
                <FollowerDisplay user={this.state.user}/>
                <FollowingDisplay user={this.state.user}/>
            </Drawer>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);
