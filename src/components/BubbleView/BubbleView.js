// BubbleView.js
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './BubbleView.css'
import { useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'

const BubbleView = () => {
  const updatedCompanies = useSelector((state) => state.companies)
  const updatedCompaniesList = cloneDeep(updatedCompanies)

  const svgRef = useRef()
  const width = window.innerWidth
  const height = window.innerHeight

  useEffect(() => {

    if (updatedCompaniesList.success) {
      const svg = d3.select(svgRef.current)

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
        return Math.floor(Math.random() * 700)
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

      const nodes = svg
        .selectAll('.node')
        .data(updatedCompaniesList.result.data)
        .enter()
        .append('g')
        .attr('class', 'node')

      nodes.append('circle').attr('r', 30).attr('fill', '#3498db')

      nodes
        .append('text')
        .text((d) => d.name)
        .attr('text-anchor', 'middle')
        .attr('dy', 4) 
        .style('font-size', '8px')

      simulation.on('tick', () => {
        nodes.attr(
          'transform',
          (d) => `translate(${(d.x = (d.x + width + 2) % (width + 4))},${d.y})`
        )

        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y)
      })

      return () => {
        simulation.stop()
      }
    }
  }, [updatedCompaniesList]) 

  useEffect(() => {
    if (updatedCompaniesList.success) {
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
      }, 30) 

      return () => clearInterval(interval)
    }
  }, [updatedCompaniesList]) 

  return (
    updatedCompaniesList.success && (
      <svg className='bubble-view' width='100%' height='100%' ref={svgRef}></svg>
    )
  )
}

export default BubbleView
