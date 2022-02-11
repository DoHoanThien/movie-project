import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimTypes";

const initialState = {
    arrFilm: [],
};

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            return { ...state };
        }
        default:
            return { ...state };
    }
};
