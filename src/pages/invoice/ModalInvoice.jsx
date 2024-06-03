import React, { useRef } from "react";
import { Modal, ModalHeader, ModalFooter, Table } from "reactstrap";
import { intervalToDuration } from "date-fns";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { useFindCarContext } from "../../context/FindCarContext";
import { useNavigate } from "react-router";

const ModalInvoice = ({ modal, toggle, data, date }) => {
  const printRef = useRef(null);

  const navigate = useNavigate();

  const context = useFindCarContext();

  const totalDays = intervalToDuration({ start: date.startDate, end: date.endDate });

  const downloadPdf = () => {
    const input = printRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a5", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("invoice.pdf");
      toast("Berhasil Download Invoice", { type: "success", position: "top-right", theme: "colored" });
      context.setIsCarOpen("false");
      navigate("/");
    });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Invoice</ModalHeader>
        <div ref={printRef} className="invoice-pdf container">
          <div className="invoice-pdf-header">
            <h2>BCR Binar Car Invoice</h2>
          </div>
          <div className="invoice-pdf-to">
            <h3>Kepada :</h3>
            <h4>Email : {data?.User?.email}</h4>
            <h4>Order Id : {data?.id}</h4>
          </div>
          <div className="invoice-pdf-detail">
            <h3>Detail Rental :</h3>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Car Name</th>
                  <th>Total Days</th>
                  <th>Start date</th>
                  <th>End Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data?.Car?.name}</td>
                  <td>{totalDays.days + 1}</td>
                  <td>{date?.startDate}</td>
                  <td>{date?.endDate}</td>
                  <td>Rp.{data?.Car?.price}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="fw-bold">Rp.{data?.total_price}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="invoice-pdf-note">
            <p>Terima kasih telah menggunakan layanan kami.</p>
          </div>
        </div>
        <ModalFooter>
          <button className="button-green" color="primary" onClick={downloadPdf}>
            Download
          </button>
          <button className="button-green bg-danger" color="secondary" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalInvoice;
