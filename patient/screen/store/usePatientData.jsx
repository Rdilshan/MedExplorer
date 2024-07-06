import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usePatientData = () => {
  const [patientData, setpatientData] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const storedPatientData = await AsyncStorage.getItem('patientData');
        if (storedPatientData !== null) {
            setpatientData(JSON.parse(storedPatientData));
        }
      } catch (error) {
        console.error('Error fetching doctor data', error);
      }
    };

    fetchDoctorData();
  }, []);

  return patientData;
};

export default usePatientData;
