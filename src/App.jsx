import { useRef, useState } from "react";
import "./App.css";
import ClientInfo from "./components/client-info";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { createRoot } from "react-dom";
import Day from "./components/days";
import Notes from "./components/notes";
import DownloadIcon from "./components/download-icon";

function App() {
  const [Days, setDays] = useState(7);
  const [Loading, setLoading] = useState(false);

  const contentRef = useRef(null);

  const convertToPDF = async () => {
    setLoading(true);
    const pdf = new jsPDF({ unit: "pt", format: [540, 960] });
    const container = contentRef.current;

    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i];

      if (i > 0) {
        pdf.addPage();
      }
      const canvas = await html2canvas(child);
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let remainingHeight = imgHeight;
      let currentY = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      while (remainingHeight > 0) {
        const height = Math.min(pageHeight, remainingHeight);
        pdf.addImage(imgData, "PNG", 0, currentY, imgWidth, height);
        remainingHeight -= height;
        currentY += height;

        if (remainingHeight > 0 && currentY < pageHeight) {
          pdf.addPage();
        }
      }
    }

    await pdf.save("converted.pdf");
    setLoading(false);
  };

  return (
    <div className="mx-auto bg-[url('https://iili.io/Hiyht1f.jpg')] bg-fixed bg-no-repeat bg-cover">
      <div className="mx-auto mb-4 flex justify-center items-center font-bold bg-rose-300 p-2">
        <label htmlFor="day-num " className="text-white">
          Number of Days
        </label>
        <input
          type="number"
          id="day-num"
          value={Days}
          onChange={(e) => setDays(e.target.value)}
          className="ml-3 inline border-2  p-2 rounded-sm"
        />
      </div>
      
      <div ref={contentRef} className="flex flex-col gap-4">
        <img
          src="./assets/Intro.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <ClientInfo />
        <img
          src="./assets/02.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />

        {Array.from({ length: Days }, (_, index) => (
          <Day i={index} key={index} />
        ))}
        <Notes />

        <img
          src="./assets/Cycle/02.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/02_1.jpg"
          className="w-full max-w-[540px] h-auto mx-auto"
        />
        <img
          src="./assets/Cycle/03.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/03_1.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/04.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/04_1.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/05.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
        <img
          src="./assets/Cycle/05_1.jpg"
          className="w-full max-w-[540px] h-full mx-auto"
        />
      </div>

      <button
        className="px-8 py-4 mt-10 bg-rose-500 rounded-sm hover:bg-rose-600 text-white flex justify-center mx-auto fixed bottom-4 left-4"
        onClick={() => convertToPDF()}
        disabled={Loading}
      >
        {Loading ? (
          "Creating"
        ) : (
          <p className="flex justify-center items-center gap-1">
            {" "}
            <DownloadIcon className="w-2" /> Download PDF
          </p>
        )}
      </button>
    </div>
  );
}

export default App;
