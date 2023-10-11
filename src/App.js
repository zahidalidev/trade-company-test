import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { RiFilter2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

import {
  Layout,
  Input,
  Row,
  Col,
  Avatar,
  Dropdown,
  Menu,
  Select,
  Space,
} from "antd";

import {
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

import BubbleView from "components/BubbleView/BubbleView";
import { fetchAllCompanies } from "api/company";
import { createLinks } from "utils/helpers";
import { UPDATE_COMPANIES } from "store/companies";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const App = () => {
  const dispatch = useDispatch();
  const [selectedKeys, setSelectedKeys] = useState(["hall"]);

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key]);
  };

  const getAllCompanies = async () => {
    try {
      const response = await fetchAllCompanies();
      console.log(response);
      const updatedData = createLinks(response);
      dispatch(UPDATE_COMPANIES(updatedData));
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  const styles = {
    container: {
      padding: "0px 40px 0px 40px",
      background: "#F0F0F0",
    },

    header: {
      background: "#F0F0F0",
      padding: "10px 0px",
    },

    logo: {
      display: "flex",
      alignItems: "center",
    },

    logoText: {
      marginRight: "10px",
      color: "#808080",
    },

    search: {
      width: "300px",
      marginRight: "10px",
    },

    rightContent: {
      textAlign: "right",
    },

    icon: {
      fontSize: "18px",
      marginRight: "20px",
    },

    profileLink: {
      color: "#808080",
    },

    profileName: {
      marginLeft: "8px",
      color: "#808080",
    },

    menuRow: {
      padding: "0 0 10px 0",
      background: "#F0F0F0",
    },

    menu: {
      borderBottomColor: "#ff7c16",
    },

    menuItem: {
      fontWeight: "bold",
      color: "#000",
      background: "#F0F0F0",
      padding: "0px",
    },

    menuItemText: {
      borderBottom: "2px solid #FF681A",
      paddingBottom: "16px",
    },

    content: {
      background: "#fff",
      borderRadius: "5px",
    },

    searchCol: {
      display: "flex",
      alignItems: "center",
    },

    searchInput: {
      width: "300px",
      padding: "20px",
    },

    filterCol: {
      display: "flex",
      alignItems: "center",
    },

    filterContainer: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #CED6E0",
      borderRadius: "5px",
      padding: "4px",
    },

    filterIcon: {
      fontSize: "18px",
      paddingRight: "5px",
    },

    filterText: {
      marginRight: "5px",
    },

    filterCount: {
      display: "inline-block",
      height: "18px",
      width: "18px",
      background: "#F2F5FA",
      borderTopRightRadius: "5px",
      borderBottomLeftRadius: "5px",
      textAlign: "center",
      lineHeight: "18px",
      fontSize: "12px",
      color: "#24292E",
    },

    footer: {
      textAlign: "center",
      background: "#f0f0f0",
      padding: "20px 0 20px 0",
    },

    footerText: {
      color: "#A0A0A0",
      paddingRight: "20px",
    },
  };

  const filterCount = 7; // Update this based on the actual filter count

  const Navbar = () => {
    const menu = (
      <Menu>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    );

    return (
      <Header style={styles.header}>
        <Row justify="space-between" align="middle">
          <Col span={8} style={styles.logo}>
            <span style={styles.logoText}>LOGO</span>
            <Input.Search placeholder="Search" style={styles.search} />
          </Col>
          <Col span={8} style={styles.rightContent}>
            <BellOutlined style={styles.icon} />
            <MessageOutlined style={styles.icon} />
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar size="medium" icon={<UserOutlined />} />
                <span style={styles.profileName}>Aladdinb2b LLC</span>{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  };

  return (
    <Router>
      <Layout style={styles.container}>
        <Navbar />
        {/* <Row justify="start" style={styles.menuRow}>
          <Col>
            <Menu
              mode="horizontal"
              selectedKeys={selectedKeys}
              onClick={handleMenuClick}
              style={styles.menu}
            >
              <Menu.Item key="hall" style={styles.menuItem}>
                <span style={styles.menuItemText}>Hall</span>
              </Menu.Item>
              <Menu.Item key="matches" style={styles.menuItem}>
                Matches
              </Menu.Item>
              <Menu.Item key="meeting" style={styles.menuItem}>
                Meeting
              </Menu.Item>
              <Menu.Item key="tradehub" style={styles.menuItem}>
                Trade Hub
              </Menu.Item>
              <Menu.Item key="pipeline" style={styles.menuItem}>
                Pipeline
              </Menu.Item>
            </Menu>
          </Col>
        </Row> */}

        <Row justify="start" style={styles.menuRow}>
          <Col>
            <Menu
              mode="horizontal"
              selectedKeys={selectedKeys}
              onClick={handleMenuClick}
              style={{
                borderBottomColor: "#ff7c16",
              }}
            >
              <Menu.Item
                key="hall"
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  background: "#F0F0F0",
                  padding: "0px",
                }}
              >
                <span
                  style={{
                    borderBottom: "2px solid #FF681A",
                    paddingBottom: "16px",
                  }}
                >
                  Hall
                </span>
              </Menu.Item>
              <Menu.Item
                key="matches"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                Matches
              </Menu.Item>
              <Menu.Item
                key="meeting"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                Meeting
              </Menu.Item>
              <Menu.Item
                key="tradehub"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                Trade Hub
              </Menu.Item>
              <Menu.Item
                key="pipeline"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                Pipeline
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

        <Content style={styles.content}>
          <Row justify="start" align="middle">
            <Col style={styles.searchCol}>
              <Input.Search placeholder="Search" style={styles.searchInput} />
            </Col>

            <Col style={styles.filterCol}>
              <div style={styles.filterContainer}>
                <RiFilter2Line style={styles.filterIcon} />
                <span style={styles.filterText}>Filter</span>
                {filterCount > 0 && (
                  <span style={styles.filterCount}>{filterCount}</span>
                )}
              </div>
            </Col>
          </Row>

          <Routes>
            <Route exact path="/" element={<BubbleView />} />
          </Routes>
        </Content>
        <Footer style={styles.footer}>
          {/* <Row justify="start">
            <Col>
              <span style={styles.footerText}>
                Copy Right © Aladdinb2b - Connection Businesses
              </span>
            </Col>
            <Col>
              <span style={styles.footerText}>Terms of Use</span>
            </Col>
            <Col>
              <span style={styles.footerText}>Privacy Policy</span>
            </Col>
          </Row> */}
          <Row justify="start">
            <Col>
              <span style={{ color: "#A0A0A0", paddingRight: "20px" }}>
                Copy Right © Aladdinb2b - Connection Businesses
              </span>
            </Col>
            <Col>
              <span style={{ fontWeight: "bold", paddingRight: "20px" }}>
                Terms of Use
              </span>
            </Col>
            <Col>
              <span style={{ fontWeight: "bold", paddingRight: "20px" }}>
                Privacy Policy
              </span>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
