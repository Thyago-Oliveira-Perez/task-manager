import { useEffect, useState } from "react";
import Api from "../../api/api";
import styles from "./task.module.css";
import { useNavigate } from "react-router-dom";

const TaskListPage = () => {
  const api = new Api();
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
  });

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

  const handleAddTask = () => {
    api.createTask(newTask).then((response: any) => {
      setTasks([...tasks, response.data]);
      setNewTask({
        title: "",
        content: "",
      });
    });
  };

  return (
    <>
      <h1>Tasks</h1>

      <div className={styles.createTask}>
        <div className={styles.input}>
          <label>Title</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => {
              setNewTask({
                ...newTask,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.input}>
          <label>Content</label>
          <textarea
            value={newTask.content}
            onChange={(e) => {
              setNewTask({
                ...newTask,
                content: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.input}>
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
      </div>

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
