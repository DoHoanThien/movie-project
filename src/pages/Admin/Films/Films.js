import React, { useEffect } from "react";
import { Table } from "antd";
import { Input } from "antd";
import {
    CalendarOutlined,
    DeleteOutlined,
    EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    layDanhSachPhimAction,
    xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";
const { Search } = Input;

export default function Films() {
    const { arrfilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

    const dispatch = useDispatch();

    const columns = [
        {
            width: "10%",
            title: "Mã Phim",
            dataIndex: "maPhim",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.maPhim - b.maPhim,
        },
        {
            width: "10%",
            title: "Hình Ảnh",
            dataIndex: "hinhAnh",
            render: (text, record) => {
                return (
                    <img
                        className="w-10"
                        src={record.hinhAnh}
                        alt={record.tenPhim}
                    />
                );
            },
        },
        {
            width: "70%",
            title: "Tên Phim",
            dataIndex: "tenPhim",
            sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
            sortDirections: ["descend"],
        },
        {
            width: "10%",
            title: "Hành Động",
            dataIndex: "tenPhim",
            render: (text, record) => {
                return (
                    <div className="flex items-center">
                        <NavLink to={`/admin/films/editfilm/${record.maPhim}`}>
                            <EditOutlined />
                        </NavLink>
                        <span
                            onClick={() => {
                                {
                                    window.confirm(
                                        "Bạn chắc chắn muốn xóa phim" +
                                            record.tenPhim
                                    ) && dispatch(xoaPhimAction(record.maPhim));
                                }
                            }}
                            className="text-red-600 hover:text-red-500 mx-2 md:mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <DeleteOutlined />
                        </span>
                        <NavLink
                            to={`/admin/showtime/${record.maPhim}/${record.tenPhim}`}
                            className="text-orange-500"
                        >
                            <CalendarOutlined />
                        </NavLink>
                    </div>
                );
            },
        },
    ];

    const onSearch = (value) => {
        dispatch(layDanhSachPhimAction(value));
    };

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, []);

    return (
        <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                Quản lý Phim
            </h1>
            <Search
                className="mb-5"
                placeholder="Nhập thông tin cần tìm kiếm"
                allowClear
                enterButton="Tìm Kiếm"
                size="large"
                onSearch={onSearch}
            />
            <Table
                columns={columns}
                dataSource={arrfilmDefault}
                rowKey={"tenPhim"}
            />
        </div>
    );
}
