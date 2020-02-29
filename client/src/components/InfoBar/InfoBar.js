import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="Image"/>
            <h3>{room}</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/" > <img src={closeIcon} alt=" Icon" /> </a>
        </div>

    </div>
)

export default InfoBar;