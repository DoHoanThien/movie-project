import { quanLyDatVeServices } from "../../services/QuanLyDatVeServies";
import {
    DAT_VE_HOAN_TAT,
    LAY_DANH_SACH_PHONG_VE,
} from "../types/QuanLyDatVeTypes";
import { displayLoadingAction, hiddenLoadingAction } from "./LoadingAction";
import { history } from "../../App";

export const layDanhSachPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await quanLyDatVeServices.layDanhSachPhongVe(
                maLichChieu
            );

            if (result.data.statusCode === 200) {
                dispatch(hiddenLoadingAction);
                dispatch({
                    type: LAY_DANH_SACH_PHONG_VE,
                    chiTietPhongVe: result.data.content,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const datVeAction = (thongTinVe) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction);

            const result = await quanLyDatVeServices.datVe(thongTinVe);

            await dispatch(layDanhSachPhongVeAction(thongTinVe.maLichChieu));
            await dispatch({ type: DAT_VE_HOAN_TAT });

            await dispatch(hiddenLoadingAction);

            history.push("/historybooking");
        } catch (error) {
            dispatch(hiddenLoadingAction);
            console.log(error);
        }
    };
};
