import styles from "./Task.module.css"
import trash from "../assets/trash.svg"

interface TaskProps {
    id: string,
    taskText: string,
    done: boolean,
}

export function Task({id, taskText}: TaskProps ) {
    return(
        <div className={styles.task}>
            <input id="inputRadio" type="checkbox"/>
            <label htmlFor="inputRadio"/>
            <span>{taskText}</span>
            <button>
                <img src={trash} alt="Lata de lixo"/>
            </button>
        </div>
    )
}