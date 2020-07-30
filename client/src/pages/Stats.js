import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import PageTitle from '../components/PageTitle';
import userAPI from '../utils/userAPI';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const Stats = () => {
  const [data, setData] = useState([
    { mood: 'Happy', value: 0 },
    { mood: 'Angry', value: 0 },
    { mood: 'Anxious', value: 0 },
    { mood: 'Loved', value: 0 },
    { mood: 'Sad', value: 0 },
  ]);

  const getUserID = () => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    return _id;
  };

  const getUserMoods = async () => {
    try {
      const { data } = await userAPI.getUserData(getUserID());
      const allUserPosts = data.posts;
      const moodCount = { Happy: 0, Angry: 0, Anxious: 0, Loved: 0, Sad: 0 };

      if (allUserPosts) {
        allUserPosts.forEach((post) => {
          switch (post.mood) {
            case 'Happy':
              moodCount.Happy++;
              break;
            case 'Angry':
              moodCount.Angry++;
              break;
            case 'Anxious':
              moodCount.Anxious++;
              break;
            case 'Loved':
              moodCount.Loved++;
              break;
            case 'Sad':
              moodCount.Sad++;
              break;
          }
        });
      }
      return moodCount;
    } catch (err) {
      console.log(err);
    }
  };

  const setMoodData = async () => {
    try {
      const moods = await getUserMoods();
      setData([
        { mood: 'Happy', value: moods.Happy },
        { mood: 'Angry', value: moods.Angry },
        { mood: 'Anxious', value: moods.Anxious },
        { mood: 'Loved', value: moods.Loved },
        { mood: 'Sad', value: moods.Sad },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const isZeroCount = () => {
    // loop through data state
    for (let i = 0; i < data.length; i++) {
      // if any mood has value > 0, then return false
      if (data[i].value !== 0) {
        return false;
      }
    }
    // otherwise return true
    return true;
  };

  useEffect(() => {
    setMoodData();
  }, []);

  return (
    <Grid container style={styles.container}>
      <Grid item xs={11} sm={8}>
        <PageTitle>Stats</PageTitle>
      </Grid>
      <Grid item>
        {isZeroCount() ? (
          <Typography style={styles.nodata}>
            No data! <br />
            Try logging your mood in the Moodboard!
          </Typography>
        ) : (
          <Chart data={data} />
        )}
      </Grid>
    </Grid>
  );
};

export default Stats;

const styles = {
  container: {
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
  },
  nodata: {
    fontFamily: 'ruluko',
    textAlign: 'center',
    lineHeight: 3,
  },
};
