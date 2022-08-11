import styles from "./Header.module.css"
import rocketLogo from "../assets/logo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Rocket logo" />     
        </header>
    )
}