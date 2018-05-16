import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

export default class FooterSortingOptions extends Component {
    render() {
        const { selectedSorterIndex, onSortingTypeClick } = this.props;
        const alarmIcon = <FontIcon className="material-icons">alarm</FontIcon>;
        const priorityIcon = <FontIcon className="material-icons">trending_up</FontIcon>;

        return (
            <BottomNavigation selectedIndex={selectedSorterIndex}>
                <BottomNavigationItem 
                    label="By Date"
                    icon={alarmIcon}
                    onClick={() => onSortingTypeClick(0)}/>
                <BottomNavigationItem 
                    label="By Priority"
                    icon={priorityIcon}
                    onClick={() => onSortingTypeClick(1)}/>
            </BottomNavigation>
        );
    }
}

FooterSortingOptions.propTypes = {
    selectedSorterIndex: PropTypes.number.isRequired,
    onSortingTypeClick: PropTypes.func.isRequired        
};
