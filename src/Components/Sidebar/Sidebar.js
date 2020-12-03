import React, { useContext } from 'react';
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from '../SidebarOption/SidebarOption';
import { Button } from '@material-ui/core';
import SpaIcon from '@material-ui/icons/Spa';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../Login/LoginManager';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    const auth = useAuth();
    console.log(auth.user)
    return (
        <div className="Sidebar">
            <TwitterIcon className="sidebar-twitterIcon" />
            <NavLink to="/home" className="active" >
                <SidebarOption Icon={HomeIcon} text="Home" />
            </NavLink>
            <NavLink to="/explore">
                <SidebarOption Icon={SearchIcon} text="Explore" />
            </NavLink>
            <NavLink to="/notification">
                <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
            </NavLink>
            <NavLink to="/message">
                <SidebarOption Icon={MailOutlineIcon} text="Message" />
            </NavLink>
            <NavLink to="/bookmark">
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
            </NavLink>
            <NavLink to="/list">
                <SidebarOption Icon={ListAltIcon} text="List" />
            </NavLink>
            <NavLink to="/profile">
                <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            </NavLink>
            <NavLink to="/more">
                <SidebarOption Icon={MoreHorizIcon} text="More" />
            </NavLink>
            <div className="text-center side-btn">
                <ExitToAppIcon  onClick={auth.signOut} className="twiest d-lg-none d-md-block d-sm-block" />
                <Button  onClick={auth.signOut} variant="" className="logout-btn d-lg-block d-none">Logout</Button>
            </div>
            
            <div className="text-center side-btn">
                <SpaIcon className="twiest d-lg-none d-md-block d-sm-block" />
                <Button variant="" className="sidebar-tweet d-lg-block d-none">Tweet</Button>
            </div>
            <div className="profile mt-3">
                {
                    auth.user && <NavDropdown title={auth.user.displayName} id="collasible-nav-dropdown" className="mr-5 pr-5">
                        <NavDropdown.Item className="text-center mb-2"><img style={{ height: '60px', width: '60px', borderRadius: '50%' }} src={auth.user.photoURL} alt="" /></NavDropdown.Item>
                        <NavDropdown.Item className="text-center" href="#action/3.2"><FontAwesomeIcon icon={faUserCog} className="mr-2" /> Setting</NavDropdown.Item>
                        <NavDropdown.Item className="text-center" href="#action/3.3" onClick={auth.signOut} ><FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout</NavDropdown.Item>
                    </NavDropdown>
                }
            </div>
        </div>
    );
};

export default Sidebar;