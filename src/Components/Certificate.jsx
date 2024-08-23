import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf1 from "./../../public/document/Java_cert.pdf";
import pdf2 from "./../../public/document/Php_Certificate.pdf";
import pdf3 from "./../../public/document/Web_Dev.pdf";
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

    return (
      <div className="w-[300px] absolute  top-0 left-0 h-full">
        <Document
          className={``}
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
        <p>
          Page {1} of {1}
        </p>
      </div>
    );
  };

  const pdfs = [pdf1, pdf2, pdf3];
  return (
    <div className="flex absolute  ">
      <Card file={pdf1} />;
    </div>
  );
};
export default Certificate;
