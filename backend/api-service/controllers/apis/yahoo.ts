import axios from 'axios';

async function getYahooWeeklyMatchupData() {

  const response = await axios.get(, {
    headers: {

    },
  });
  return response.data;
}

export { getYahooWeeklyMatchupData };
