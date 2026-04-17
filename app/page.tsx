export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>A-Sharing 🚀</h1>

      <p style={styles.subtitle}>
        La piattaforma per condividere e scaricare appunti in modo semplice.
      </p>

      <div style={styles.buttons}>
        <button style={styles.primary}>Accedi</button>
        <button style={styles.secondary}>Registrati</button>
      </div>

      <div style={styles.card}>
        <h2>Cosa puoi fare</h2>
        <ul>
          <li>Caricare appunti</li>
          <li>Scaricare file</li>
          <li>Organizzare lo studio</li>
        </ul>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial",
    padding: "60px",
    textAlign: "center",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "40px",
  },
  primary: {
    padding: "10px 20px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
  secondary: {
    padding: "10px 20px",
    background: "white",
    color: "black",
    border: "1px solid black",
    borderRadius: "8px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "inline-block",
    textAlign: "left",
  },
};