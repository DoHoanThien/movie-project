import { baseServices } from "./baseServices";

export class QuanLyPhimServices extends baseServices {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    };

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`);
    };
}

export const quanlyPhimServices = new QuanLyPhimServices();
