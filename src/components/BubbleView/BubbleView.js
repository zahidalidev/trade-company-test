import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import "./BubbleView.css";
import { useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import { Modal, Typography, Image, Flex, Button, Avatar, Space } from "antd";

const { Text, Title } = Typography;

const BubbleView = () => {
  const updatedCompanies = useSelector((state) => state.companies);
  const updatedCompaniesList = cloneDeep(updatedCompanies);

  useEffect(() => {
    console.log("updatedCompaniesList ----------->: ", updatedCompaniesList);
  }, [updatedCompaniesList]);

  const svgRef = useRef();
  const width = window.innerWidth;
  const height = Math.min(window.innerHeight, 0.5 * window.innerHeight);

  const [selectedBubbleIndex, setSelectedBubbleIndex] = useState(null);

  const handleBubbleClick = (index) => {
    console.log("INdex  : ", index);
    setSelectedBubbleIndex(index);
  };

  useEffect(() => {
    if (updatedCompaniesList.success) {
      const svg = d3.select(svgRef.current);

      const linkDistance = () => {
        return Math.floor(Math.random() * 700);
      };

      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      const simulation = d3
        .forceSimulation(updatedCompaniesList.result.data)
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.01))
        .force("y", d3.forceY(height / 2).strength(0.06))
        .force(
          "link",
          d3
            .forceLink(updatedCompaniesList.links)
            .id((d) => d._id)
            .distance(linkDistance)
        );

      const link = svg
        .selectAll(".link")
        .data(updatedCompaniesList.links)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "gray")
        .style("stroke-width", 0.5);

      const nodes = svg
        .selectAll(".node")
        .data(updatedCompaniesList.result.data)
        .enter()
        .append("g")
        .attr("class", "node")
        .on("click", (d, i) => handleBubbleClick(i));

      nodes
        .append("circle")
        .attr("r", 30)
        .attr("fill", (d, i) => colorScale(i));

      nodes
        .append("text")
        .text((d) => d.name)
        .attr("text-anchor", "middle")
        .attr("dy", 4)
        .style("font-size", "8px");

      simulation.on("tick", () => {
        nodes.attr(
          "transform",
          (d) => `translate(${(d.x = (d.x + width + 2) % (width + 4))},${d.y})`
        );

        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      });

      return () => {
        simulation.stop();
      };
    }
  }, [updatedCompaniesList]);

  useEffect(() => {
    if (updatedCompaniesList.success) {
      const interval = setInterval(() => {
        d3.select(svgRef.current)
          .selectAll(".node")
          .attr(
            "transform",
            (d) =>
              `translate(${(d.x = (d.x + width + 2) % (width + 4))},${d.y})`
          );

        d3.select(svgRef.current)
          .selectAll(".link")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [updatedCompaniesList, width]);

  return (
    <>
      {useMemo(
        () => (
          <svg
            className="bubble-view"
            width="100%"
            height="100%"
            ref={svgRef}
          ></svg>
        ),
        []
      )}
      {selectedBubbleIndex !== null && (
        <Modal
          visible={selectedBubbleIndex !== null}
          onCancel={() => setSelectedBubbleIndex(null)}
          footer={null}
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
                // fontFamily: 'Montserrat',
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
                // fontFamily: 'Montserrat',
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
                // fontFamily: 'Barlow',
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
                <Text>Alexandra Maldonado</Text>
                <Text>Chief Executive Officer</Text>
                <Text>Total 9 attendees</Text>
              </Flex>
            </Flex>
            <Space direction="vertical" style={{ width: "100%" }}>
              {/* <Flex gap="20px" vertical="vertical"> */}
              <Button
                size="large"
                block
                style={{ background: "#FF681A", color: "#fff" }}
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
              {/* </Flex> */}
            </Space>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BubbleView;
