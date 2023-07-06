import React from "react";

const Notes = () => {
  return (
    <div className='w-full max-w-[540px] aspect-[9/16] bg-[url("/assets/Note.jpg")] mx-auto bg-cover '>
      <div className="relative top-[20%]  flex flex-col gap-2 lg:gap-6 px-[10%] mx-auto text-sm lg:text-3xl">
        <div className="flex  font-bold">
          <p
            contentEditable
            suppressContentEditableWarning={true}
            className="ml-4 text-sm"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est corrupti numquam non dolor saepe ipsum aliquid dolore magnam minus molestias! Voluptatibus laboriosam, provident minima fugiat neque placeat distinctio voluptate excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
