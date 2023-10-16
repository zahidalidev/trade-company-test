import React from "react";
import { Layout, Flex, Typography } from "antd";

import "./styles.css";

const { Footer: FooterLayout } = Layout;
const { Text } = Typography;

const FooterBar = () => (
  <FooterLayout className="footer">
    <Flex justify="start" wrap="wrap" gap={28}>
      <Text className="footer-copy-right">
        Copy Right © 2017 - 2022 Aladdinb2b - Connection Businesses
      </Text>
      <Text className="footer-text">Terms of Use</Text>
      <Text className="footer-text">Privacy Policy</Text>
    </Flex>
  </FooterLayout>
);

export default FooterBar;
