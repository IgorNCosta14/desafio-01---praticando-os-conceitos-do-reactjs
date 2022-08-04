import styles from "./TasksList.module.css"
import clipboard from "../assets/clipboard.svg"
import { useState } from "react"
import { Task } from "./Task"

export function TasksList() {
    const [tasks, setTasks] = useState([1])

    const tasksArrayLength = tasks.length === 0

    return(
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </div>

            <div>
                {
                    tasksArrayLength ? 
                        <div className={styles.tasksWrapper}>
                            <img src={clipboard} alt="prancheta" />
                            <span>
                                <strong>
                                    Você ainda não tem tarefas cadastradas
                                </strong>

                                Crie tarefas e organize seus itens a fazer
                            </span>
                        </div>

                        :

                        <span><Task /></span>
                }
            </div>
            
        </div>
    )
}