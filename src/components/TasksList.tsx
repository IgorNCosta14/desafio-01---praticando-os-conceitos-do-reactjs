import styles from "./TasksList.module.css"
import clipboard from "../assets/clipboard.svg"
import { FormEvent, useState } from "react"
import { Task } from "./Task"
import {v4 as uuidV4}  from 'uuid'
import { NewTask } from "./NewTask"

interface task {
    id: string;
    taskText: string;
    done: boolean;
}

export function TasksList() {
    const [tasks, setTasks] = useState<task[]>([])

    function handleNewTaskText(newTasksText: string) {
        console.log(newTasksText)
        const task = {
            id: uuidV4(),
            taskText: newTasksText,
            done: false,
        };

        setTasks([...tasks, task])
    }

    const tasksArrayLength = tasks.length === 0

    return(
        <div>

            <NewTask onCreateNewTaskText={handleNewTaskText}/>

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

                            <div className={styles.listWrapper}>
                                {
                                    tasks.map( task => {
                                        return (
                                            <Task 
                                                key={task.id}
                                                id={task.id}
                                                taskText={task.taskText}
                                                done={task.done}
                                            />
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
                
            </div>
        </div>
    )
}