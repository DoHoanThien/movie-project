import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
    const [state, setState] = useState({
        tabPosition: "left",
    });

    const { tabPosition } = state;

    const changeTabPosition = (e) => {
        setState({ tabPosition: e.target.value });
    };

    return (
        <div className="container mx-auto">
            <Tabs tabPosition={tabPosition} onChange={changeTabPosition}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </div>
    );
}
