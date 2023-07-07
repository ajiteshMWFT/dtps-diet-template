import React, { useState } from "react";
import SingleDiet from "./single-diet";
// const dietTime = ;
const Day = ({ i }) => {
  const [dietTime, setDietTime] = useState([
    {
      time1: "Early Morning",
      time2: "8:30AM",
    },
    {
      time1: "Break Fast",
      time2: "10:00AM",
    },
    {
      time1: "Mid Morning",
      time2: "11:00AM",
    },
    {
      time1: "Lunch",
      time2: "01:30PM",
    },
    {
      time1: "After Lunch",
      time2: "12:00PM",
    },
    {
      time1: "Evening Snack",
      time2: "05:30PM",
    },
    {
      time1: "Dinner",
      time2: "8:30PM",
    },
    {
      time1: "Bed Time",
      time2: "10:00PM",
    },
  ])
  return (
    <div className='w-full max-w-[540px]  h-full aspect-[9/16] bg-[url("/assets/dietbg.jpg")] mx-auto bg-cover '>
      <div className="relative top-[10%]  flex flex-col gap-2 lg:gap-6 px-[10%]  mx-auto ">
        <h2 className="text-lg lg:text-5xl font-extrabold">Day {i + 1}</h2>
        <table className="mt-2  font-bold font-lg lg:font-3xl ">
        <tbody>
          {dietTime?.map((e, i) => (
            <SingleDiet time1={e.time1} time2={e.time2} key={i}/>
          ))}
          
            {/* <tr>
              <td className="pb-4 p-2">
                <p className=" ">Early Morning</p>
                <p className="text-red-600">8:30AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}  className="min-w-1/2">
                samosa
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Break Fast</p>
                <p className="text-red-600">10:00AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Mid Morning</p>
                <p className="text-red-600">11:00AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Lunch</p>
                <p className="text-red-600">01:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">After Lunch</p>
                <p className="text-red-600">2:00PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Evening Snack</p>
                <p className="text-red-600">05:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Dinner</p>
                <p className="text-red-600">8:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Bed Time</p>
                <p className="text-red-600">10:00PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="min-w-1/2">
                
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Day;
