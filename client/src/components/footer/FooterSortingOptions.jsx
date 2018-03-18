import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

class FooterSortingOptions extends Component {
    render() {
        const alarmIcon = <FontIcon className="material-icons">alarm</FontIcon>;
        const priorityIcon = <FontIcon className="material-icons">trending_up</FontIcon>;

        return (
            <BottomNavigation selectedIndex={this.props.selectedSorterIndex}>
                <BottomNavigationItem 
                    label="By Date"
                    icon={alarmIcon}
                    onClick={() => this.props.onSortingTypeClick(0)}/>
                <BottomNavigationItem 
                    label="By Priority"
                    icon={priorityIcon}
                    onClick={() => this.props.onSortingTypeClick(1)}/>
            </BottomNavigation>
        );
    }
}

export default FooterSortingOptions;