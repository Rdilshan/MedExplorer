import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDoctorData = () => {
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const storedDoctorData = await AsyncStorage.getItem('doctorData');
        if (storedDoctorData !== null) {
          setDoctorData(JSON.parse(storedDoctorData));
        }
      } catch (error) {
        console.error('Error fetching doctor data', error);
      }
    };

    fetchDoctorData();
  }, []);

  return doctorData;
};

export default useDoctorData;
