import { history } from "../../App";
import { quanlyPhimServices } from "../../services/QuanLyPhimServices";
import {
    SET_DANH_SACH_PHIM,
    SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimTypes";

export const layDanhSachPhimAction = (tenPhim = "") => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.layDanhSachPhim(tenPhim);
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content,
            });
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const themPhimThemHinhAction = (formData) => {
    return async () => {
        try {
            const result = await quanlyPhimServices.themPhimThemHinh(formData);
            alert("Thêm phim thành công");
            history.push("/admin/films/films");
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const chinhSuaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.chinhSuaPhim(maPhim);

            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content,
            });
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const capNhatPhimAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.capNhatPhim(formData);
            console.log(result);
            alert("Chỉnh sửa phim thành công");
            history.push("/admin/films/films");
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.xoaPhim(maPhim);
            dispatch(layDanhSachPhimAction());
        } catch (error) {
            console.log(error.response?.data);
        }
    };
};
