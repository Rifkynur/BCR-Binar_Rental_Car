import React, { useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";

const TransferTo = ({ bank }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isRekeningCopied, setIsRekeningCopied] = useState(false);

  const rekeningRef = useRef(null);
  const totalPaymentRef = useRef(null);

  const noRekening = rekeningRef.current;
  const totalPayment = totalPaymentRef.current;

  const copyToClipboard = async (text) => {
    const value = text.innerText;
    try {
      await navigator.clipboard.writeText(value);
      if (value === "54104257877") setIsRekeningCopied(true);
      if (value === "Rp 3.500.000") setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="transfer-to">
      <h2>Lakukan Transfer Ke</h2>
      <div className="d-flex gap-3">
        <div className="bank">{bank}</div>
        <div className="d-flex flex-column ">
          <span>
            <span className="text-uppercase">{bank}</span> Transfer
          </span>
          <span>a.n Binar Car Rental</span>
        </div>
      </div>
      <div>
        <h3>Nomor Rekening</h3>
        <div className="w-100 border rounded-1 transfer-to-info">
          <h4 ref={rekeningRef}>54104257877</h4>
          {!isRekeningCopied ? <FiCopy className="copy-icon" size={18} onClick={() => copyToClipboard(noRekening)} /> : <LuCopyCheck size={18} color="#5cb85f" />}
        </div>
      </div>
      <div>
        <h3>Total Bayar</h3>
        <div className="w-100 border rounded-1 transfer-to-info">
          <h5 ref={totalPaymentRef}>Rp 3.500.000</h5>
          {!isCopied ? <FiCopy className="copy-icon" size={18} onClick={() => copyToClipboard(totalPayment)} /> : <LuCopyCheck size={18} color="#5cb85f" />}
        </div>
      </div>
    </div>
  );
};

export default TransferTo;
