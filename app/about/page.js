export default function AboutPage() {
  return (
    <main style={{minHeight: "80vh", background: "#f5f5f5", padding: "3rem 2rem"}}>
      <div style={{maxWidth: "700px", margin: "0 auto", textAlign: "center"}}>
        <h1 style={{fontSize: "2.5rem", fontWeight: "900", color: "#ff5c9e", marginBottom: "1.5rem"}}>About Us</h1>
        <div style={{background: "white", borderRadius: "12px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: "1.5rem"}}>
          <div style={{fontSize: "3rem", marginBottom: "1rem"}}>🌸</div>
          <h2 style={{fontWeight: "700", color: "#333", marginBottom: "1rem"}}>Sistech Cafe</h2>
          <p style={{color: "#666", lineHeight: "1.8", marginBottom: "1rem"}}>
            Sistech Cafe is a local coffee shop that serves local coffee with a warm and welcoming atmosphere.
          </p>
          <p style={{color: "#666", lineHeight: "1.8"}}>
            What makes it special is that the cafe is fully operated by talented and inspiring women who bring creativity, care, and teamwork into every part of the business.
          </p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem"}}>
          {[["🫶", "Women-led"], ["☕", "Local Coffee"], ["🌿", "Fresh & Warm"]].map(([icon, label], i) => (
            <div key={i} style={{background: "white", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize: "1.8rem", marginBottom: "0.5rem"}}>{icon}</div>
              <p style={{fontWeight: "600", color: "#ff5c9e", fontSize: "0.9rem"}}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}