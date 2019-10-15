import React, { Component } from 'react';
import Contacts from './Contacts';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class SidePanel extends Component {

    addContact = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
              // `MySwal` is a subclass of `Swal`
              //   with all the same instance & static methods
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(<p>One to One ChatRoom is coming soon</p>)
          })
    }

    render() {
        return (
            <div id="sidepanel">
	            <div id="profile">
	                <div className="wrap">
	                    <img id="profile-img" src="https://picsum.photos/300" className="online" alt="" />
	                    <p>{this.props.name}</p>
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
                <Contacts contacts={this.props.contacts}/>
                <div id="bottom-bar">
                    <button id="addcontact" onClick={this.addContact}><i className="fa fa-user-plus fa-fw" aria-hidden="true" /> <span>Add contact</span></button>
                    <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span></button>
                </div>
	        </div>
        );
    }
}

export default SidePanel;