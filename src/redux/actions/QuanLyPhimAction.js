import { quanlyPhimServices } from "../../services/QuanLyPhimServices";
import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimTypes";

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.layDanhSachPhim();
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
