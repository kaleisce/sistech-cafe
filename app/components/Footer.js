import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="#">📷</a>
        <a href="#">🐦</a>
        <a href="#">📞</a>
      </div>
      <p className={styles.credit}>Made with Love by [Christine]</p>
    </footer>
  );
}