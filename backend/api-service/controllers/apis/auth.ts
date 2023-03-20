import axios from 'axios';
import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const YAHOO_CLIENT_ID = process.env.YAHOO_CLIENT_ID;
const YAHOO_CLIENT_SECRET = process.env.YAHOO_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const app = express();

app.get('/login', (req, res) => {
  const authUrl = 'https://api.login.yahoo.com/oauth2/request_auth';
  const scope = 'fspt-r';
  const url = `${authUrl}?client_id=${YAHOO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scope}`;
  res.redirect(url);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const accessToken = await getAccessToken(code.toString());
    res.send('Authentication successful');
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).send('Authentication failed');
  }
});


async function getAccessToken(code: string) {
  const tokenUrl = 'https://api.login.yahoo.com/oauth2/get_token';
  const authString = `${YAHOO_CLIENT_ID}:${YAHOO_CLIENT_SECRET}`;
  const encodedAuthString = Buffer.from(authString).toString('base64');

  try {
    const response = await axios.post(tokenUrl, null, {
      headers: {
        'Authorization': `Basic ${encodedAuthString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        'grant_type': 'authorization_code',
        'redirect_uri': REDIRECT_URI,
        'code': code,
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

export default app;
