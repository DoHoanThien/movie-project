import React, { useEffect, useState } from "react";
import { Form, Button, DatePicker, InputNumber, Select } from "antd";
import { quanLyRapServices } from "../../../services/QuanLyRapServices";
import moment from "moment";
import { useFormik } from "formik";
import { quanLyDatVeServices } from "../../../services/QuanLyDatVeServies";
import { history } from "../../../App";
const { Option } = Select;

export default function ShowTime(props) {
    const [state, setState] = useState({
        heThongRap: [],
        cumRap: [],
    });

    useEffect(async () => {
        try {
            const result = await quanLyRapServices.layDanhSachHeThongRap();
            setState({
                ...state,
                heThongRap: result.data.content,
            });
        } catch (error) {
            console.log(error.response?.data);
        }
    }, []);

    const onChangeHeThongRap = async (value) => {
        try {
            const result = await quanLyRapServices.layThongTinCumRapTheoHeThong(
                value
            );
            setState({
                ...state,
                cumRap: result.data.content,
            });
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    const onChangeCumRap = (value) => {
        formik.setFieldValue("maRap", value);
    };

    const onChangeNgayGioChieu = (value) => {
        formik.setFieldValue(
            "ngayChieuGioChieu",
            moment(value).format("DD/MM/YYYY hh:mm:ss")
        );
    };

    const onchangInputNumber = (value) => {
        formik.setFieldValue("giaVe", value);
    };

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: "",
        },
        onSubmit: async (values) => {
            try {
                const result = await quanLyDatVeServices.taoLichChieu(values);
                alert("Tạo lịch chiếu thành công");
                history.goBack();
            } catch (error) {
                console.log(error.response?.data);
            }
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
                Tạo Lịch Chiếu - Phim {props.match.params.tenphim}
            </h1>
            <Form.Item label="Hệ Thống Rạp">
                <Select
                    placeholder="Chọn Hệ Thống Rạp"
                    onChange={onChangeHeThongRap}
                >
                    {state.heThongRap?.map((heThongRap, index) => (
                        <Option key={index} value={heThongRap.maHeThongRap}>
                            {heThongRap.tenHeThongRap}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Cụm Rạp">
                <Select placeholder="Chọn Cụm Rạp" onChange={onChangeCumRap}>
                    {state.cumRap?.map((cumRap, index) => (
                        <Option key={index} value={cumRap.maCumRap}>
                            {cumRap.tenCumRap}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Ngày/Giờ Chiếu">
                <DatePicker
                    showTime
                    format="DD/MM/YYYY hh:mm:ss"
                    onChange={onChangeNgayGioChieu}
                />
            </Form.Item>
            <Form.Item label="Giá Vé">
                <InputNumber
                    min={75000}
                    max={150000}
                    onChange={onchangInputNumber}
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Thêm Lịch Chiếu</Button>
            </Form.Item>
        </Form>
    );
}
