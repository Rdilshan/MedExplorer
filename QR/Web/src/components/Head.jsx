
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Head() {
  const [data, setData] = useState(null);
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
 
        const fetchDatas = await axios.get('https://med-explorer-backend.vercel.app/prescription/get/669915637ae10ff9f4f5ecac');
        const response = fetchDatas.data;
        console.log('Prescription details:', response);
        setData(response);
       
        const doctorId = response.doctorid;        ; 

       
        const fetchDoctorDetails = await axios.get(`https://med-explorer-backend.vercel.app/doctor/${doctorId}`);
        const doctorResponse = fetchDoctorDetails.data;
        console.log('Doctor details:', doctorResponse);
        setDoctorDetails(doctorResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='bg-[#00416a] h-[20vh]  lg:px-[170px] sm:mx-auto text-white
    border-b-[10px] drop-shadow-md sm:w-full md:w-full lg:mx-auto font-abc
    '>
        <h1 className='font-bold'>MedExplorer</h1>
        <div className='font-bold  sm:mx-auto md:px-2 lg:text-right'>
            <p>{doctorDetails.doctor.name}</p>
            <p>{doctorDetails.doctor.PhoneNumber}</p>
            <p>{doctorDetails.doctor.email}</p>
           
        </div>
      
    </div>
  )
}
