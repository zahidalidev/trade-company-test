import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import NotificationIcon from "components/icons/NotificationIcon";
import MessageIcon from "components/icons/MessageIcon";
import DownArrowIcon from "components/icons/DownArrowIcon";
import { RiFilter2Line } from "react-icons/ri";

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
  Modal,
  Button,
  Typography,
  Divider,
  Flex,
} from "antd";

const { Text } = Typography;

import { UserOutlined } from "@ant-design/icons";

import BubbleView from "components/BubbleView/BubbleView";
import { fetchAllCompanies } from "api/company";
import { createLinks } from "utils/helpers";
import { UPDATE_COMPANIES } from "store/companies";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const App = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["hall"]);

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key]);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
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

    topHeadings: {
      color: "var(--Cool-Dark-1, #24292E)",
      fontFamily: "Barlow",
      fontSize: "14px",
      fontWeight: 500,
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
      display: "flex",
      justifyContent: "flex-end",
    },

    icon: {
      fontSize: "18px",
      marginRight: "0px",
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

    CompaniesPeopleCount: {
      display: "inline-block",
      height: "auto",
      width: "auto",
      background: "#F2F5FA",
      borderRadius: "5px",
      textAlign: "center",
      lineHeight: "18px",
      fontSize: "12px",
      color: "#24292E",
      marginLeft: "6px",
      paddingRight: "6px",
      paddingLeft: "6px",
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

  const filterCount = 7;

  // const Navbar = () => {
  //   const menu = (
  //     <Menu>
  //       <Menu.Item key="profile">Profile</Menu.Item>
  //       <Menu.Item key="logout">Logout</Menu.Item>
  //     </Menu>
  //   );

  //   return (
  //     <Header style={styles.header}>
  //       <Row justify="space-between" align="middle">
  //         <Col span={8} style={styles.logo}>
  //           <span style={styles.logoText}>LOGO</span>
  //           <Input.Search placeholder="Search" style={styles.search} />
  //         </Col>
  //         <Col span={8} style={styles.rightContent}>
  //           {/* <BellOutlined style={styles.icon} />
  //           <MessageOutlined style={styles.icon} /> */}
  //           <NotificationIcon style={styles.icon}/>
  //           <MessageIcon style={styles.icon}/>
  //           <Dropdown overlay={menu}>
  //             <a
  //               className="ant-dropdown-link"
  //               onClick={(e) => e.preventDefault()}
  //             >
  //               <Avatar size="medium" icon={<UserOutlined />} />
  //               <span style={styles.profileName}>Aladdinb2b LLC</span>{" "}
  //               <DownOutlined />
  //             </a>
  //           </Dropdown>
  //         </Col>
  //       </Row>
  //     </Header>
  //   );
  // };

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
          <Col span={6} style={styles.logo}>
            <span style={styles.logoText}>LOGO</span>
            <Input.Search placeholder="Search" style={styles.search} />
          </Col>
          <Col span={10} style={styles.rightContent}>
            <Row justify="end" gutter={16}>
              <Col>
                <NotificationIcon style={styles.icon} />
              </Col>
              <Col>
                <MessageIcon style={styles.icon} />
              </Col>
              <Col>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar size="medium" icon={<UserOutlined />} />
                    <span style={styles.profileName}>Aladdinb2b LLC</span>{" "}
                    <DownArrowIcon style={styles.icon} />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );
  };

  return (
    <Router>
      <Layout style={styles.container}>
        <Navbar />
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
                  <Text strong style={styles.topHeadings}>
                    Hall
                  </Text>
                </span>
              </Menu.Item>
              <Menu.Item
                key="matches"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                <Text style={styles.topHeadings}>Matches</Text>
              </Menu.Item>
              <Menu.Item
                key="meeting"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                <Text style={styles.topHeadings}>Meetings</Text>
              </Menu.Item>
              <Menu.Item
                key="tradehub"
                style={{ background: "#F0F0F0", paddingRight: "10px" }}
              >
                <Text style={styles.topHeadings}>Trade Hub</Text>
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
              <div style={styles.filterContainer} onClick={showModal}>
                <RiFilter2Line style={styles.filterIcon} />
                <span style={styles.filterText}>Filter</span>
                {filterCount > 0 && (
                  <span style={styles.filterCount}>{filterCount}</span>
                )}
              </div>
            </Col>

            <Divider style={{ marginTop: "0" }} />

            <Col style={{ paddingLeft: "20px" }}>
              <Flex gap="large">
                <Col style={{ borderBottom: "1px solid #FF681A" }}>
                  <Text style={styles.topHeadings}>
                    Companies
                    <span style={styles.CompaniesPeopleCount}>1408</span>
                  </Text>
                </Col>
                <Col>
                  <Text style={styles.topHeadings}>
                    People
                    <span style={styles.CompaniesPeopleCount}>150</span>
                  </Text>
                </Col>
              </Flex>
            </Col>

            <Divider style={{ marginBottom: "0" }} />

            <Modal
              title="Filter Options"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
              width="70%"
              style={{ top: "180px", right: "200px" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {Array.from(Array(10).keys()).map((index) => (
                  <Col key={index} style={{ flexBasis: "20%", padding: "8px" }}>
                    <CustomSelect
                      placeholder="User Type"
                      onChange={handleChange}
                      options={[
                        { value: "host", label: "Host" },
                        { value: "company", label: "Company" },
                        { value: "guest", label: "Guest" },
                      ]}
                    />
                  </Col>
                ))}

                <Row justify="end" style={{ width: "100%" }}>
                  <Space wrap>
                    <Button
                      type="text"
                      style={{
                        padding: "9px 30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Text>Clear all</Text>
                    </Button>
                    <Button
                      style={{
                        background: "#FF681A",
                        color: "#fff",
                        padding: "9px 30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "#fff" }} strong>
                        Apply
                      </Text>
                    </Button>
                  </Space>
                </Row>
              </div>
            </Modal>
          </Row>

          <Routes>
            <Route exact path="/" element={<BubbleView />} />
          </Routes>
        </Content>

        <Footer style={styles.footer}>
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
  )
};

const CustomSelect = ({ placeholder, onChange, options }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (values) => {
    setSelectedValues(values);
    onChange(values);
  };

  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder={placeholder}
        value={selectedValues}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value} label={option.label}>
            <Space>{option.label}</Space>
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default App;



