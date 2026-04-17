export default function Home() {
  return (
    <div style={styles.page}>
      
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.logo}>A-Sharing</div>

        <div style={styles.navLinks}>
          <button style={styles.link}>Login</button>
          <button style={styles.primarySmall}>Registrati</button>
        </div>
      </header>

      {/* HERO */}
      <main style={styles.hero}>
        <h1 style={styles.title}>
          Condividi i tuoi appunti, <br />
          studia meglio, più velocemente.
        </h1>

        <p style={styles.subtitle}>
          A-Sharing è la piattaforma dove gli studenti caricano e scaricano appunti in modo semplice e veloce.
        </p>

        <div style={styles.cta}>
          <button style={styles.primary}>Inizia ora</button>
          <button style={styles.secondary}>Scopri di più</button>
        </div>
      </main>

      {/* FEATURES */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>📚 Appunti organizzati</h3>
          <p>Tutti i materiali divisi per materia e facilmente accessibili.</p>
        </div>

        <div style={styles.card}>
          <h3>⚡ Veloce e intuitivo</h3>
          <p>Carica e scarica file in pochi secondi.</p>
        </div>

        <div style={styles.card}>
          <h3>🎓 Pensato per studenti</h3>
          <p>Creato per semplificare lo studio quotidiano.</p>
        </div>
      </section>

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial",
    background: "#0f172a",
    color: "white",
    minHeight: "100vh",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    alignItems: "center",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "10px",
  },

  link: {
    background: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  primarySmall: {
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "20px",
    color: "#cbd5e1",
    fontSize: "18px",
  },

  cta: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primary: {
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  secondary: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "60px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
  },
};