import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>SISTECH CAFE</h1>
      <p>Local Coffee brewed by Extraordinary Women in Indonesia</p>
      <a href="/menu" className={styles.ctaBtn}>See our Menu</a>
    </section>
  );
}