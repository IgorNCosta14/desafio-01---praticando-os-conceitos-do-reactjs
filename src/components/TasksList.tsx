import styles from "./TasksList.module.css"
import clipboard from "../assets/clipboard.svg"
import { useState } from "react"
import { Task } from "./Task"
import {v4 as uuidV4}  from 'uuid'
import { NewTask } from "./NewTask"

interface task {
    id: string;
    taskText: string;
    done: boolean;
    handleTaskDone?: (id:string) => string;
}

export function TasksList() {
    const [tasks, setTasks] = useState<task[]>([])
    const [totalDoneTasks, setTotalDoneTasks] = useState(0);

    function handleNewTaskText(newTasksText: string) {
        const task = {
            id: uuidV4(),
            taskText: newTasksText,
            done: false,
        };

        setTasks([...tasks, task])
    }

    function handleTaskDone(id: string) {
        const taskDoneChanged = tasks.find((task) => task.id === id);

        taskDoneChanged!.done === false ? taskDoneChanged!.done = true : taskDoneChanged!.done = false;
        calcTotalDoneTasks();
        setTasks(tasks); 
    }

    

    function deleteComment(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id;
        })

        const findTask = tasks.find(task => task.id === id);

        if(findTask!.done === true) {
            setTotalDoneTasks(totalDoneTasks - 1)
        }

        setTasks(tasksWithoutDeletedOne);
    }
    
    function calcTotalDoneTasks() {
        const tasksDone = tasks.filter(task => task.done === true)

        const tasksDoneArrayLength = tasksDone.length

        setTotalDoneTasks(tasksDoneArrayLength)
    }

    const tasksArrayLength = tasks.length === 0
    const totalTasks = tasks.length

    return(
        <div>

            <NewTask onCreateNewTaskText={handleNewTaskText}/>

            <div className={styles.wrapper}>

                <div className={styles.info}>
                    <div className={styles.created}>
                        <strong>Tarefas criadas</strong>
                        <span>{totalTasks}</span>
                    </div>
                    <div className={styles.done}>
                        <strong>Concluídas</strong>
                        <span>{`${totalDoneTasks} de ${totalTasks}`}</span>
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
                                                handleTaskDone={handleTaskDone}
                                                onDeleteComment={deleteComment}
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