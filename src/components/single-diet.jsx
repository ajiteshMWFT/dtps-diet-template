import React, { useState } from "react";

const SingleDiet = ({ time1, time2 }) => {
  const [font, setFont] = useState(15);
  return (
    
    <tr>
      <td className="pb-4 p-2">
        <p className=" ">{time1}</p>
        <p className="text-red-600">{time2}</p>
      </td>
      <td
        contentEditable
        suppressContentEditableWarning={true}
        style={{ fontSize: `${font}px` }}
        className="min-w-1/2"
      >
        samosa
      </td>

      <div className="absolute right-[-10px] w-1">
        <input
          type="number"
          className="w-10"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        />
      </div>
    </tr>
  );
};

export default SingleDiet;
