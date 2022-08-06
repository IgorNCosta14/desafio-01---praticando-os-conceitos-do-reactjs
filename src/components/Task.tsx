import styles from "./Task.module.css"
import trash from "../assets/trash.svg"
import { useState } from "react";

interface TaskProps {
    id: string,
    taskText: string,
    done: boolean,
    handleTaskDone: ( id:string ) => void;
    onDeleteComment: ( id:string ) => void;
}



export function Task({id, taskText, done, handleTaskDone, onDeleteComment}: TaskProps ) {
    let [ doneState, setDoneState ] = useState<boolean>(done)

    function handleSendTaskId() {
        handleTaskDone(id);
        setDoneState(!doneState)
    }

    function handleDeleteComment() {
        onDeleteComment(id);
    }

    return(
        <div className={styles.task}>
            <input id={id} type="checkbox" onClick={handleSendTaskId}/>
            <label htmlFor={id}/>
            <span className={doneState === true ? styles.textDone : styles.textNotDone}>{`${taskText}`}</span>
            <button id={id} onClick={handleDeleteComment}>
                <img src={trash} alt="Lata de lixo"/>
            </button>
        </div>
    )
}