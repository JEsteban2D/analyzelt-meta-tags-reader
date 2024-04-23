import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default  async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url as string;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};
