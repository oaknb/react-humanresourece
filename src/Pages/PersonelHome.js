import React from 'react'
import Calendarr from '../Components/Calendarr'
import ManagementTopbar from '../Components/ManagementTopbar'
import PersonelHeader from '../Components/PersonelHeader'

function PersonelHome() {
    return (
        <>
        <ManagementTopbar></ManagementTopbar>
        <div className="containerr">
            <PersonelHeader></PersonelHeader>
            <div className="others">
                <Calendarr></Calendarr>
            </div>
        </div>
        </>
    )
}

export default PersonelHome
