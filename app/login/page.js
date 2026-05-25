export default function LoginPage() {
  return (
    <main style={{minHeight: "80vh", background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem"}}>
      <div style={{background: "white", borderRadius: "16px", padding: "2.5rem", width: "100%", maxWidth: "400px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)"}}>
        <h1 style={{textAlign: "center", fontSize: "1.75rem", fontWeight: "900", color: "#ff5c9e", marginBottom: "0.5rem"}}>Welcome Back</h1>
        <p style={{textAlign: "center", color: "#888", fontSize: "0.9rem", marginBottom: "2rem"}}>Login to your Sistech Cafe account</p>
        <div style={{marginBottom: "1rem"}}>
          <label style={{display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#555", marginBottom: "0.4rem"}}>Email</label>
          <input type="email" placeholder="you@email.com" style={{width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #eee", borderRadius: "8px", fontSize: "0.9rem", outline: "none"}} />
        </div>
        <div style={{marginBottom: "1.5rem"}}>
          <label style={{display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#555", marginBottom: "0.4rem"}}>Password</label>
          <input type="password" placeholder="••••••••" style={{width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #eee", borderRadius: "8px", fontSize: "0.9rem", outline: "none"}} />
        </div>
        <button style={{width: "100%", background: "#ff5c9e", color: "white", border: "none", borderRadius: "8px", padding: "0.85rem", fontSize: "1rem", fontWeight: "700", cursor: "pointer"}}>Login</button>
        <p style={{textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: "1rem"}}>Don't have an account? <a href="#" style={{color: "#ff5c9e", fontWeight: "600"}}>Sign up</a></p>
      </div>
    </main>
  );
}