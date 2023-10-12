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

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ModalView = ({ selectedBubbleIndex, setSelectedBubbleIndex }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    textCenter: {
      textAlign: "center",
    },
    fontWeight600: {
      fontWeight: 600,
    },
    marginTop10: {
      marginTop: "10px",
    },
    colorFF681A: {
      color: "#FF681A",
    },
    buttonBlock: {
      width: "100%",
      fontSize: "14px",
    },

    // Add more styles as needed
  };

  return (
    <Modal
      visible={selectedBubbleIndex !== null}
      onCancel={() => setSelectedBubbleIndex(null)}
      footer={null}
      centered
      padding={0}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={selectedBubbleIndex?.logo || "/icons/company_logo.svg"}
          alt="Company Logo"
          width={100}
          height={100}
          preview={false}
          fallback="/icons/company_logo.svg"
          borderRadius="50px"
        />
        <Text
          style={{
            color: "var(--Cool-Dark-1, #24292E)",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            marginTop: "10px",
          }}
        >
          {selectedBubbleIndex?.name}
        </Text>
        <Text
          style={{
            color: "--Cool-Dark-3, rgba(36, 41, 46, 0.60))",
            textAlign: "center",
            fontFamily: "Barlow",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "18px",
            marginTop: "10px",
          }}
        >
          {selectedBubbleIndex?.country ?? "United Arab Emirates, Dubai"}
        </Text>
        <Text
          style={{
            color: "var(--Cool-Dark-2, rgba(36, 41, 46, 0.85))",
            textAlign: "center",
            fontFamily: "Barlow",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "18px",
            marginTop: "18px",
          }}
        >
          {selectedBubbleIndex?.brief?.split(" ")?.slice(0, 10)?.join(" ")}
        </Text>
        <Flex gap={10}>
          <Text>
            <span style={{ fontWeight: 600 }}>235</span> Connections |
          </Text>
          <Text>
            <span style={{ fontWeight: 600 }}>35</span> Pipeline |{" "}
          </Text>
          <Text>
            <span style={{ fontWeight: 600 }}>
              {selectedBubbleIndex.totalMeetings ?? 0}
            </span>{" "}
            Total Meetings
          </Text>
        </Flex>

        <Text style={{ color: "#FF681A" }}>
          {selectedBubbleIndex.website ?? "Aladdib2b.com"}
        </Text>

        <Flex>
          <Flex align="center">
            <Avatar></Avatar> <Avatar></Avatar> <Avatar></Avatar>
          </Flex>
          <Flex vertical="vertical">
            <Text
              style={{
                color: "var(--Cool-Dark-1, #000)",
                textAlign: "start",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                marginTop: "10px",
              }}
            >
              Alexandra Maldonado
            </Text>
            <Text
              style={{
                color: "var(--Cool-Dark-1, #24292E)",
                textAlign: "start",
                fontFamily: "Barlow",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginTop: "10px",
              }}
            >
              Chief Executive Officer
            </Text>
            <Text
              style={{
                color: "var(--Cool-Dark-1, #24292E)",
                textAlign: "start",
                fontFamily: "Barlow",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginTop: "10px",
              }}
            >
              Total 9 attendees
            </Text>
          </Flex>
        </Flex>
        <Space
          direction="vertical"
          style={{ width: "100%", paddingTop: "31px" }}
        >
          <Button
            size="large"
            block
            style={{ background: "#FF681A", color: "#fff", border: "0px" }}
          >
            <Text strong style={{ color: "#fff" }}>
              Request Meeting
            </Text>
          </Button>
          <Button size="large" block>
            <Text strong style={{ color: "#24292ED9" }}>
              Request for Quotation
            </Text>
          </Button>

          <Button size="large" block>
            <Text strong style={{ color: "#24292ED9" }}>
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
              <Text
                style={{
                  color: "#24292ED9",
                  paddingLeft: "12px",
                  fontWeight: "500",
                  fontFamily: "Barlow",
                }}
              >
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

// import React from "react";
// import {
//   Modal,
//   Typography,
//   Image,
//   Flex,
//   Button,
//   Avatar,
//   Space,
//   Layout,
// } from "antd";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import WishIcon from "../icons/WishIcon";

// const { Text } = Typography;
// const { Footer } = Layout;

// const ModalView = ({ selectedBubbleIndex, setSelectedBubbleIndex }) => {
//   const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     textCenter: {
//       textAlign: "center",
//     },
//     fontWeight600: {
//       fontWeight: 600,
//     },
//     marginTop10: {
//       marginTop: "10px",
//     },
//     colorFF681A: {
//       color: "#FF681A",
//     },
//     buttonBlock: {
//       width: "100%",
//       fontSize: "14px",
//     },
//     // Add more styles as needed
//   };

//   return (
//     <Modal
//       visible={selectedBubbleIndex !== null}
//       onCancel={() => setSelectedBubbleIndex(null)}
//       footer={null}
//       centered
//     >
//       <div style={styles.container}>
//         <Image
//           src={selectedBubbleIndex?.logo || "/icons/company_logo.svg"}
//           alt="Company Logo"
//           width={100}
//           height={100}
//           preview={false}
//           fallback="/icons/company_logo.svg"
//           borderRadius="50px"
//         />
//         <Text style={{ ...styles.textCenter, ...styles.fontWeight600, ...styles.marginTop10, fontFamily: "Montserrat" }}>
//           {selectedBubbleIndex?.name}
//         </Text>
//         <Text style={{ ...styles.textCenter, color: "rgba(36, 41, 46, 0.60)", ...styles.marginTop10, fontFamily: "Barlow" }}>
//           {selectedBubbleIndex?.country ?? "United Arab Emirates, Dubai"}
//         </Text>
//         <Text style={{ ...styles.textCenter, color: "rgba(36, 41, 46, 0.85)", ...styles.marginTop18, fontFamily: "Barlow" }}>
//           {selectedBubbleIndex?.brief?.split(" ")?.slice(0, 10)?.join(" ")}
//         </Text>
//         <Flex gap={10}>
//           <Text style={styles.fontWeight600}>
//             <span>235</span> Connections |
//           </Text>
//           <Text style={styles.fontWeight600}>
//             <span>35</span> Pipeline |
//           </Text>
//           <Text style={styles.fontWeight600}>
//             {selectedBubbleIndex.totalMeetings ?? 0} Total Meetings
//           </Text>
//         </Flex>

//         <Text style={{ ...styles.colorFF681A, fontFamily: "Barlow" }}>
//           {selectedBubbleIndex.website ?? "Aladdib2b.com"}
//         </Text>

//         <Flex>
//           <Flex align="center">
//             <Avatar></Avatar> <Avatar></Avatar> <Avatar></Avatar>
//           </Flex>
//           <Flex vertical="vertical">
//             <Text style={{ ...styles.textCenter, ...styles.fontWeight600, ...styles.marginTop10, fontFamily: "Montserrat" }}>
//               Alexandra Maldonado
//             </Text>
//             <Text style={{ ...styles.textCenter, ...styles.marginTop10, fontFamily: "Barlow" }}>
//               Chief Executive Officer
//             </Text>
//             <Text style={{ ...styles.textCenter, ...styles.marginTop10, fontFamily: "Barlow" }}>
//               Total 9 attendees
//             </Text>
//           </Flex>
//         </Flex>
//         <Space direction="vertical" style={{ width: "100%", paddingTop: "31px" }}>
//           <Button style={{ ...styles.buttonBlock, background: "#FF681A", color: "#fff", border: "0px", fontFamily: "Montserrat" }}>
//             <Text strong>Request Meeting</Text>
//           </Button>
//           <Button style={{ ...styles.buttonBlock, fontFamily: "Barlow" }}>
//             <Text strong style={{ color: "#24292ED9" }}>Request for Quotation</Text>
//           </Button>
//           <Button style={{ ...styles.buttonBlock, fontFamily: "Barlow" }}>
//             <Text strong style={{ color: "#24292ED9" }}>View Company Profile</Text>
//           </Button>
//         </Space>
//       </div>
//       <Footer style={{ width: "100%", marginTop: "20px" }}>
//         <Flex justify="space-between" align="center">
//           <Button type="text">
//             <FiChevronLeft />
//           </Button>
//           <Button size="large">
//             <Flex justify="center" align="center">
//               <WishIcon />
//               <Text style={{ color: "#24292ED9", paddingLeft: "12px", fontWeight: "500", fontFamily: "Barlow" }}>
//                 Add to my Wish List
//               </Text>
//             </Flex>
//           </Button>
//           <Button type="text">
//             <FiChevronRight />
//           </Button>
//         </Flex>
//       </Footer>
//     </Modal>
//   );
// };

// export default ModalView;
