import { useLoaderData } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const todo = useLoaderData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Container HOME To-do:</h1>
      <p className={styles.item}>ID: {todo.id}</p>
      <p className={styles.item}>Title: {todo.title}</p>
      <p className={styles.item}>
        Completed: {todo.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}
