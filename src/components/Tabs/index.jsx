import { cloneDeep } from "lodash";
import { Divider, Flex, Input, Typography, Button, Space } from "antd";
import React, { useMemo, useState } from "react";
import { RiFilter2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import BubbleView from "components/BubbleView";
import { CLEAR_COTACTS, FILTER_COTACTS } from "store/contacts";
import { CLEAR_COMPANIES, FILTER_COMPANIES } from "store/companies";
import { searchCompanies } from "api/company";
import { searchContacts } from "api/contacts";
import { createLinks } from "utils/helpers";
import { companiesLogos, contactsLogos, filterOptions } from "utils/constants";
import FilterModal from "components/FilterModal";
import Spin from "components/Spin";

import { SearchIcon } from "../icons";
import "./styles.css";

const { Text } = Typography;

const Tabs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("companies");
  let [filters, setFilters] = useState(filterOptions);

  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  const contacts = useSelector((state) => state.contacts);
  const companiesList = cloneDeep(companies);
  const contactsList = cloneDeep(contacts);
  const data =
    activeTab === "companies" ? companiesList.data : contactsList.data;
  const links =
    activeTab === "companies" ? companiesList.links : contactsList.links;
  const logos = activeTab === "companies" ? companiesLogos : contactsLogos;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value, index) => {
    let copyFilters = [...filters];
    copyFilters[index].selectedValues = value;

    setFilters(copyFilters);
  };

  const handleFilter = () => {
    const filteredContacts = [];
    const filteredCompanies = [];
    for (let i = 0; i < contacts.allData.length; i++) {
      for (let j = 0; j < filters.length; j++) {
        if (
          filters[j].selectedValues.includes(
            contacts.allData[i][filters[j].name]
          )
        )
          filteredContacts.push(contacts.allData[i]);
      }
    }

    for (let i = 0; i < companies.allData.length; i++) {
      for (let j = 0; j < filters.length; j++) {
        if (
          filters[j].selectedValues.includes(
            companies.allData[i][filters[j].name]
          )
        )
          filteredCompanies.push(companies.allData[i]);
      }
    }

    const updatedContacts = createLinks(
      filteredContacts.length === 0 ? contacts.allData : filteredContacts
    );
    const updatedCompanies = createLinks(
      filteredCompanies.length === 0 ? companies.allData : filteredCompanies
    );

    dispatch(FILTER_COTACTS(updatedContacts));
    dispatch(FILTER_COMPANIES(updatedCompanies));
    setIsModalVisible(false);
  };

  const handleClear = () => {
    const copyFilters = filters.map((filter) => ({
      ...filter,
      selectedValues: [],
    }));

    setFilters(copyFilters);
    dispatch(CLEAR_COTACTS());
    dispatch(CLEAR_COMPANIES());
    setIsModalVisible(false);
  };

  const handleSearch = async (event) => {
    const value = event.target.value;

    if (activeTab === "companies" && (value.length > 2 || value.length === 0)) {
      const { result: companies } = await searchCompanies(value);

      console.log("result companies", companies);

      const companiesData = createLinks(companies.data);

      dispatch(FILTER_COMPANIES(companiesData));
    } else if (
      activeTab === "people" &&
      (value.length > 2 || value.length === 0)
    ) {
      const { result: contacts } = await searchContacts(value);

      console.log("result contacts", contacts);

      const contactsData = createLinks(contacts.data);

      dispatch(FILTER_COTACTS(contactsData));
    }
  };

  const filterLength = () => {
    let length = 0;
    filters.map((filter) => {
      length += filter.selectedValues.length ? 1 : 0;
    });

    return length;
  };

  return (
    <>
      <Flex vertical="vertical" className="search-fiter">
        <Flex align="center">
          <Input
            onChange={handleSearch}
            placeholder="Search"
            className="search-input"
            suffix={<SearchIcon />}
          />
          <Button onClick={showModal}>
            <Flex align="center">
              <RiFilter2Line
                className="filter-icon"
                style={{ color: "#93A3BB" }}
              />
              <Text strong>Filter</Text>
              <span className="filter-count">{filterLength()}</span>
            </Flex>
          </Button>
        </Flex>
        <Divider className="tab-divider-bottom" />
        <Flex gap="large" className="tabs-padding">
          <Flex className={activeTab === "companies" && "company-tab"}>
            <Text
              onClick={() => setActiveTab("companies")}
              className="top-headings"
            >
              Companies
              <Space className="companies-people-count">
                {companies.data.length}
              </Space>
            </Text>
          </Flex>
          <Flex className={activeTab === "people" && "company-tab"}>
            <Text
              onClick={() => setActiveTab("people")}
              className="top-headings"
            >
              People
              <Space className="companies-people-count">
                {contacts.data.length}
              </Space>
            </Text>
          </Flex>
        </Flex>
        <Divider className="tab-divider-bottom" />
        <FilterModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          handleChange={handleChange}
          filters={filters}
          handleFilter={handleFilter}
          handleClear={handleClear}
        />
        {useMemo(
          () =>
            companies.loading ? (
              <Spin />
            ) : (
              <BubbleView
                activeTab={activeTab}
                data={data}
                links={links}
                logos={logos}
              />
            ),
          [activeTab, data, links, logos]
        )}
      </Flex>
    </>
  );
};

export default Tabs;
