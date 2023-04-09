import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { useParams } from "react-router-dom";
import styles from "./tasks.module.css";

export function TasksEditPage() {
  const api = new Api();
  const { id } = useParams();
  const [task, setTask] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    api.getTaskById(id).then((response) => {
      setTask(response.data);
    });
  }, []);

  const handleSaveChanges = () => {
    navigate("/tasks");
  };

  const handleDelete = () => {
    api.deleteTaskById(id).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <h1>Task - {task.id}</h1>
      <div>
        <div className={styles.inputArea}>
          <div className={styles.input}>
            <label>Title</label>
            <input type="text" value={task.title} />
          </div>
          <div className={styles.input}>
            <label>Content</label>
            <input type="text" value={task.content} />
          </div>
        </div>
        <div className={styles.buttonArea}>
          <button className={styles.saveButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.deleteButton} onClick={handleSaveChanges}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
