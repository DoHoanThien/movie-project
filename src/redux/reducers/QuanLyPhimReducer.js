import {
    SET_DANH_SACH_PHIM,
    SET_PHIM_DANG_CHIEU,
    SET_PHIM_SAP_CHIEU,
    SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimTypes";
import { SET_THONG_TIN_LICH_CHIEU_PHIM } from "../types/QuanLyRapTypes";

const initialState = {
    arrFilm: [],
    arrfilmDefault: [],

    filmDetail: {},

    thongTinPhim: {},
};

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrfilmDefault = action.arrFilm;
            return { ...state };
        }

        case SET_PHIM_DANG_CHIEU: {
            state.arrFilm = state.arrfilmDefault.filter(
                (film) => film.dangChieu === action.dangChieu
            );
            return { ...state };
        }

        case SET_PHIM_SAP_CHIEU: {
            state.arrFilm = state.arrfilmDefault.filter(
                (film) => film.sapChieu === action.sapChieu
            );
            return { ...state };
        }

        case SET_THONG_TIN_LICH_CHIEU_PHIM: {
            state.filmDetail = action.filmDetail;
            return { ...state };
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return { ...state };
        }

        default:
            return { ...state };
    }
};
