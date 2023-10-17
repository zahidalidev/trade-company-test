import * as d3 from 'd3'
import React, { useEffect, useRef, useState } from 'react'
import { getNameLength } from 'utils/helpers'

import ModalView from '../ModalView'

import './styles.css'

const BubbleView = ({ activeTab, data, links, logos }) => {
  const [selectedBubbleIndex, setSelectedBubbleIndex] = useState(null)

  const svgRef = useRef()
  const width = window.innerWidth
  const height = Math.min(window.innerHeight, 0.25 * window.innerHeight)

  useEffect(() => {
    const svg = d3.select(svgRef.current)

    svg.selectAll('.node').remove()
    svg.selectAll('.link').remove()

    const linkDistance = () => Math.floor(Math.random() * 700)

    const simulation = d3
      .forceSimulation(data)
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 1.2))
      .force('x', d3.forceX().strength(0.03))
      .force('y', d3.forceY().strength(0.09))
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d._id)
          .distance(linkDistance)
      )
      .alphaTarget(2)
      .alphaDecay(1)
      .velocityDecay(0.8)

    const link = svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', 'gray')
      .style('stroke-width', 0.5)

    const clipPathId = 'clip-path-circle'

    svg
      .append('defs')
      .append('clipPath')
      .attr('id', clipPathId)
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 20)

    const nodes = svg
      .selectAll('.node')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (d, i) => setSelectedBubbleIndex(i))

    const getRandomLogo = () => logos[Math.floor(Math.random() * logos.length)]

    nodes
      .append('image')
      .attr('xlink:href', (d) => (d.logo ? d.logo : getRandomLogo()))
      .attr(
        'x',
        (d) =>
          -Math.min(
            20,
            activeTab === 'companies' ? getNameLength(d.name) * 2 : getNameLength(d.firstname) * 2
          )
      )
      .attr('y', -20)
      .attr('width', (d) =>
        Math.min(
          40,
          activeTab === 'companies' ? getNameLength(d.name) * 4 : getNameLength(d.firstname) * 4
        )
      )
      .attr('height', 40)
      .attr('clip-path', `url(#${clipPathId})`)

    nodes
      .append('text')
      .text((d) => {
        const name = activeTab === 'companies' ? d.name : d.firstname
        if (name.length > 10) return name.substring(0, 7).toUpperCase() + '...'

        return name.toUpperCase()
      })
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .style('font-size', '8px')
      .style('font-weight', 'bold')
      .call(wrap, 60)

    const moveBubbles = () => {
      nodes.attr('transform', (d, i) => {
        const speed = 2 * (i % 2 === 0 ? 1 : -1)
        d.x += speed

        if (d.x < -30) d.x = width + 30
        else if (d.x > width + 30) d.x = -30

        return `translate(${d.x},${d.y})`
      })

      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      requestAnimationFrame(moveBubbles)
    }

    moveBubbles()

    return () => {
      simulation.stop()
    }
  }, [data, links, activeTab, logos, width, height])

  const wrap = (text, width) => {
    text.each(function () {
      const text = d3.select(this)
      const words = text.text().split(/\s+/).reverse()
      let word
      let line = []
      let lineNumber = 0
      const lineHeight = 1.1
      const y = text.attr('y')
      const dy = parseFloat(text.attr('dy'))
      let tspan = text
        .text(null)
        .append('tspan')
        .attr('x', 0)
        .attr('y', y)
        .attr('dy', dy + 'em')
      while ((word = words.pop())) {
        line.push(word)
        tspan.text(line.join(' '))
        if (tspan.node().getComputedTextLength() > width) {
          line.pop()
          tspan.text(line.join(' '))
          line = [word]
          tspan = text
            .append('tspan')
            .attr('x', 0)
            .attr('y', y)
            .attr('dy', ++lineNumber * lineHeight + dy + 'em')
            .text(word)
        }
      }
    })
  }

  return (
    <>
      <svg className='bubble-view' width='100%' height='100%' ref={svgRef} />
      {selectedBubbleIndex !== null && (
        <ModalView
          selectedBubbleIndex={selectedBubbleIndex}
          setSelectedBubbleIndex={setSelectedBubbleIndex}
          activeTab={activeTab}
        />
      )}
    </>
  )
}

export default BubbleView
