import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs } from "antd";
import { layThongTinLichChieuPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function Detail(props) {
    const filmDetail = useSelector(
        (state) => state.QuanLyPhimReducer.filmDetail
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const { id } = props.match.params;
        dispatch(layThongTinLichChieuPhimAction(id));
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${filmDetail.hinhAnh})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >
            <CustomCard
                style={{ paddingTop: 80, minHeight: "100vh" }}
                effectColor="#000"
                color="#000"
                blur={10}
                borderRadius={0}
            >
                <div className="container mx-auto mt-20 md:mt-10">
                    <div className="flex justify-center items-end mb-20">
                        <img
                            src={filmDetail.hinhAnh}
                            alt={filmDetail.maPhim}
                            className="w-1/3 md:w-1/4 mr-2"
                        />
                        <div className="max-w-lg">
                            <p className="mb-1 md:mb-4 text-xl sm:text-5xl font-bold">
                                {filmDetail.tenPhim}
                            </p>
                            <p className="text-sm mb-1 sm:mb-3 font-semibold">
                                Ngày Khởi Chiếu: <span></span>
                                {moment(filmDetail.ngayKhoiChieu).format(
                                    "DD-MM-YYYY"
                                )}
                            </p>
                            <p className="mb-0 sm:mb-3">
                                Mô tả: <span></span>
                                {filmDetail.moTa}
                            </p>
                            <div className="flex">
                                <Rate allowHalf defaultValue={4.25} />
                            </div>
                        </div>
                    </div>
                    <div className="w-auto max-w-7xl justify-center mx-auto mt-5 pb-4 pt-2 bg-slate-400/30">
                        <h1 className="text-center text-2xl mb-0">
                            Lịch Chiếu
                        </h1>
                        <Tabs tabPosition="left">
                            {filmDetail.heThongRapChieu?.map(
                                (heThongRap, index) => {
                                    return (
                                        <TabPane
                                            tab={
                                                <div className="flex items-center">
                                                    <img
                                                        className="w-10"
                                                        src={heThongRap.logo}
                                                        alt={
                                                            heThongRap.maHeThongRap
                                                        }
                                                    />
                                                </div>
                                            }
                                            key={index}
                                        >
                                            {heThongRap.cumRapChieu?.map(
                                                (cumRap, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="flex">
                                                                <img
                                                                    className="w-10 mr-2"
                                                                    src={
                                                                        cumRap.hinhAnh
                                                                    }
                                                                    alt={
                                                                        cumRap.maCumRap
                                                                    }
                                                                />
                                                                <div>
                                                                    <p className="font-semibold">
                                                                        {
                                                                            cumRap.tenCumRap
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-4">
                                                                {cumRap.lichChieuPhim
                                                                    ?.slice(
                                                                        0,
                                                                        12
                                                                    )
                                                                    .map(
                                                                        (
                                                                            lichChieu,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <NavLink
                                                                                    to={`/booking/${lichChieu.maLichChieu}`}
                                                                                    className="col-span-1 font-mono text-slate-800 hover:text-orange-700 text-left"
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    {moment(
                                                                                        lichChieu.ngayChieuGioChieu
                                                                                    ).format(
                                                                                        "hh:mm A"
                                                                                    )}
                                                                                </NavLink>
                                                                            );
                                                                        }
                                                                    )}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </TabPane>
                                    );
                                }
                            )}
                        </Tabs>
                    </div>
                </div>
            </CustomCard>
        </div>
    );
}
