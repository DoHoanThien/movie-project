import React, { useEffect } from "react";
import { Table } from "antd";
import { Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    layDanhSachNguoiDungAction,
    xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
const { Search } = Input;

export default function Dashboard() {
    const { danhSachNguoiDung } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    const dispatch = useDispatch();

    const columns = [
        {
            width: "20%",
            title: "Tên Người Dùng",
            dataIndex: "hoTen",
            defaultSortOrder: "descend",
            sorter: (a, b) => {
                if (a.hoTen.toLowerCase() < b.hoTen.toLowerCase()) {
                    return -1;
                }
                if (a.hoTen.toLowerCase() > b.hoTen.toLowerCase()) {
                    return 1;
                }
                return 0;
            },
        },
        {
            width: "20%",
            title: "Tài Khoản",
            dataIndex: "taiKhoan",
            defaultSortOrder: "descend",
            sorter: (a, b) => {
                if (a.taiKhoan.toLowerCase() < b.taiKhoan.toLowerCase()) {
                    return -1;
                }
                if (a.taiKhoan.toLowerCase() > b.taiKhoan.toLowerCase()) {
                    return 1;
                }
                return 0;
            },
        },
        {
            width: "20%",
            title: "Email",
            dataIndex: "email",
        },
        {
            width: "20%",
            title: "Số Điện Thoại",
            dataIndex: "soDt",
        },
        {
            width: "20%",
            title: "Hành Động",
            dataIndex: "tenPhim",
            render: (text, record) => {
                return (
                    <div className="flex items-center">
                        <NavLink
                            to={`/admin/user/editdashboard/${record.taiKhoan}`}
                        >
                            <EditOutlined />
                        </NavLink>
                        <span
                            onClick={() => {
                                {
                                    window.confirm(
                                        "Bạn chắc chắn muốn xóa tài khoản " +
                                            record.taiKhoan
                                    ) &&
                                        dispatch(
                                            xoaNguoiDungAction(record.taiKhoan)
                                        );
                                }
                            }}
                            className="text-red-600 hover:text-red-500 mx-2 md:mx-3"
                            style={{ cursor: "pointer" }}
                        >
                            <DeleteOutlined />
                        </span>
                    </div>
                );
            },
        },
    ];

    const onSearch = (value) => {
        dispatch(layDanhSachNguoiDungAction(value));
    };

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, []);

    return (
        <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                Quản lý Phim
            </h1>
            <Search
                className="mb-5"
                placeholder="Nhập thông tin cần tìm kiếm theo tên người dùng"
                allowClear
                enterButton="Tìm Kiếm"
                size="large"
                onSearch={onSearch}
            />
            <Table
                columns={columns}
                dataSource={danhSachNguoiDung}
                rowKey={"taiKhoan"}
            />
        </div>
    );
}
