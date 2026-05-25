export default function MenuPage() {
  const items = [
    { name: "Kopi Susu", price: "Rp 25.000", desc: "Espresso with fresh local milk" },
    { name: "Matcha Latte", price: "Rp 28.000", desc: "Premium matcha with steamed milk" },
    { name: "Es Kopi Aren", price: "Rp 22.000", desc: "Cold brew with palm sugar" },
    { name: "Americano", price: "Rp 20.000", desc: "Double shot espresso with water" },
    { name: "Cappuccino", price: "Rp 27.000", desc: "Espresso with foamed milk" },
    { name: "Cokelat Panas", price: "Rp 23.000", desc: "Rich hot chocolate drink" },
  ];

  return (
    <main style={{minHeight: "80vh", background: "#f5f5f5", padding: "3rem 2rem"}}>
      <h1 style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "900", color: "#ff5c9e", marginBottom: "2rem"}}>Our Menu</h1>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", maxWidth: "900px", margin: "0 auto"}}>
        {items.map((item, i) => (
          <div key={i} style={{background: "white", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
            <div style={{width: "100%", height: "120px", background: "#ffe0ef", borderRadius: "8px", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem"}}>☕</div>
            <h3 style={{fontWeight: "700", color: "#333", marginBottom: "0.25rem"}}>{item.name}</h3>
            <p style={{fontSize: "0.85rem", color: "#888", marginBottom: "0.75rem"}}>{item.desc}</p>
            <p style={{fontWeight: "700", color: "#ff5c9e"}}>{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}