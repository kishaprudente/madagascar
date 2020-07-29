import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from 'd3';
// import './Chart.css';

const Chart = () => {
  const [data, setData] = useState([
    { mood: 'Happy', value: 5 },
    { mood: 'Angry', value: 7 },
    { mood: 'Anxious', value: 5 },
    { mood: 'Loved', value: 10 },
    { mood: 'Sad', value: 1 },
  ]);
  const svgRef = useRef();

  const maxValue = Math.max(...data.map((d) => d.value));

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(data.map((d) => d.mood))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, maxValue])
      .range([150, 0]);

    const colorScale = scaleLinear()
      .domain([1, 10])
      .range(['#F3D068', 'orange'])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select('.x-axis')
      .style('transform', 'translateY(150px)')
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg
      .select('.y-axis')
      // .style('transform', 'translateX(150px)')
      .call(yAxis);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scale(1, -1)')
      .attr('x', (d) => xScale(d.mood))
      .attr('y', -150)
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => 150 - yScale(d.value))
      .transition()
      .attr('fill', (d) => colorScale(d.value))
      .attr('height', (d) => 150 - yScale(d.value));
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
  },
};
