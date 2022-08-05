import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTask.module.css"

interface newTaskProps {
    onCreateNewTaskText: () => string;
}

export function NewTask({onCreateNewTaskText}: newTaskProps) {
    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskText(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskText(event.target.value);
    }

    function handleSendNewTaskText(event: FormEvent) {
        event.preventDefault()

        onCreateNewTaskText(newTaskText)

        console.log(newTaskText);

        setNewTaskText('')
    }

    return (
        <div className={styles.textBox}>
            <textarea 
                name="comment"
                value={newTaskText}
                onChange={handleNewTaskText}
                placeholder="Adicione uma nova tarefa"
                
            />

            <button type="submit" onClick={handleSendNewTaskText}>
                Criar<PlusCircle/>
            </button>
        </div>
    )
}