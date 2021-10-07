import React from 'react'

function TotalUsers() {
    return (
        <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">515</span>
          <span className="featuredMoneyRate">
            -11.4 
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Closed User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100</span>
          <span className="featuredMoneyRate">
            -1.4 
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Opened User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">415</span>
          <span className="featuredMoneyRate">
            +2.4 
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
    )
}

export default TotalUsers
