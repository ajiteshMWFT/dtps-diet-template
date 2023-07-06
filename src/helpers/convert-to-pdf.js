import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { createRoot } from "react-dom";
export const convertElementToPDF = async(element) => {
    const pdf = new jsPDF({
        unit: 'px',
        format: [540, pdfHeight],
      });
    const htmlElement = document.createElement('div');
    const children = React.Children.toArray(element.props.children);
  
    for (let index = 0; index < children.length; index++) {
      const child = children[index];
      const canvas = await html2canvas(child);
      const imgData = canvas.toDataURL('image/png');
      if (index !== 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, 'PNG', 0, 0);
    }
  
    pdf.save('output.pdf');
};
