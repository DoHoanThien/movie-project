import { baseServices } from "./baseServices";
export class QuanLyDatVeServices extends baseServices {
    constructor() {
        super();
    }

    layDanhSachPhongVe = (maLichChieu) => {
        return this.get(
            `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        );
    };

    datVe = (thongTinVe) => {
        return this.post("/api/QuanLyDatVe/DatVe", thongTinVe);
    };

    taoLichChieu = (model) => {
        return this.post("/api/QuanLyDatVe/TaoLichChieu", model);
    };
}

export const quanLyDatVeServices = new QuanLyDatVeServices();
