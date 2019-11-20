import React, { Component } from 'react';
import './ChatApp.css';

class CodeMessages extends Component {

    render() {
        return (
            <div className="codemessages">
                <ul>
                    {
                        this.props.code.map( (code,index) => (
                        <li className={code.cls} key={index}>
                            <img src="https://picsum.photos/300" alt="" />
                            <p>{code.val}</p>
                        </li>
                    ))}
                </ul>
          </div>
        );
    }
}

export default CodeMessages;