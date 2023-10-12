import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import * as d3 from "d3";
import "./BubbleView.css";
import { useSelector } from "react-redux";
import { cloneDeep } from "lodash";

import ModalView from "./ModalView";

const BubbleView = ({ activeTab, data, links, logos }) => {
  const [selectedBubbleIndex, setSelectedBubbleIndex] = useState(null);

  const svgRef = useRef();

  const width = window.innerWidth;
  const height = Math.min(window.innerHeight, 0.5 * window.innerHeight);

  const handleBubbleClick = (index) => {
    setSelectedBubbleIndex(index);
  };
  useEffect(() => {
    if (data.length) {
      const svg = d3.select(svgRef.current);

      svg.selectAll(".node").remove();
      svg.selectAll(".link").remove();

      const linkDistance = () => {
        return Math.floor(Math.random() * 700);
      };

      const simulation = d3
        .forceSimulation(data)
        .force("charge", d3.forceManyBody().strength(-100))
        .force("center", d3.forceCenter(width / 0.4, height / 1.3))
        .force("x", d3.forceX(width / 2).strength())
        .force("y", d3.forceY(height / 2).strength(0.06))
        .force(
          "link",
          d3
            .forceLink(links)
            .id((d) => d._id)
            .distance(linkDistance)
        );

      const link = svg
        .selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "gray")
        .style("stroke-width", 0.5);

      const clipPathId = "clip-path-circle";

      svg
        .append("defs")
        .append("clipPath")
        .attr("id", clipPathId)
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 20);

      const nodes = svg
        .selectAll(".node")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "node")
        .on("click", (d, i) => handleBubbleClick(i));

      const getRandomLogo = () => {
        return logos[Math.floor(Math.random() * logos.length)];
      };

      nodes
        .append("image")
        .attr("xlink:href", (d) => (d.logo ? d.logo : getRandomLogo()))
        .attr(
          "x",
          (d) =>
            -Math.min(
              20,
              activeTab === "companies"
                ? d.name.length * 2
                : d.firstname.length * 2
            )
        )
        .attr("y", -20)
        .attr("width", (d) =>
          Math.min(
            40,
            activeTab === "companies"
              ? d.name.length * 4
              : d.firstname.length * 4
          )
        )
        .attr("height", 40)
        .attr("clip-path", `url(#${clipPathId})`);

      nodes
        .append("text")
        .text((d) => {
          const name = activeTab === "companies" ? d.name : d.firstname;
          if (name.length > 10) {
            return name.substring(0, 10).toUpperCase() + "...";
          }
          return name.toUpperCase();
        })
        .attr("text-anchor", "middle")
        .attr("dy", 4)
        .style("font-size", "8px")
        .style("font-weight", "bold")
        .call(wrap, 60);

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
  }, [data, links, activeTab]);

  const wrap = useCallback(
    (text, width) => {
      text.each(function () {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1;
        const y = text.attr("y");
        const dy = parseFloat(text.attr("dy"));
        let tspan = text
          .text(null)
          .append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", dy + "em");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    },
    [data, links, activeTab]
  );

  useEffect(() => {
    if (data.length) {
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
  }, [data, links, width, activeTab]);

  return (
    <>
      <svg className="bubble-view" width="100%" height="100%" ref={svgRef} />
      {selectedBubbleIndex !== null && (
        <ModalView
          selectedBubbleIndex={selectedBubbleIndex}
          setSelectedBubbleIndex={setSelectedBubbleIndex}
        />
      )}
    </>
  );
};

export default BubbleView;
