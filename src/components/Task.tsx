import styles from "./Task.module.css"
import trash from "../assets/trash.svg"

export function Task() {
    return(
        <div className={styles.task}>
            <input type="radio"/>
            <span>oi</span>
            <button>
                <img src={trash} alt="Lata de lixo"/>
            </button>
        </div>
    )
}