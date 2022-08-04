import styles from './App.module.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TasksList } from './components/TasksList';
import './global.css';

function App() {
    return (
    <div className={styles.wrapper}>
      <Header />
      <NewTask />
      <TasksList />
    </div>
  )
}

export default App
