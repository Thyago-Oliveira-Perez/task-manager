import { useEffect, useState } from "react";
import Api from "../api/api";
import styles from "./tasks.module.css";

export function TasksPage() {
  const api = new Api();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .getAllTasksByUserId()
      .then((response: any) => {
        setTasks(response.data.tasks);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (taskId: string) => {
    console.log(taskId);
    api
      .deleteTaskById(taskId)
      .then(() => {
        setTasks(tasks.filter((task: any) => task._id !== taskId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task: any) => {
        return (
          <div key={task._id} className={styles.task}>
            <p>{task.title}</p>
            <button className={styles.editButton}>Edit</button>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
