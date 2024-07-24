import React from "react";

const medicalDrugs = [
  {
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    use: "Pain relief, anti-inflammatory, blood thinner",
  },
  {
    name: "Tylenol",
    genericName: "Acetaminophen",
    use: "Pain relief, fever reducer",
  },
  { name: "Lipitor", genericName: "Atorvastatin", use: "Cholesterol-lowering" },
  { name: "Amoxicillin", genericName: "Amoxicillin", use: "Antibiotic" },
  { name: "Lasix", genericName: "Furosemide", use: "Diuretic" },
  {
    name: "Metformin",
    genericName: "Metformin",
    use: "Type 2 diabetes management",
  },
  { name: "Zoloft", genericName: "Sertraline", use: "Antidepressant" },
  {
    name: "Synthroid",
    genericName: "Levothyroxine",
    use: "Thyroid hormone replacement",
  },
  {
    name: "Prilosec",
    genericName: "Omeprazole",
    use: "Acid reflux, heartburn",
  },
  { name: "Ventolin", genericName: "Albuterol", use: "Asthma, COPD" },
];

export default function InfoDrugs() {
  return (
    <div className="my-10 ">
      <h1 className="font-bold px-[170px] mt-5">Drugs information</h1>
      <div className="grid grid-cols-2 px-[170px] mt-10">
        <div>
          <h1 className="font-semibold">
            Patient Name:{" "}
            <span className="font-medium italic"> Kamal Pathirana</span>
          </h1>
          <h1 className="font-semibold">
            Patient Age: <span className="font-medium italic"> 23</span>
          </h1>
          <h1 className="font-semibold">
            Patient Email:{" "}
            <span className="font-medium italic"> Pathirana@gmail.com</span>
          </h1>
        </div>
        <div>
          <div className="w-full bg-[#add8e6] h-auto p-5 drop-shadow-md rounded">
            <h1 className="font-bold text-[20px] text-center">Drug Details</h1>
            <div>
              <ul>
                {medicalDrugs.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto px-[170px]">
      <table className="table-auto mx-auto w-full border-collapse border border-gray-300">
  <thead>
    <tr>
      <th className="px-4 py-2 border border-gray-300 bg-gray-200">Name</th>
      <th className="px-4 py-2 border border-gray-300 bg-gray-200">Generic Name</th>
      <th className="px-4 py-2 border border-gray-300 bg-gray-200">Use</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {medicalDrugs.map((item, index) => (
      <tr key={index} className="even:bg-gray-100">
        <td className="px-4 py-2 border border-gray-300">{item.name}</td>
        <td className="px-4 py-2 border border-gray-300">{item.genericName}</td>
        <td className="px-4 py-2 border border-gray-300">{item.use}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
}
