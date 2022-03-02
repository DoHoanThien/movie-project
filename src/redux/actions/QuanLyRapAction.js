import { quanLyRapServices } from "../../services/QuanLyRapServices";
import {
    SET_HE_THONG_RAP_CHIEU,
    SET_THONG_TIN_LICH_CHIEU_PHIM,
} from "../types/QuanLyRapTypes";

export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapServices.layDanhSachHeThongRap();
            dispatch({
                type: SET_HE_THONG_RAP_CHIEU,
                heThongRapChieu: result.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const layThongTinLichChieuPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapServices.layThongTinLichChieuPhim(
                maPhim
            );
            dispatch({
                type: SET_THONG_TIN_LICH_CHIEU_PHIM,
                filmDetail: result.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
