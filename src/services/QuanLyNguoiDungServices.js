import { MA_NHOM } from "../util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyNguoiDungSerVices extends baseServices {
    constructor() {
        super();
    }

    quanLyDangNhap = (thongTinDangNhap) => {
        return this.post("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    };

    thongTinTaiKhoan = () => {
        return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    };

    quanLyDangKy = (thongTinDangKy) => {
        return this.post("/api/QuanLyNguoiDung/DangKy", thongTinDangKy);
    };

    layDanhSachNguoiDung = (tenNguoiDung = "") => {
        if (tenNguoiDung !== "") {
            return this.get(
                `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${tenNguoiDung}`
            );
        }
        return this.get(
            `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}`
        );
    };

    themNguoiDung = (model) => {
        return this.post("/api/QuanLyNguoiDung/ThemNguoiDung", model);
    };

    capNhapNguoiDung = (model) => {
        return this.post(
            "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            model
        );
    };

    xoaNguoiDung = (taiKhoan) => {
        return this.delete(
            `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
        );
    };
}

export const quanLyNguoiDungServices = new QuanLyNguoiDungSerVices();
