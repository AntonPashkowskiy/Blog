import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from "react-router-dom";
import { VisibilityFilterType } from '../../reducers/actions';

class Header extends Component {
    render() {
        const { onAddTodoItemClick, onVisibilityFilterClick, history } = this.props;
        const { showAllChecked, showActiveChecked, showCompletedChecked } = this.props;
        
        const addNewTodoIcon = <FontIcon className="material-icons">add</FontIcon>;
        const iconButton = (
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        );
        const headerMenu = (
            <IconMenu
                iconButtonElement={iconButton}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <MenuItem primaryText="Add item"
                          leftIcon={addNewTodoIcon}
                          onClick={() => onAddTodoItemClick()}/>
                <Divider/>
                <MenuItem primaryText="Show all" 
                          checked={showAllChecked}  
                          onClick={() => onVisibilityFilterClick(VisibilityFilterType.ShowAll)}/>

                <MenuItem primaryText="Show active"
                          checked={showActiveChecked}
                          onClick={() => onVisibilityFilterClick(VisibilityFilterType.ShowActive)}/>

                <MenuItem primaryText="Show completed"
                          checked={showCompletedChecked}
                          onClick={() => onVisibilityFilterClick(VisibilityFilterType.ShowCompleted)}/>
                <Divider/>
                <MenuItem primaryText="About" onClick={() => history.push("/about")}/>
            </IconMenu>
        );
        return (
            <AppBar
                onLeftIconButtonClick={() => history.push("/")} 
                title="Just do it"
                iconElementRight={headerMenu}>
            </AppBar>
        );
    }
}

Header.propTypes = {
    showAllChecked: PropTypes.bool,
    showActiveChecked: PropTypes.bool,
    showCompletedChecked: PropTypes.bool,
    onAddTodoItemClick: PropTypes.func,
    onVisibilityFilterClick: PropTypes.func,
    history: PropTypes.object
};

export default withRouter(Header);