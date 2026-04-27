// API route to fetch jokes from external API
// This avoids CORS issues and keeps API keys secure

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Using the free JokeAPI (no API key required)
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    
    if (!response.ok) {
      throw new Error('Failed to fetch from JokeAPI');
    }

    const data = await response.json();

    // Format the response
    const formattedJoke = data.type === 'single' 
      ? data.joke 
      : `${data.setup} ${data.delivery}`;

    res.status(200).json({
      joke: formattedJoke,
      category: data.category,
      type: data.type,
    });
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).json({ 
      error: 'Failed to fetch joke',
      message: error.message 
    });
  }
}
