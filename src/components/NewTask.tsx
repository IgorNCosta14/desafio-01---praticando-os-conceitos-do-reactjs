import { PlusCircle } from "phosphor-react"
import styles from "./NewTask.module.css"

export function NewTask() {
    return (
        <div className={styles.textBox}>
            <input type="text" />
            <button>Criar <PlusCircle /></button>
        </div>
    )
}