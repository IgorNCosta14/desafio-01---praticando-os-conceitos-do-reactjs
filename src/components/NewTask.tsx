import { PlusCircle } from "phosphor-react"
import styles from "./NewTask.module.css"

export function NewTask() {
    return (
        <div className={styles.textBox}>
            <textarea 
                name="comment"
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submit">
                Criar<PlusCircle/>
            </button>
        </div>
    )
}