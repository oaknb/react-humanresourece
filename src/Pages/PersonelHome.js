import React from 'react'
import ManagementTopbar from '../Components/ManagementTopbar'
import PersonelHeader from '../Components/PersonelHeader'

function PersonelHome() {
    return (
        <>
        <ManagementTopbar></ManagementTopbar>
        <div className="containerr">
            <PersonelHeader></PersonelHeader>
        </div>
        </>
    )
}

export default PersonelHome
