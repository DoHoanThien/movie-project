import { baseServices } from "./baseServices";

export default class QuanLyRapServices extends baseServices {
    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(
            "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP11"
        );
    };

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(
            `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        );
    };

    layThongTinCumRapTheoHeThong = (maHeThongRap) => {
        return this.get(
            `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        );
    };
}

export const quanLyRapServices = new QuanLyRapServices();
