import { useEffect, useState } from "react";
import Api from "../../api/api";
import styles from "./task.module.css";
import { useNavigate } from "react-router-dom";

const TaskListPage = () => {
  const api = new Api();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks.length === 0) {
      api
        .getAllTasksByUserId()
        .then((response: any) => {
          setTasks(response.data.tasks);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const handleDelete = (taskId: string) => {
    api.deleteTaskById(taskId).then(() => {
      setTasks(tasks.filter((task: any) => task.id !== taskId));
    });
  };

  const handleEdit = (taskId: string) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <>
      <h1>Tasks</h1>

      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <div className={styles.tasks}>
              <p>{task.title}</p>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(task.id)}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(task.id)}
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListPage;
