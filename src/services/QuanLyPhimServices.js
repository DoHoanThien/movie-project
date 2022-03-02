import { MA_NHOM } from "../util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyPhimServices extends baseServices {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    };

    layDanhSachPhim = (tenPhim = "") => {
        if (tenPhim !== "") {
            return this.get(
                `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}&tenPhim=${tenPhim}`
            );
        }
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`);
    };

    themPhimThemHinh = (formData) => {
        return this.post("/api/QuanLyPhim/ThemPhimUploadHinh", formData);
    };

    chinhSuaPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    };

    capNhatPhim = (formData) => {
        return this.post("/api/QuanLyPhim/CapNhatPhimUpload", formData);
    };

    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    };
}

export const quanlyPhimServices = new QuanLyPhimServices();
