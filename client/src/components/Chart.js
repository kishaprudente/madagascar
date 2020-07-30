import React, { useRef, useEffect, useState } from 'react';
import {
  select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleBand,
  format,
} from 'd3';

const Chart = ({ data }) => {
  const svgRef = useRef();

  const maxValue = Math.max(...data.map((d) => d.value));

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(data.map((d) => d.mood))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, Math.max(maxValue, 10)])
      .range([150, 0]);

    const colorScale = scaleLinear()
      .domain([1, maxValue])
      .range(['#F3D068', 'orange'])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select('.x-axis')
      .style('transform', 'translateY(150px)')
      .style('font-family', 'ruluko')
      .call(xAxis);

    svg
      .append('text')
      .attr('transform', 'translate(' + 300 / 2 + ' ,' + (150 + 40) + ')')
      .style('text-anchor', 'middle')
      .style('font-family', 'ruluko')
      .style('font-weight', 'bold')
      .style('font-size', 20)
      .text('Mood');

    const yAxisTicks = yScale.ticks().filter((tick) => Number.isInteger(tick));
    const yAxis = axisLeft(yScale)
      .tickValues(yAxisTicks)
      .tickFormat(format('d'));
    svg
      .select('.y-axis')
      .style('font-family', 'ruluko')
      .call(yAxis);

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('x', -150 / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-family', 'ruluko')
      .style('font-weight', 'bold')
      .style('font-size', 20)
      .text('Count');

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scale(1, -1)')
      .attr('x', (d) => xScale(d.mood))
      .attr('width', xScale.bandwidth())
      .attr('y', -150)
      .attr('fill', (d) => colorScale(d.value))
      .transition()
      .duration(500)
      .attr('height', (d) => 150 - yScale(d.value))
      .delay((d, i) => {
        console.log(i);
        return i * 100;
      });
  }, [data]);

  return (
    <svg className='chart' ref={svgRef} style={styles.chart}>
      <g className='x-axis' />
      <g className='y-axis' />
    </svg>
  );
};

export default Chart;

const styles = {
  chart: {
    background: '#eee',
    overflow: 'visible',
    display: 'block',
    marginLeft: '20px',
  },
};
