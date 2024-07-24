import React from "react";

export default function PatientDetails() {
  return (
    <div className="h-auto  text-center mt-4">
      <h1 className="text-[30px] font-bold font-sans">Prescription Details</h1>

      <div className="container w-3/4 mx-auto mt-5">
        <div className="container bg-[#efdfbb] h-auto rounded p-5">
          <div>
            <h1 className="text-left font-bold text-[20px]">Doctor Details</h1>
            <div className="flex flex-col mt-5">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-full  border-2"
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/947/390/small_2x/ai-generated-smiling-young-male-doctor-in-a-white-coat-a-stethoscope-at-a-hospital-pro-photo.jpg"
                  alt=""
                />
              </div>

              <div className="font-bold grid grid-cols-4 text-left gap-5 mt-5">
                <div>
                  <h1 className="underline">Doctor Name</h1>
                  <p className="italic">Dr. Sennarthna</p>
                </div>
                <div>
                  <h1 className="underline">Doctor Number</h1>
                  <p className="italic">0767617627</p>
                </div>

                <div>
                  <h1 className="underline">Doctor Email address</h1>
                  <p className="italic">senarathna@gmail.com</p>
                </div>

                <div>
                  <h1 className="underline">Release date</h1>
                  <p className="italic">2024/04/25</p>
                </div>
              </div>
            </div>
          </div>
           
          {/* <div className="mt-5">
            <h1 className="text-left font-bold text-[20px]">Patient Details</h1>
            <div className="flex flex-col">
             

              <div className="font-bold grid grid-cols-4 text-center gap-5 mt-5">
                <div>
                  <h1>Doctor Name</h1>
                  <p>Dr. Sennarthna</p>
                </div>
                <div>
                  <h1>Doctor Number</h1>
                  <p>0767617627</p>
                </div>

                <div>
                  <h1>Doctor Email address</h1>
                  <p>senarathna@gmail.com</p>
                </div>

                <div>
                  <h1>Release date</h1>
                  <p>2024/04/25</p>
                </div>
              </div>
            </div>
          </div> */}
           
           



        </div>
      </div>
    </div>
  );
}
