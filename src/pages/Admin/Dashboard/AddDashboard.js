import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { MA_NHOM } from "../../../util/setting/config";
import { themNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";

const { Option } = Select;

export default function AddDashboard() {
    const dispatch = useDispatch();

    const handleChangeMaNguoiDung = (value) => {
        formik.setFieldValue("maLoaiNguoiDung", value);
    };

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: MA_NHOM,
            maLoaiNguoiDung: "",
            hoTen: "",
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string()
                .min(2, "Tài khoản tối thiểu có 2 ký tự")
                .max(15, "Tài khoản tối đa có 15 ký tự")
                .required("Bạn chưa nhập tài khoản"),
            matKhau: Yup.string()
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Mật khẩu có từ 7-19 ký tự, phải có chữ cái, chữ số và ký tự đặc biệt"
                )
                .required("Bạn chưa nhập mật khẩu"),
            email: Yup.string()
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Email chưa hợp lệ"
                )
                .required("Bạn chưa nhập email"),
            soDt: Yup.string()
                .required("Bạn chưa nhập số điện thoại")
                .matches(
                    /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                    "Số điện thoại không hợp lệ"
                ),
            hoTen: Yup.string()
                .required("Bạn chưa nhập họ tên")
                .min(4, "Họ tên phải có từ 4 ký tự"),
        }),
        onSubmit: (values) => {
            dispatch(themNguoiDungAction(values));
        },
    });

    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 2,
            }}
            wrapperCol={{
                span: 12,
            }}
            layout="horizontal"
            size="large"
            labelAlign="left"
        >
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                Thêm Người Dùng Mới
            </h1>
            <Form.Item label="Họ Tên">
                <Input
                    name="hoTen"
                    value={formik.values.hoTen}
                    onChange={formik.handleChange}
                />
                {formik.errors.hoTen && formik.touched.hoTen ? (
                    <p className="text-red-500 m-0">{formik.errors.hoTen}</p>
                ) : null}
            </Form.Item>
            <Form.Item label="Tài Khoản">
                <Input
                    name="taiKhoan"
                    value={formik.values.taiKhoan}
                    onChange={formik.handleChange}
                />
                {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                    <p className="text-red-500 m-0">{formik.errors.taiKhoan}</p>
                ) : null}
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input
                    type="password"
                    name="matKhau"
                    value={formik.values.matKhau}
                    onChange={formik.handleChange}
                />
                {formik.errors.matKhau && formik.touched.matKhau ? (
                    <p className="text-red-500 m-0">{formik.errors.matKhau}</p>
                ) : null}
            </Form.Item>
            <Form.Item label="Email">
                <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email ? (
                    <p className="text-red-500 m-0">{formik.errors.email}</p>
                ) : null}
            </Form.Item>
            <Form.Item label="Số Điện Thoại">
                <Input
                    name="soDt"
                    value={formik.values.soDt}
                    onChange={formik.handleChange}
                />
                {formik.errors.soDt && formik.touched.soDt ? (
                    <p className="text-red-500 m-0">{formik.errors.soDt}</p>
                ) : null}
            </Form.Item>
            <Form.Item label="Loại Người Dùng">
                <Select
                    placeholder="Chọn Loại Người Dùng"
                    onChange={handleChangeMaNguoiDung}
                >
                    <Option value="KhachHang">Khách Hàng</Option>
                    <Option value="QuanTri">Quản Trị</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Thêm Người Dùng</Button>
            </Form.Item>
        </Form>
    );
}
