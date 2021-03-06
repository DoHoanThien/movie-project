import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import "./Booking.css";
import {
    layDanhSachPhongVeAction,
    datVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import { UserOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/types/QuanLyDatVeTypes";
import { history } from "../../App";

export default function Booking(props) {
    const { thongTinDangNhap } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    const { danhSachGheDangDat, chiTietPhongVe } = useSelector(
        (state) => state.QuanLyDatVeReducer
    );

    const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

    const dispatch = useDispatch();

    useEffect(() => {
        const { id } = props.match.params;
        dispatch(layDanhSachPhongVeAction(id));
    }, []);

    const renderGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
            let classGheDangDat = "";

            let indexGheDangDat = danhSachGheDangDat.findIndex(
                (gheDD) => gheDD.maGhe === ghe.maGhe
            );

            if (indexGheDangDat != -1) {
                classGheDangDat = "gheDangDat";
            }
            return (
                <Fragment key={index}>
                    <button
                        onClick={() => {
                            dispatch({
                                type: DAT_VE,
                                gheDuocChon: ghe,
                            });
                        }}
                        disabled={ghe.daDat}
                        className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                    >
                        {ghe.daDat ? <UserOutlined /> : ghe.tenGhe}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            );
        });
    };

    return (
        <div className="lg:flex min-h-screen">
            <div className="bg-slate-600 md:none text-center place-content-center flex-1">
                <div className="text-center text-white text-3xl trapezoid duration-200 hover:scale-105 mt-5 mx-auto">
                    M??n H??nh
                </div>
                <div className="mt-12">{renderGhe()}</div>
                <div className="mt-12 flex place-content-center">
                    <div className="flex items-center">
                        <div className="ghe"></div>
                        <span>Gh??? Th?????ng</span>
                    </div>
                    <div className="flex items-center">
                        <div className="ghe gheVip"></div>
                        <span>Gh??? Vip</span>
                    </div>
                    <div className="flex items-center">
                        <div className="ghe gheDaDat"></div>
                        <span>Gh??? ???? ?????t</span>
                    </div>
                    <div className="flex items-center">
                        <div className="ghe gheDangDat"></div>
                        <span>Gh??? ??ang Ch???n</span>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 xl:max-w-screen-sm bg-slate-800 shadow-xl shadow-slate-900/80">
                <div className="py-10 flex justify-center lg:px-10">
                    <h1 className="text-white text-5xl">Th??ng Tin V?? ?????t</h1>
                </div>
                <div className="text-white mt-5 px-10 sm:px-24 md:px-48 lg:px-12 lg:mt-5 xl:px-24 xl:max-w-2xl">
                    <div>
                        <h3 className="text-center text-3xl text-indigo-500 font-display font-semibold lg:text-left xl:text-3xl after:xl:text-bold">
                            {thongTinPhim.tenPhim}
                        </h3>
                        <p>?????a ??i???m: {thongTinPhim.diaChi}</p>
                        <p>Ng??y Chi???u: {thongTinPhim.ngayChieu}</p>
                        <p>Gi??? Chi???u: {thongTinPhim.gioChieu}</p>
                        <p>R???p S???: {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className="mt-5 flex">
                        <p className="text-orange-500 mr-2">Gh???:</p>
                        {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                            (gheDD, index) => {
                                return (
                                    <span className="mr-1" key={index}>
                                        {gheDD.tenGhe}
                                    </span>
                                );
                            }
                        )}
                    </div>
                    <hr />
                    <div className="mt-5">
                        <p className="mb-0 text-gray-500">E-mail</p>
                        <p>{thongTinDangNhap.email}</p>
                    </div>
                    <hr />
                    <div className="mt-5">
                        <p className="mb-0 text-gray-500">S??? ??i???n tho???i</p>
                        <p>
                            {thongTinDangNhap.soDT
                                ? thongTinDangNhap.soDT
                                : "0965511645"}
                        </p>
                    </div>
                    <hr />
                    <div className="mt-5">
                        <p className="mb-0 text-gray-500">M?? gi???m gi??</p>
                        <p>Kh??ng ??p d???ng</p>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <p className="text-orange-500">T???ng Ti???n</p>
                        <p>
                            {danhSachGheDangDat
                                .reduce((tongTien, ghe) => {
                                    return (tongTien += ghe.giaVe);
                                }, 0)
                                .toLocaleString()}{" "}
                            VND
                        </p>
                    </div>
                    <hr />
                    <div className="mt-20 w-full">
                        <button
                            onClick={() => {
                                const thongTinVe = {};

                                thongTinVe.maLichChieu = props.match.params.id;
                                thongTinVe.danhSachVe = danhSachGheDangDat;

                                dispatch(datVeAction(thongTinVe));
                            }}
                            type="submit"
                            className="bg-indigo-800 text-gray-100 p-4 w-full rounded-md tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-700 shadow-lg"
                        >
                            ?????t V??
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
