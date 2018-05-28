import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation";

export default class Footer extends Component {
    render() {
        const { selectedSorterIndex, onByDateClick, onByPriorityClick } = this.props;
        const alarmIcon = <FontIcon className="material-icons">alarm</FontIcon>;
        const priorityIcon = <FontIcon className="material-icons">trending_up</FontIcon>;

        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={selectedSorterIndex}>
                    <BottomNavigationItem
                        label="By Date"
                        icon={alarmIcon}
                        onClick={onByDateClick}/>
                    <BottomNavigationItem
                        label="By Priority"
                        icon={priorityIcon}
                        onClick={onByPriorityClick}/>
                </BottomNavigation>
            </Paper>
        );
    }
}

Footer.propTypes = {
    selectedSorterIndex: PropTypes.number.isRequired,
    onByDateClick: PropTypes.func.isRequired,
    onByPriorityClick: PropTypes.func.isRequired
};
