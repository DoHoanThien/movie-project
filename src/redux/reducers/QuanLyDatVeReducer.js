import { ThongTinPhongVe } from "../../_core/models/ThongTinPhongVe";
import {
    DAT_VE,
    DAT_VE_HOAN_TAT,
    LAY_DANH_SACH_PHONG_VE,
} from "../types/QuanLyDatVeTypes";

const initialState = {
    chiTietPhongVe: new ThongTinPhongVe(),
    danhSachGheDangDat: [],
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHONG_VE: {
            return { ...state, chiTietPhongVe: action.chiTietPhongVe };
        }

        case DAT_VE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(
                (ghe) => ghe.maGhe === action.gheDuocChon.maGhe
            );

            if (index != -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.gheDuocChon);
            }

            return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
        }

        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = [];
            return { ...state };
        }
        default:
            return { ...state };
    }
};
