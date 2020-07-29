import React from 'react';
import Chart from '../components/Chart';

const Stats = () => {
  return (
    <div className='chart-div' style={styles.container}>
      <Chart />
    </div>
  );
};

export default Stats;

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
