// App.jsx
import React from 'react';
import Card from './Card';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bienvenido a mi App en React</h1>
      <div style={styles.cardGrid}>
        <Card
          title="Tarjeta 1"
          description="Esta es la primera tarjeta."
          imageUrl="https://via.placeholder.com/300x180?text=1"
        />
        <Card
          title="Tarjeta 2"
          description="Otra tarjeta con más contenido."
          imageUrl="https://via.placeholder.com/300x180?text=2"
        />
        <Card
          title="Tarjeta 3"
          description="Una tarjeta más para probar diseño."
          imageUrl="https://via.placeholder.com/300x180?text=3"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '32px',
    backgroundColor: '#f7f7f7',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
};

export default App;
