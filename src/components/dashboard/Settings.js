import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'

class Settings extends Component {
  render() {
    return (
      <div className="dashboard-feature-container" id="style-2">
        <Headers text="Settings" />
  
        <div className="settings-main-container scrollbar" id="settings-main">
          <div className="profile-block">
            <div id="settings-profile-box"></div>
            <button className="button" onClick="showProfilePage()"><i className="far fa-edit">&nbsp;</i>&nbsp;Edit Profile</button>
          </div>
  
          <h2>Account</h2>
  
          <div className="settings-item">
            <h3>Bio</h3>
            <p id="profile-bio-details"></p>
            
          </div>
  
          <div className="settings-item">
            <h3>Phone Number</h3>
            <p id="profile-phone-number"></p>
          </div>
  
          <div className="settings-item">
            <h3>Location</h3>
            <p id="profile-location"></p>
          </div>
  
          <h2>Settings</h2>
  
          <div className="settings-item">
            <h3><i className="fas fa-user-shield"></i> &nbsp; Privacy and Security</h3>
          </div>
  
          <div className="settings-item">  
            <h3> <i className="fas fa-bell"></i> &nbsp; Notifications and Sound</h3>
          </div>
  
          <div className="settings-item">  
            <h3><i className="fas fa-user-cog"></i> &nbsp; Chat Settings</h3>
          </div>
  
          <div className="settings-item">  
            <h3><i className="fas fa-server"></i> &nbsp; Data and Storage</h3>
          </div>
  
          <div className="settings-item">
            <h3><i className="fas fa-question-circle"></i> &nbsp; Help</h3>
          </div>
  
        </div>
  
      </div>
    )
  }
}


export default Settings;