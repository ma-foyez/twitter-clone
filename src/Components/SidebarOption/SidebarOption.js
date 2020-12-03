import React from 'react';
import './SidebarOption.css'
const SidebarOption = ({ Icon, text }) => {
    return (
        <div>
            <div className="only-icon d-block d-lg-none text-center">
               <h4> <Icon className="only-icon" /></h4>
            </div>
            <div className="d-none d-lg-block">
                <div className="sidebar-option d-flex align-items-center">
                    <Icon />
                    <h4>{text}</h4>
                </div>
            </div>
        </div>
    );
};

export default SidebarOption;