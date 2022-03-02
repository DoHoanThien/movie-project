import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import {
    DANG_NHAP_ACTION,
    SET_DANH_SACH_NGUOI_DUNG,
    SET_THONG_TIN_TAI_KHOAN,
} from "../types/QuanLyNguoiDungTypes";

let thongTin = {};
if (localStorage.getItem(USER_LOGIN)) {
    thongTin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    thongTinDangNhap: thongTin,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [],
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            localStorage.setItem(
                USER_LOGIN,
                JSON.stringify(action.thongTinDangNhap)
            );
            localStorage.setItem(TOKEN, action.thongTinDangNhap.accessToken);
            state.thongTinDangNhap = action.thongTinDangNhap;
            return { ...state };
        }

        case SET_THONG_TIN_TAI_KHOAN: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state };
        }

        case SET_DANH_SACH_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNGuoiDung;
            return { ...state };
        }

        default:
            return state;
    }
};
