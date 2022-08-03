import styles from './App.module.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import './global.css';

function App() {
    return (
    <div className={styles.wrapper}>
      <Header />
      <NewTask />
    </div>
  )
}

export default App
