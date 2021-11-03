import styles from '../styles/Header.module.scss'
export default function Header() {
  return (
    <nav className={styles.nav}>
      <h2>Carolina Aguera</h2>
      <ul>
        <li>EXPERIENCIA</li>
        <li>FORMAÇAO</li>
        <li>CONTATO</li>
      </ul>
    </nav>
  )
}
