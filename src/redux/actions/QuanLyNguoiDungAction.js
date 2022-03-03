import { quanLyNguoiDungServices } from "../../services/QuanLyNguoiDungServices";
import {
    DANG_NHAP_ACTION,
    SET_DANH_SACH_NGUOI_DUNG,
    SET_THONG_TIN_TAI_KHOAN,
} from "../types/QuanLyNguoiDungTypes";
import { history } from "../../App";

export const quanLyDangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.quanLyDangNhap(
                thongTinDangNhap
            );

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,
                });
                history.push("/home");
            }
        } catch (error) {
            console.log(error);
            alert(error.response?.data.content);
        }
    };
};

export const thongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.thongTinTaiKhoan();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_TAI_KHOAN,
                    thongTinNguoiDung: result.data.content,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const quanLyDangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const resutl = await quanLyNguoiDungServices.quanLyDangKy(
                thongTinDangKy
            );

            if (resutl.data.statusCode === 200) {
                alert("Đăng ký thành công");
                history.push("/login");
            }
        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data.content);
        }
    };
};

export const layDanhSachNguoiDungAction = (tenNguoiDung = "") => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.layDanhSachNguoiDung(
                tenNguoiDung
            );

            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                danhSachNGuoiDung: result.data.content,
            });
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const themNguoiDungAction = (model) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.themNguoiDung(model);
            alert("Thêm Người Dùng Thành Công");
            history.push("/admin/user");
        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data.content);
        }
    };
};

export const capNhapNguoiDungAction = (model) => {
    return async () => {
        try {
            const result = await quanLyNguoiDungServices.capNhapNguoiDung(
                model
            );

            alert("Cập nhật người dùng thành công");
            history.push("/admin/user");
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const resutl = await quanLyNguoiDungServices.xoaNguoiDung(taiKhoan);
            dispatch(layDanhSachNguoiDungAction());
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};
