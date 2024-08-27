import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf1 from "/document/Java_cert.pdf";
import pdf2 from "/document/Php_Certificate.pdf";
import pdf3 from "/document/Web_Dev.pdf";
import { motion } from "framer-motion";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const Certificate = () => {
  const Card = (props) => {
    const [numPages, setNumPages] = useState(0);

    function onDocumentLoadSuccess() {
      setNumPages(1);
    }

    var [isOpen, setIsOpen] = useState(false);
    return (
      <div className="w-full">
        <h1 className="text-center text-purple-700 text-5xl p-2 m-2">
          Certficates
        </h1>
        <div className="flex flex-wrap  gap-4 w-full">
          <div
            className="relative"
            onMouseLeave={() => setIsOpen(false)}
            onMouseEnter={() => setIsOpen(true)}
          >
            <Document
              className=" "
              file={props.file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                renderTextLayer={false}
                renderAnnotationLayer={false}
                height={200}
                scale={2}
                pageNumber={1}
              />
            </Document>
            {isOpen && (
              <div className=" rounded-md absolute top-0 left-0 w-full h-full bg-slate-400 opacity-95 flex justify-center flex-col items-center gap-10">
                <h1 className="text-3xl ">Full Java Script Course</h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href=""
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseLeave={() => setIsOpen(false)}
            onMouseEnter={() => setIsOpen(true)}
          >
            <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                renderTextLayer={false}
                renderAnnotationLayer={false}
                height={200}
                scale={2}
                pageNumber={1}
              />
            </Document>
            {isOpen && (
              <div className=" rounded-md absolute top-0 left-0 w-full h-full bg-slate-400 opacity-95 flex justify-center flex-col items-center gap-10">
                <h1 className="text-3xl ">Full Java Script Course</h1>
                <a
                  className="w-[150px] p-2 flex justify-center items-center opacity-95 bg-purple-500 rounded-md "
                  href=""
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const pdfs = [pdf1, pdf2, pdf3];
  return (
    <div className="flex absolute">
      <Card file={pdf1} />;
    </div>
  );
};
export default Certificate;
