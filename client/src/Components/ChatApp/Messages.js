import React, { Component,Text } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './ChatApp.css';

class Messages extends Component {

    constructor(props){
        super(props);
    }

    displayCodeTH = (e) => {
        e.preventDefault(); 
        const MySwal = withReactContent(Swal);
                MySwal.mixin({
                    confirmButtonText: 'Next',
                    progressSteps: [...Array(this.props.codeTh.length).keys()]
                },{
                    button: {
                        cancel: "Cancel",
                        oie: {
                            text: "Open In Editor",
                            value: "oie"
                        }
                    }
                }).queue(this.props.codeTh);    
    }

    render() {

        return (
            <div className="messages">
                <ul>
                    {
                        this.props.msgs.map( (msg,index) => (
                        <li className={msg.cls} key={index}>
                            <img src="https://picsum.photos/300" alt="" />
                            <p style={{whiteSpace : 'pre-line',tabSize: 4}}>
                            <div className={msg.cls}>
                                <div className="code-option">
                                    <span style={{margin:'5px 5px'}}>
                                    <button className="open-in-editor"><i className="fa fa-edit" aria-hidden="true" onClick = {(e) => {
                                        e.preventDefault();
                                        localStorage.setItem('code',msg.val);
                                        window.open('/editor/'+this.props.sid);                               
                                    }}/></button>
                                    </span>
                                    <span><button className="code-thread"><i className="fa fa-edit" aria-hidden="true" onClick = {(e) => {
                                        e.preventDefault();
                                        this.props.addTh(msg.val);
                                    }}/></button></span>
                                    <span><button className="add-to-code-thread"><i className="fa fa-edit" aria-hidden="true" onClick = {this.displayCodeTH}/></button></span>
                                    <hr/>
                                </div>
                            </div>
                            {msg.val}
                            </p>
                        </li>
                    ))}
                </ul>
          </div>
        );
    }
}

export default Messages;