import React, { useEffect } from "react";
import format from "date-fns/format";

const OrderDetailHeader = ({ data, category, date }) => {
  // console.log(category);
  useEffect(() => {}, [data]);
  // const startDate = format(data?.start_rent_at, "dd MMM yyyy");
  // const endDate = format(data?.finish_rent_at, "dd MMM yyyy");
  // console.log(startDate);
  return (
    <div className="box-card-selected ">
      <div className="order-detail-header">
        <div>
          <h1>Detail Pesananmu</h1>
        </div>
        <div className=" order-detail-header-car">
          <div>
            <h2>Nama/Tipe Mobil</h2>
            <p>{data?.Car?.name ?? "-"}</p>
          </div>
          <div>
            <h2>Kategori</h2>
            <p>{category ?? "-"} orang</p>
          </div>
          <div>
            <h2>Tanggal Mulai Sewa</h2>
            <p>{date?.startDate ?? "-"}</p>
          </div>
          <div>
            <h2>Tanggal Akhir Sewa</h2>
            <p>{date?.endDate ?? "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailHeader;
