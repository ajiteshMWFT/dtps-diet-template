import React from "react";

const Day = ({ i }) => {
  return (
    <div className='w-full max-w-[1080px] aspect-[9/16] bg-[url("/assets/dietbg.jpg")] mx-auto bg-cover '>
      <div className="relative top-[10%]  flex flex-col gap-2 lg:gap-6 px-[10%]  mx-auto ">
        <h2 className="text-lg lg:text-5xl font-extrabold">Day {i + 1}</h2>
        <table className="mt-[5%] lg:mt-[15%] font-bold font-lg lg:font-3xl ">
          <tbody>
            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Early Morning</p>
                <p className="text-red-600">8:30AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                samosa
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Break Fast</p>
                <p className="text-red-600">10:00AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Mid Morning</p>
                <p className="text-red-600">11:00AM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Lunch</p>
                <p className="text-red-600">01:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">After Lunch</p>
                <p className="text-red-600">2:00PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Evening Snack</p>
                <p className="text-red-600">05:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Dinner</p>
                <p className="text-red-600">8:30PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true} className="">
                
              </td>
            </tr>

            <tr>
              <td className="pb-4 p-2">
                <p className=" ">Bed Time</p>
                <p className="text-red-600">10:00PM</p>
              </td>
              <td contentEditable suppressContentEditableWarning={true}>
                
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Day;
