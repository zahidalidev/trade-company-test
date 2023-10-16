import { BrowserRouter as Router } from "react-router-dom";

import { Layout, Space, Flex } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { createLinks } from "utils/helpers";
import FooterBar from "components/FooterBar";
import { fetchAllCompanies } from "api/company";
import { fetchAllContacts } from "api/contacts";
import MenuBar from "components/MenuBar";
import Navbar from "components/Navbar";
import SideBar from "components/SideBar";
import Tabs from "components/Tabs";
import { UPDATE_COMPANIES } from "store/companies";
import { UPDATE_COTACTS } from "store/contacts";

import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();

  const getCompaniesAndContact = async () => {
    try {
      const { result: companies } = await fetchAllCompanies();
      const { result: contacts } = await fetchAllContacts();

      const companiesData = createLinks(companies.data);
      const contactsData = createLinks(contacts.data);

      dispatch(UPDATE_COMPANIES(companiesData));
      dispatch(UPDATE_COTACTS(contactsData));
    } catch (error) {}
  };

  useEffect(() => {
    getCompaniesAndContact();
  }, []);

  return (
    <Router>
      {/* <Layout className='app-container'>
        <Navbar />
        <MenuBar />
        <Content className='app-content'>
          <Tabs />
        </Content>
        <Footer />
      </Layout> */}
      {/* <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}> */}
      <Layout>
        <SideBar />
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <MenuBar />
          <Content
            className=""
            style={{
              background: "#ECF0F4",
              height: "60vh",
            }}
          >
            <Tabs />
          </Content>
          <Footer style={{ background: "#ECF0F4" }}>
            <FooterBar />
          </Footer>
        </Layout>
      </Layout>
      {/* </Space> */}
    </Router>
  );
};

export default App;
