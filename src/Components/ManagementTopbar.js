import React from 'react'
import Logoo from '../Components/img/logo.svg';
 


function ManagementTopbar() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
          <section className="header-top__logo">
          <section className="header-top__logoo">
        <a href="/">
          <img height='70px' src={Logoo} alt="" /></a>
        </section>
        </section>
          </div>
          <div className="topRight">
            
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    )
}

export default ManagementTopbar
