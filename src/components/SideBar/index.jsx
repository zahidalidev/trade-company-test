import React from "react";

import { Layout, Flex } from "antd";
const { Sider } = Layout;
import {
  DashboardIcon,
  AppsIcon,
  CalenderIcon,
  SettingIcon,
  QuestCircleIcon,
  RightChevronIcon,
  GraphIcon,
} from "../icons";

import "./styles.css";

const SideBar = () => {
  return (
    <Sider>
      <Flex
        vertical="vertical"
        justify="space-between"
        align="center"
        className="sidebar"
      >
        <Flex vertical="vertical" gap={31}>
          <Flex vertical="vertical" gap={31} className="sidebar-menu">
            <DashboardIcon />
          </Flex>

          <AppsIcon />
          <CalenderIcon />
          <GraphIcon />
          <SettingIcon />
        </Flex>

        <Flex vertical="vertical" gap={28}>
          <QuestCircleIcon />
          <RightChevronIcon />
        </Flex>
      </Flex>
    </Sider>
  );
};

export default SideBar;
