import { useRef, useState } from "react";
import "./App.css";
import ClientInfo from "./components/client-info";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { createRoot } from "react-dom";
import Day from "./components/days";
import Notes from "./components/notes";

function App() {
  const [Days, setDays] = useState(7);
  
  const contentRef = useRef(null);

  const convertToPDF = async () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const container = contentRef.current;

    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i];
      const canvas = await html2canvas(child);

      if (i > 0) {
        pdf.addPage();
      }

      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save("converted.pdf");
  };

  return (
    <div className="mx-auto ">
      <div className="mx-auto my-4 flex justify-center items-center">
        <label htmlFor="day-num">Number of Days</label>
        <input
          type="number"
          id="day-num"
          value={Days}
          onChange={(e) => setDays(e.target.value)}
          className="ml-3 inline border p-2 rounded-sm"
        />
      </div>
      <div ref={contentRef}>
        <img
          src="./assets/Intro.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />
        <ClientInfo />
        <img
          src="./assets/02.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />

        {[...Array(7)]?.map((e, i) => (
          <Day i={i} key={i} />
        ))}
        <Notes />

        <img
          src="./assets/12.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />
        <img
          src="./assets/13.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />
        <img
          src="./assets/14.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />
        <img
          src="./assets/15.jpg"
          className="w-full max-w-[1080px] h-full mx-auto"
        />
      </div>

      <button
        className="px-8 py-4 bg-green-400 text-white flex justify-center mx-auto mt-10"
        onClick={() => convertToPDF()}
      >
        Download PDF
      </button>
    </div>
  );
}

export default App;
