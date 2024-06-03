import { Nav, NavItem, NavLink, TabContent, TabPane, Col, Row } from "reactstrap";
import { useState } from "react";

function Tabs({ bank }) {
  const [activeTabs, setActiveTabs] = useState("1");
  return (
    <>
      <div>
        <Nav tabs>
          <NavItem className="tabs-nav-items">
            <NavLink className={`${activeTabs === "1" && "active"}`} onClick={() => setActiveTabs("1")}>
              <h2 className="text-uppercase">ATM {bank}</h2>
            </NavLink>
          </NavItem>
          <NavItem className="tabs-nav-items">
            <NavLink className={`${activeTabs === "2" && "active"}`} onClick={() => setActiveTabs("2")}>
              <h3 className="text-uppercase">M-{bank}</h3>
            </NavLink>
          </NavItem>
          <NavItem className="tabs-nav-items">
            <NavLink className={`${activeTabs === "3" && "active"}`} onClick={() => setActiveTabs("3")}>
              <h3 className="text-uppercase">{bank} Klik</h3>
            </NavLink>
          </NavItem>
          <NavItem className="tabs-nav-items">
            <NavLink className={`${activeTabs === "4" && "active"}`} onClick={() => setActiveTabs("4")}>
              <h3>Internet Banking</h3>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTabs}>
          <TabPane tabId="1" className="atm">
            <Row>
              <Col sm="12">
                <ul>
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek {bank} Virtual Account”</li>
                  <li className="d-flex flex-column gap-2">
                    <span>Masukkan nomor {bank} Virtual Account: 70020+Order ID</span>
                    <span>Contoh:</span>
                    <span>No. Peserta: 12345678, maka ditulis 7002012345678</span>
                  </li>
                  <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                  <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="m-banking">
            <Row>
              <Col sm="12">
                <ul>
                  <li>Login ke aplikasi {bank} mobile</li>
                  <li>Pilih fitur m-transfer</li>
                  <li>Pilih transfer anter rekening</li>
                  <li>Masukan informasi rekening tujuan, nominal transfer dan berita</li>
                  <li>Pastikan kembaki informasi transfer sudah benar</li>
                  <li>Konfirmasi dengan memasukan PIN {bank} mobile </li>
                  <li>Transfer ke sesama rekening {bank} berhasil</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3" className="klik">
            <Row>
              <Col sm="12">
                <ul>
                  <li>Login ke Klik{bank} kamu</li>
                  <li>Pilih menu “Transfer Dana”</li>
                  <li>Pilih menu “Transfer Valas ke Rek Bank Lain” dan isi informasi transfer</li>
                  <li>Masukkan Respon Key{bank} Appli 2 dan klik “Lanjutkan”</li>
                  <li>Cek detail transfer</li>
                  <li>Masukkan Respon Key{bank} Appli 1, centang box syarat dan ketentuan dan klik “Kirim” apabila sudah sesuai</li>
                  <li>Transaksi berhasil dilakukan, bukti transaksi bisa dicetak ataupun disimpan</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <h1>coba</h1>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
}

export default Tabs;
