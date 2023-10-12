import React from "react";
import {
  Modal,
  Typography,
  Image,
  Flex,
  Button,
  Avatar,
  Space,
  Layout,
} from "antd";

const { Text } = Typography;
const { Footer } = Layout;
import WishIcon from "../icons/WishIcon";
import "./ModalView.css";
import "./BubbleView.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ModalView = ({ selectedBubbleIndex, setSelectedBubbleIndex }) => {
  return (
    <Modal
      visible={selectedBubbleIndex !== null}
      onCancel={() => setSelectedBubbleIndex(null)}
      footer={null}
      centered
      className="newStyle"
    >
      <div className="container">
        <Image
          src={selectedBubbleIndex?.logo || "/icons/company_logo.svg"}
          alt="Company Logo"
          width={100}
          height={100}
          preview={false}
          fallback="/icons/company_logo.svg"
          borderRadius="50px"
        />
        <Text className="mainTitle">{selectedBubbleIndex?.name}</Text>
        <Text className="secondaryTitle marginTop10 textAlignCenter color24292E">
          {selectedBubbleIndex?.country ?? "United Arab Emirates, Dubai"}
        </Text>
        <Text className="secondaryTitle marginTop18 textAlignCenter color24292E">
          {selectedBubbleIndex?.brief?.split(" ")?.slice(0, 10)?.join(" ")}
        </Text>
        <Flex gap={10}>
          <Text>
            <span className="fontWeight600">235</span> Connections |
          </Text>
          <Text>
            <span className="fontWeight600">35</span> Pipeline |{" "}
          </Text>
          <Text>
            <span className="fontWeight600">
              {selectedBubbleIndex.totalMeetings ?? 0}
            </span>{" "}
            Total Meetings
          </Text>
        </Flex>

        <Text className="colorFF681A">
          {selectedBubbleIndex.website ?? "Aladdib2b.com"}
        </Text>

        <Flex>
          <Flex style={{ width: "45%" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/icons/pic2.svg"
                alt="pic 2"
                width={100}
                height={100}
              />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <Image
                src="/icons/pic3.svg"
                alt="pic 3"
                width={100}
                height={100}
                className="profile3"
              />
            </div>
            <div style={{ position: "relative", zIndex: 3 }}>
              <Image
                src="/icons/pic1.svg"
                alt="pic 1"
                width={100}
                height={100}
                className="profile1"
              />
            </div>
          </Flex>

          <Flex vertical="vertical">
            <Text className="mainTitle">Alexandra Maldonado</Text>
            <Text className="secondaryTitle marginTop18 textAlignStart color24292E">
              Chief Executive Officer
            </Text>
            <Text className="secondaryTitle marginTop10 textAlignStart color24292E">
              Total 9 attendees
            </Text>
          </Flex>
        </Flex>
        <Space
          direction="vertical"
          style={{ width: "100%", paddingTop: "31px" }}
        >
          <Button size="large" block className="requestButton">
            <Text strong style={{ color: "#fff" }}>
              Request Meeting
            </Text>
          </Button>
          <Button size="large" block>
            <Text strong className="color24292ED9">
              Request for Quotation
            </Text>
          </Button>

          <Button size="large" block>
            <Text strong className="color24292ED9">
              View compay Profile
            </Text>
          </Button>
        </Space>
      </div>
      <Footer style={{ width: "100%", marginTop: "20px" }}>
        <Flex justify="space-between" align="center">
          <Button type="text">
            <FiChevronLeft />
          </Button>
          <Button size="large">
            <Flex justify="center" align="center">
              <WishIcon />
              <Text className="color24292ED9 fontWeight500 wishButton">
                Add to my Wish List
              </Text>
            </Flex>
          </Button>
          <Button type="text">
            <FiChevronRight />
          </Button>
        </Flex>
      </Footer>
    </Modal>
  );
};

export default ModalView;
