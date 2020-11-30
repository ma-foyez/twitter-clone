import React from 'react';
import './SidebarOption.css'
const SidebarOption = ({Icon, text, active}) => {
    return (
        <div className={`Sidebar-option ${active && 'sidebar-option-active'}`}>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    );
};

export default SidebarOption;