import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a mi sitio web</h1>
      <p style={styles.paragraph}>Este es el inicio de nuestro proyecto en React.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default Home;