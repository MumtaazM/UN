import styles from "./TaskPage.module.scss";
import { useLocation } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import Datepicker from "../../AppComponents/Datepicker/Datepicker";
import { useState, useEffect } from "react";
// import { set } from "date-fns";
import { useNavigate } from "react-router-dom";

export function TaskPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [taskDeadline, setTaskDeadline] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("IN_PROGRESS");

  useEffect(() => {
    if (data) {
      setTaskDeadline(data.date);
      setTaskTitle(data.title);
      setTaskDescription(data.description);
      setTaskStatus(data.status);
    }
  }, [data]);

  const updateTask = async (id) => {
    //change format of date for api
    const fdate = taskDeadline.toISOString().split("T")[0];

    const task = {
      title: taskTitle,
      description: taskDescription,
      deadline: fdate,
      status: taskStatus,
    };

    console.log(task);

    try {
      const response = await fetch(
        `https://union-notes.up.railway.app/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );

      if (response.status === 204) {
        console.log("Task updated successfully");
        navigate("/Homepage");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred while updating the resource:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://union-notes.up.railway.app/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 204) {
        console.log("Task deleted successfully");
        navigate("/Homepage");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred while deleting the resource:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Union</h1>
      <main>
        <form>
          <label htmlFor="task_title">
            <TextareaAutosize
              className={styles.task_title}
              minRows={1}
              id="task_title"
              name="task_title"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </label>
          <label htmlFor="task_description">
            <TextareaAutosize
              className={styles.task_description}
              id="task_description"
              name="task_description"
              minRows={4}
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            />
          </label>
          <label htmlFor="task_state" className={styles.state_container}>
            State
            <select
              className={styles.task_state}
              name="task_state"
              id="task_state"
              value={taskStatus}
              onChange={(e) => {
                setTaskStatus(e.target.value);
              }}
            >
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </label>
          <Datepicker selected={taskDeadline} setSelected={setTaskDeadline} />
          <button
            id="create_task"
            className={styles.create_task}
            onClick={() => {
              event.preventDefault();
              updateTask(data.id);
            }}
          >
            Update
          </button>
          <button
            id="delete_task"
            className={styles.delete_task}
            onClick={() => {
              event.preventDefault();
              deleteTask(data.id);
            }}
          >
            Delete
          </button>
        </form>
      </main>
    </div>
  );
}
