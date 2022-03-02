import moment from "moment";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";

export default function HistoryBooking() {
    const { thongTinNguoiDung } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thongTinNguoiDungAction());
    }, []);

    const renderTicketItem = () => {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            return (
                <div key={index} className="p-3 mx-auto lg:w-1/2">
                    <div className="h-full flex sm:flex-row flex-col sm:justify-start sm:text-left">
                        <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={ticket.hinhAnh}
                        />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-xl text-indigo-500">
                                {ticket.tenPhim}
                            </h2>
                            <h3 className="text-gray-500 mb-2">
                                {ticket.giaVe.toLocaleString()} {"VND"}
                            </h3>
                            <p className="mb-2">
                                {"Ngày giờ khởi chiếu: "}
                                {moment(ticket.ngayDat).format("hh:mm A - ")}
                                {moment(ticket.ngayDat).format("DD/MM/YYYY ")}
                            </p>
                            <p className="mb-2">
                                {_.first(ticket.danhSachGhe).tenHeThongRap}
                            </p>
                            <span className="flex flex-wrap">
                                <span className="mr-1">Ghế đã đặt:</span>
                                {ticket.danhSachGhe.map((ghe, index) => {
                                    return (
                                        <span
                                            className="mr-1 mb-1 rounded-lg px-2 border border-orange-400 text-gray-400"
                                            key={index}
                                        >
                                            {ghe.tenGhe}
                                        </span>
                                    );
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <section className="text-gray-600 body-font bg-slate-800 min-h-screen">
            <div className="container relative px-5 py-20 mx-auto">
                <div className="absolute flex items-center text-orange-400 text-lg top-2 sm:top-2 md:top-5 lg:top-10 right-5">
                    <RollbackOutlined />
                    <NavLink className="text-indigo-500" to="/home">
                        Back to home
                    </NavLink>
                </div>
                <div className="flex flex-col items-center text-center w-full mb-10">
                    <h1 className="text-5xl font-medium title-font mb-4 text-indigo-500 tracking-widest">
                        LỊCH SỬ ĐẶT VÉ
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">
                        Hãy kiểm tra chính xác địa điểm và thời gian đặt vé để
                        xem phim vui vẻ
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">{renderTicketItem()}</div>
            </div>
        </section>
    );
}
