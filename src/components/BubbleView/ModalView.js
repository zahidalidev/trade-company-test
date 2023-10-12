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
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px",
    },
    fontWeight400: {
      fontWeight: 400,
    },
    fontWeight500: {
      fontWeight: 500,
    },
    fontWeight600: {
      fontWeight: 600,
    },
    marginTop10: {
      marginTop: "10px",
    },
    marginTop18: {
      marginTop: "18px",
    },
    colorFF681A: {
      color: "#FF681A",
    },
    color24292E: {
      color: "#24292E",
    },
    color24292ED9: {
      color: "#24292ED9",
    },
    buttonBlock: {
      width: "100%",
      fontSize: "14px",
    },
    mainTitle: {
      color: "var(--Cool-Dark-1, #000)",
      textAlign: "start",
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      marginTop: "10px",
    },

    textAlignStart: {
      textAlign: "start",
    },

    textAlignCenter: {
      textAlign: "center",
    },
    secondaryTitle: {
      fontFamily: "Barlow",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    requestButton: { background: "#FF681A", color: "#fff", border: "0px" },

    profile3: { margin: "0px -50px" },
    profile1: { margin: "0px -100px" },
  };

  return (
    <Modal
      visible={selectedBubbleIndex !== null}
      onCancel={() => setSelectedBubbleIndex(null)}
      footer={null}
      centered
      className="newStyle"
    >
      <div style={styles.container}>
        <Image
          src={selectedBubbleIndex?.logo || "/icons/company_logo.svg"}
          alt="Company Logo"
          width={100}
          height={100}
          preview={false}
          fallback="/icons/company_logo.svg"
          borderRadius="50px"
        />
        <Text style={styles.mainTitle}>{selectedBubbleIndex?.name}</Text>
        <Text
          style={{
            ...styles.secondaryTitle,
            ...styles.marginTop10,
            ...styles.textAlignCenter,
            ...styles.color24292E,
          }}
        >
          {selectedBubbleIndex?.country ?? "United Arab Emirates, Dubai"}
        </Text>
        <Text
          style={{
            ...styles.secondaryTitle,
            ...styles.marginTop18,
            ...styles.textAlignCenter,
            ...styles.color24292E,
          }}
        >
          {selectedBubbleIndex?.brief?.split(" ")?.slice(0, 10)?.join(" ")}
        </Text>
        <Flex gap={10}>
          <Text>
            <span style={styles.fontWeight600}>235</span> Connections |
          </Text>
          <Text>
            <span style={styles.fontWeight600}>35</span> Pipeline |{" "}
          </Text>
          <Text>
            <span style={styles.fontWeight600}>
              {selectedBubbleIndex.totalMeetings ?? 0}
            </span>{" "}
            Total Meetings
          </Text>
        </Flex>

        <Text style={styles.colorFF681A}>
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
                style={styles.profile3}
              />
            </div>
            <div style={{ position: "relative", zIndex: 3 }}>
              <Image
                src="/icons/pic1.svg"
                alt="pic 1"
                width={100}
                height={100}
                style={styles.profile1}
              />
            </div>
          </Flex>

          <Flex vertical="vertical">
            <Text style={styles.mainTitle}>Alexandra Maldonado</Text>
            <Text
              style={{
                ...styles.secondaryTitle,
                ...styles.marginTop18,
                ...styles.textAlignStart,
                ...styles.color24292E,
              }}
            >
              Chief Executive Officer
            </Text>
            <Text
              style={{
                ...styles.secondaryTitle,
                ...styles.marginTop10,
                ...styles.textAlignStart,
                ...styles.color24292E,
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
          <Button size="large" block style={styles.requestButton}>
            <Text strong style={{ color: "#fff" }}>
              Request Meeting
            </Text>
          </Button>
          <Button size="large" block>
            <Text strong style={styles.color24292ED9}>
              Request for Quotation
            </Text>
          </Button>

          <Button size="large" block>
            <Text strong style={styles.color24292ED9}>
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
                  ...styles.color24292ED9,
                  ...styles.fontWeight500,
                  paddingLeft: "12px",
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
