import { PlusCircle } from "phosphor-react"
import { ChangeEvent, useState } from "react";
import styles from "./NewTask.module.css"

interface newTaskProps {
    onCreateNewTaskText: (newTaskText:string) => void;
}

export function NewTask({onCreateNewTaskText}: newTaskProps) {
    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskText(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskText(event.target.value);
    }

    function handleSendNewTaskText() {
        onCreateNewTaskText(newTaskText)

        setNewTaskText('')
    }

    const isNewCommentEmpty = newTaskText.length === 0;

    return (
        <form className={styles.textBox}>
            <textarea 
                name="comment"
                value={newTaskText}
                onChange={handleNewTaskText}
                placeholder="Adicione uma nova tarefa"
                maxLength={134}
                required 
            />

            <button type="submit" onClick={handleSendNewTaskText} disabled={isNewCommentEmpty} >
                Criar<PlusCircle/>
            </button>
        </form>
    )
}