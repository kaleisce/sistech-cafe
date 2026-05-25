export default function PromoPage() {
  const promos = [
    { title: "Happy Hour", desc: "Buy 1 Get 1 Free every weekday 2–4 PM", badge: "Limited!" },
    { title: "Student Discount", desc: "Show your student card and get 15% off", badge: "Always On" },
    { title: "Birthday Treat", desc: "Free drink on your birthday month", badge: "Special" },
  ];

  return (
    <main style={{minHeight: "80vh", background: "#f5f5f5", padding: "3rem 2rem"}}>
      <h1 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "900", color: "#ff5c9e", marginBottom: "2rem"}}>Promo</h1>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", maxWidth: "900px", margin: "0 auto"}}>
        {promos.map((promo, i) => (
          <div key={i} style={{background: "white", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "relative"}}>
            <span style={{background: "#ff5c9e", color: "white", fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "999px", position: "absolute", top: "1rem", right: "1rem"}}>{promo.badge}</span>
            <div style={{fontSize: "2rem", marginBottom: "1rem"}}>🎉</div>
            <h3 style={{fontWeight: "700", color: "#333", marginBottom: "0.5rem"}}>{promo.title}</h3>
            <p style={{fontSize: "0.9rem", color: "#666", lineHeight: "1.6"}}>{promo.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}