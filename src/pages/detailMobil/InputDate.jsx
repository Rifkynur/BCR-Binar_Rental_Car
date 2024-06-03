import React from "react";
import { FiUsers, FiCalendar } from "react-icons/fi";

const InputDate = () => {
  return (
    <div className="input-date position-relative">
      <input type="text" placeholder="Pilih tanggal mulai dan tanggal akhir sewa" />
      <FiCalendar />
    </div>
  );
};

export default InputDate;
