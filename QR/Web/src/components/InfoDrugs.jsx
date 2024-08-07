import React ,{useState ,useEffect} from "react";
import axios from 'axios'



export default function InfoDrugs({ id }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    // console.log(id)
    async function fetchData() {
      try {
        const fetchDatas = await axios.get(`https://med-explorer-backend.vercel.app/prescription/get/${id}`);
        const response = fetchDatas.data;
        console.log(response);
        setData(response);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="my-10 sm:mx-auto lg:px-[170px] font-abc">
     
      <div className="sm-px-3 lg:grid grid-cols-2 ">
     
        <div className="sm:my-4">
        <h1 className="font-bold  mt-5 sm:p-1">Drugs information</h1>
          <h1 className="font-semibold">
            Patient Name:{" "}
            <span className="font-medium italic"> {data.name}</span>
          </h1>
          <h1 className="font-semibold">
            Patient Age: <span className="font-medium italic"> {data.age}</span>
          </h1>
          <h1 className="font-semibold">
            Patient PhoneNumber:{" "}
            <span className="font-medium italic"> {data.PhoneNumber}</span>
          </h1>
          <h1 className="font-semibold">
            Release Date:{" "}
            <span className="font-medium italic">{new Date(data.date).toLocaleDateString()}</span>
          </h1>
          <h1 className="font-semibold">
            Release Time:{" "}
            <span className="font-medium italic"> {new Date(data.date).toLocaleTimeString()}</span>
          </h1>
        </div>

        <div className="mt-3 ">
          <div className="sm:mt-3  bg-[#f0f8ff] h-auto  drop-shadow-md rounded p-7">
            <h1 className="font-bold text-[20px] text-center">Drug Details</h1>
            <div>
            {data.prediction.map((item, index) => (
                  <li key={index} className="font-semibold">{item}</li>
                ))}
            </div>
          </div>
        </div>
      </div>


      <div className="sm:mx-auto sm:container my-5">
        <h1 className=" font-bold sm:my-5">Prescription Image</h1>
        <img
          className="sm:mx-auto p-10 w-[300px] h-[300px] bg-slate-500"
          src={data.image}
          alt="Prescription"
        />
        <p className="text-center">Release time: <span>{new Date(data.date).toLocaleTimeString()}</span></p>
      </div>

 
    </div>
  );
}
