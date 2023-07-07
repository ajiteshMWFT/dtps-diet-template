import React from "react";

const ClientInfo = () => {
  return (
    <div className='w-full max-w-[540px] aspect-[9/16] bg-[url("/assets/Name.jpg")] mx-auto bg-cover '>
      <div className="relative top-[25%]  flex flex-col gap-2 lg:gap-4 w-1/2 mx-auto text-sm ">
      <table className="mt-2  font-bold font-lg lg:font-3xl ">
        <tbody>
          <tr>
            <td className="p-1 w-[25%]">
              <p className="flex justify-between">Name <span>-</span></p>
              
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              className=""
            >
              Client's Name
            </td>
          </tr>

          <tr>
            <td className="p-1">
              <p className="flex justify-between">Age <span>-</span></p>
              
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              className=""
            >Client's Age</td>
          </tr>

          <tr>
            <td className="p-1">
              <p className="flex justify-between">Height <span>-</span></p>
            
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              className=""
            > Client's Height</td>
          </tr>

          <tr>
            <td className="p-1">
              <p className="flex justify-between">Weight <span>-</span></p>
             
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              className=""
            >CLient's Weight</td>
          </tr>

          <tr>
            <td className="p-1 w-auto">
              <p className="flex justify-between">BMI <span>-</span></p>
             
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              className=""
            >Client's BMI</td>
          </tr>

          
        </tbody>
      </table>
        <div className="  font-bold">
          <p contentEditable suppressContentEditableWarning={true} className="">
            Client ki motai (ya pltlai, whatever)
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default ClientInfo;
