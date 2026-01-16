import Statustext from "./components/Statustext";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Statustext />
    </div>
  );
}
