import { useState } from 'react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/jokes');
      if (!response.ok) throw new Error('Failed to fetch joke');
      const data = await response.json();
      setJoke(data.joke || data.setup + ' ' + data.punchline);
    } catch (err) {
      setError('Could not fetch joke. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>😂 Random Joke Generator</h1>
      <button onClick={fetchJoke} disabled={loading} style={styles.button}>
        {loading ? 'Loading...' : 'Get a Joke'}
      </button>
      {joke && <p style={styles.joke}>{joke}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  joke: {
    fontSize: '18px',
    color: '#333',
    textAlign: 'center',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  error: {
    color: 'red',
    fontSize: '16px',
  },
};
