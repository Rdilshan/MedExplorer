import React from 'react'
import './App.css'
import Head from './components/Head'
import InfoDrugs from './components/InfoDrugs'
import PatientDetails from './components/PatientDetails'

export default function Pageprescription() {
    return (
        <>
            <Head />
            {/* <PatientDetails/> */}
            <InfoDrugs />
        </>
    )
}
