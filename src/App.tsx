import styles from "./App.module.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className={styles.app}>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App
