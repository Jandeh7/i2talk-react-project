import React, { Component } from 'react';

class DirectMsg extends Component {
  render() {
    return (
      <div className="chat-message" id="user-direct-chat">
        <div className="chat-header">

          <a className="message-back-arrow" onClick="showSideBar('user-chat-menu', 'user-direct-chat')"><i className="fas fa-long-arrow-alt-left"></i></a>
          
          <div className="chat-head-img">
            <img src="/users/deven.jpg" />
          </div>

          <div className="chat-head-username">
            <span id="Chatsheader"></span>
          </div>

          <div className="chat-head-menu">
            <a onClick="reveal('chat-menu-list')"><i className="fas fa-ellipsis-v"></i></a>
          </div>

          <ul className="" id="chat-menu-list">
            <li>View Members</li>
            <li>Mute notifications</li>
            <li>Search</li>
            <li>Report</li>
          </ul>

        </div>

        <div className="chat-body scrollbar" id="style-2">
          
          <div id="pmessages"></div>

          <div id="messs"></div>

        </div>

        <div className="chat-form">

          <form id="pmessageForm">
            <textarea id="pmsg-input" autocapitalize= "sentences" autocomplete="on" placeholder="Type message here ..." rows="1" required></textarea>
            <button id="pmsg-btn"><i className="far fa-paper-plane"></i></button>
          </form>

        </div>
      </div>
    )
  }
}


export default DirectMsg;