import React from 'react'
import MyFooter from '../Components/Footer'
import Calendarr from '../Components/Calendarr'

import ManagementHeader from '../Components/ManagementHeader'
import ManagementTopbar from '../Components/ManagementTopbar'
import TotalUsers from '../Components/TotalUsers'
import UserChart from '../Components/UserChart'

function ManagementHome() {
    return (
        <>
        <ManagementTopbar></ManagementTopbar>
        <div className="containerr">
        <ManagementHeader></ManagementHeader>
        <div className="others">
            <TotalUsers></TotalUsers>
            <UserChart></UserChart>
            <Calendarr></Calendarr>
        </div>
        </div>

        <MyFooter></MyFooter>
        </>
    )
}

export default ManagementHome
