import React from 'react'
import './App.css'
import Head from './components/Head'
import InfoDrugs from './components/InfoDrugs'
import PatientDetails from './components/PatientDetails'

import { useParams } from 'react-router-dom';

export default function Pageprescription() {
    const { id } = useParams();
    return (
        <>
            <Head id={id} />
            {/* <PatientDetails id={id} /> */}
            <InfoDrugs id={id} />
        </>
    )
}
