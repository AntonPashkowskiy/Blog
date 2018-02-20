import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './Header.less';

class Header extends Component {
    render() {
        let headerMenu = (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <MenuItem primaryText="Main Page"/>
                <MenuItem primaryText="About Us"/>
            </IconMenu>
        );
        return (
            <AppBar 
                title="Just do it"
                iconElementRight={headerMenu}>
            </AppBar>
        );
    }
}

export default Header;