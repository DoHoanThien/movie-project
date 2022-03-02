import { NavLink, Redirect, Route } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { USER_LOGIN } from "../../util/setting/config";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
    VideoCameraFilled,
    UserSwitchOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import _ from "lodash";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
    const { Component, ...restProps } = props;

    const [collapsed, setcollapsed] = useState(false);

    const { thongTinDangNhap } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    const onCollapse = (collapsed) => {
        setcollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    if (!localStorage.getItem(USER_LOGIN)) {
        alert("Bạn chưa thể truy cập vào trang này");
        return <Redirect to="/" />;
    }

    if (thongTinDangNhap.maLoaiNguoiDung !== "QuanTri") {
        alert("Bạn không có quyền truy cập vào trang này !");
        return <Redirect to="/" />;
    }

    return (
        <Route
            {...restProps}
            render={(prosRoute) => {
                return (
                    <Fragment>
                        <Layout style={{ minHeight: "100vh" }}>
                            <Sider
                                collapsible
                                breakpoint="md"
                                collapsed={collapsed}
                                onCollapse={onCollapse}
                            >
                                <div className="flex mt-3 justify-center title-font font-medium items-center text-white hover:text-indigo-500 mb-2 md:mb-2">
                                    <NavLink to="/home">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full hover:bg-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </NavLink>
                                </div>
                                <Menu
                                    theme="dark"
                                    defaultSelectedKeys={["1"]}
                                    mode="inline"
                                >
                                    <SubMenu
                                        key="sub1"
                                        icon={<UserOutlined />}
                                        title="User"
                                    >
                                        <Menu.Item
                                            key="1"
                                            icon={<UserSwitchOutlined />}
                                        >
                                            <NavLink to="/admin/user">
                                                Users
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item
                                            key="2"
                                            icon={<UserAddOutlined />}
                                        >
                                            <NavLink to="/admin/user/adddashboard">
                                                Add User
                                            </NavLink>
                                        </Menu.Item>
                                    </SubMenu>

                                    <SubMenu
                                        key="sub2"
                                        icon={<VideoCameraFilled />}
                                        title="Films"
                                    >
                                        <Menu.Item
                                            key="3"
                                            icon={<VideoCameraOutlined />}
                                        >
                                            <NavLink to="/admin/films/films">
                                                Films
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item
                                            key="4"
                                            icon={<VideoCameraAddOutlined />}
                                        >
                                            <NavLink to="/admin/films/addfilms">
                                                Add Film
                                            </NavLink>
                                        </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Content>
                                    <div
                                        className="site-layout-background"
                                        style={{
                                            padding: 24,
                                            minHeight: 360,
                                        }}
                                    >
                                        <Component {...prosRoute} />
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Fragment>
                );
            }}
        />
    );
};
