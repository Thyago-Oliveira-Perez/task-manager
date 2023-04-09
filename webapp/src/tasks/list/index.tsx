import { useEffect, useState } from "react";
import Api from "../../api/api";
import styles from "./tasks.module.css";
import { useNavigate } from "react-router-dom";

export function TasksPage() {
  const api = new Api();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    if (tasks.length === 0) {
      api
        .getAllTasksByUserId()
        .then((response: any) => {
          console.log(response);
          setTasks(response.data.tasks);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, []);

  const handleDelete = (taskId: number) => {
    api
      .deleteTaskById(taskId)
      .then(() => {
        setTasks(tasks.filter((task: any) => task._id !== taskId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (taskId: number) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task: any) => {
        return (
          <div key={`${task.id}_${task.title}`} className={styles.task}>
            <p>{task.title}</p>
            <button
              className={styles.editButton}
              onClick={() => handleEdit(task.id)}
            >
              Edit
            </button>
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
