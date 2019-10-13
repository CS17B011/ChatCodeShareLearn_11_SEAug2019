import React, { Component } from 'react';
import Contacts from './Contacts';

class SidePanel extends Component {
    render() {
        return (
            <div id="sidepanel">
	            <div id="profile">
	                <div className="wrap">
	                    <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
	                    <p>Mike Ross</p>
	                    <i className="fa fa-chevron-down expand-button" aria-hidden="true" />
	                    <div id="status-options">
                            <ul>
                                <li id="status-online" className="active"><span className="status-circle" /> <p>Online</p></li>
                                <li id="status-away"><span className="status-circle" /> <p>Away</p></li>
                                <li id="status-busy"><span className="status-circle" /> <p>Busy</p></li>
                                <li id="status-offline"><span className="status-circle" /> <p>Offline</p></li>
                            </ul>
                        </div>
                        <div id="expanded">
                            <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true" /></label>
                            <input name="twitter" type="text" defaultValue="mikeross" />
                            <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true" /></label>
                            <input name="twitter" type="text" defaultValue="ross81" />
                            <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true" /></label>
                            <input name="twitter" type="text" defaultValue="mike.ross" />
                        </div>
	                </div>
	            </div>
                <div id="search">
                    <label><i className="fa fa-search" aria-hidden="true" /></label>
                    <input type="text" placeholder="Search contacts..." />
                </div>
                <Contacts/>
                <div id="bottom-bar">
                    <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true" /> <span>Add contact</span></button>
                    <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span></button>
                </div>
	        </div>
        );
    }
}

export default SidePanel;