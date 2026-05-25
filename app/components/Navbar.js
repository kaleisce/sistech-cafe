import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SISTECH CAFE</div>
      <div className={styles.links}>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About Us</Link>
        <Link href="/promo">Promo</Link>
        <Link href="/login" className={styles.loginBtn}>Login</Link>
      </div>
    </nav>
  );
}