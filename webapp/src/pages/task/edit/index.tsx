import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./edit.module.css";
import Api from "../../../api/api";

export function TasksEditPage() {
  const api = new Api();
  const { id } = useParams();
  const [task, setTask] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    api.getTaskById(id).then((response: any) => {
      setTask(response.data);
    });
  }, []);

  const handleSaveChanges = () => {
    api.editTask(id as string, task).then(() => {
      navigate("/tasks");
    });
  };

  const handleDelete = () => {
    api
      .deleteTaskById(id)
      .then(() => {
        navigate("/tasks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
      >
        {"Voltar"}
      </button>
      <h1>Task - {task.id}</h1>
      <div>
        <div className={styles.inputArea}>
          <div className={styles.input}>
            <label>Title</label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.input}>
            <label>Content</label>
            <input
              type="text"
              value={task.content}
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
            />
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
