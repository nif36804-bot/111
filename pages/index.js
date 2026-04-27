import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>😂 Welcome to Joke Generator</h1>
      <p style={styles.subtitle}>Get random jokes at the click of a button!</p>
      <Link href="/jokes">
        <a style={styles.button}>
          Go to Joke Generator
        </a>
      </Link>
      <p style={styles.info}>
        Built with Next.js and deployed on Vercel
      </p>
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
    fontFamily: 'Arial, sans-serif',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
  info: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#999',
  },
};
