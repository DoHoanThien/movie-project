import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Switch, Rate } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { themPhimThemHinhAction } from "../../../redux/actions/QuanLyPhimAction";
import { MA_NHOM } from "../../../util/setting/config";

export default function AddFilms() {
    const dispatch = useDispatch();

    const [picture, setPicture] = useState();

    useEffect(() => {
        return () => {
            picture && URL.revokeObjectURL(picture.preview);
        };
    }, [picture]);

    const handleSwitch = (name) => {
        return (checked) => formik.setFieldValue(name, checked);
    };

    const handleChangePicture = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPicture(file);
        formik.setFieldValue("hinhAnh", file);
    };

    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: "",
            hinhAnh: "",
        },
        onSubmit: (values) => {
            let formData = new FormData();
            values.maNhom = MA_NHOM;
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    formData.append(
                        "File",
                        values.hinhAnh,
                        values.hinhAnh.name
                    );
                }
            }
            dispatch(themPhimThemHinhAction(formData));
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
                Th??m Phim M???i
            </h1>
            <Form.Item label="T??n Phim">
                <Input
                    name="tenPhim"
                    value={formik.values.tenPhim}
                    onChange={formik.handleChange}
                />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input
                    name="trailer"
                    value={formik.values.trailer}
                    onChange={formik.handleChange}
                />
            </Form.Item>
            <Form.Item label="M?? T???">
                <Input
                    name="moTa"
                    value={formik.values.moTa}
                    onChange={formik.handleChange}
                />
            </Form.Item>
            <Form.Item label="Ng??y Kh???i Chi???u">
                <DatePicker
                    name="ngayKhoiChieu"
                    format={"DD/MM/YYYY"}
                    onChange={(date) => {
                        formik.setFieldValue(
                            "ngayKhoiChieu",
                            moment(date).format("DD/MM/YYYY")
                        );
                    }}
                />
            </Form.Item>
            <Form.Item label="??ang Chi???u" valuePropName="checked">
                <Switch onChange={handleSwitch("dangChieu")} />
            </Form.Item>
            <Form.Item label="S???p Chi???u" valuePropName="checked">
                <Switch onChange={handleSwitch("sapChieu")} />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch onChange={handleSwitch("hot")} />
            </Form.Item>
            <Form.Item label="????nh Gi??">
                <Rate
                    name="danhGia"
                    className="bg-white flex align-middle"
                    allowHalf
                    min={1}
                    max={10}
                    onChange={(value) => {
                        formik.setFieldValue("danhGia", value);
                    }}
                />
            </Form.Item>
            <Form.Item className="flex flex-wrap" label="H??nh ???nh">
                <div className="flex items-center space-x-6">
                    <label className="block">
                        <input
                            type="file"
                            onChange={handleChangePicture}
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300"
                        />
                        <div>
                            {picture && (
                                <img
                                    src={picture.preview}
                                    alt={picture.name}
                                    width="60%"
                                    accept="image/png, image/jpeg, image/jpg"
                                />
                            )}
                        </div>
                    </label>
                </div>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Th??m Phim</Button>
            </Form.Item>
        </Form>
    );
}
