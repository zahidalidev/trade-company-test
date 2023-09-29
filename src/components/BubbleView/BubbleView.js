// BubbleView.js
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './BubbleView.css'
import { updatedCompaniesList } from 'utils/constants'

const BubbleView = () => {
  const svgRef = useRef()
  const width = window.innerWidth
  const height = window.innerHeight

  useEffect(() => {
    const svg = d3.select(svgRef.current)

    // Create D3 simulation with forces
    const simulation = d3
      .forceSimulation(updatedCompaniesList.result.data)
      .force('charge', d3.forceManyBody().strength(-250))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1))
      .force(
        'link',
        d3
          .forceLink(updatedCompaniesList.links)
          .id((d) => d._id)
          .distance(linkDistance)
      )

    function linkDistance() {
      // Generate a random distance between 100 and 300
      return Math.floor(Math.random() * (700))
    }
    // Create links
    const link = svg
      .selectAll('.link')
      .data(updatedCompaniesList.links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', 'gray')
      .style('stroke-width', 0.5)

    // Create nodes (circles) with text for company names
    const nodes = svg
      .selectAll('.node')
      .data(updatedCompaniesList.result.data)
      .enter()
      .append('g')
      .attr('class', 'node')

    nodes.append('circle').attr('r', 30).attr('fill', '#3498db')

    nodes
      .append('text')
      .text((d) => d.name) // Set the text of the node to the company name
      .attr('text-anchor', 'middle') // Center the text horizontally in the node
      .attr('dy', 4) // Adjust the vertical position of the text inside the node
      .style('font-size', '8px')

    // Update positions of links and nodes in the simulation
    simulation.on('tick', () => {
      // Update positions of nodes in a continuous loop horizontally
      nodes.attr('transform', (d) => `translate(${(d.x = (d.x + width + 2) % (width + 4))},${d.y})`)

      // Update positions of links
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)
    })

    // Clean up the simulation on unmount
    return () => {
      simulation.stop()
    }
  }, []) // Empty dependency array means this effect runs once after the initial render

  // Use setInterval to keep updating the simulation
  useEffect(() => {
    const interval = setInterval(() => {
      d3.select(svgRef.current)
        .selectAll('.node')
        .attr('transform', (d) => `translate(${(d.x = (d.x + width + 2) % (width + 4))},${d.y})`)

      d3.select(svgRef.current)
        .selectAll('.link')
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)
    }, 30) // Adjust the interval duration for the desired speed of movement

    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, []) // Empty dependency array means this effect runs once after the initial render

  return <svg className='bubble-view' width='100%' height='100%' ref={svgRef}></svg>
}

export default BubbleView
