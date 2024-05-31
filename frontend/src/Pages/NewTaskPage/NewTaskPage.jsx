import styles from "./NewTaskPage.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import Datepicker from "../../AppComponents/Datepicker/Datepicker";
import { useState } from "react";
import { decodeToken } from "../../helpers/DecodeToken";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../helpers/Api";

export function NewTaskPage() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_BASE_API_URL;
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = decodeToken(token.jwt).userId;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskState, setTaskState] = useState("IN_PROGRESS");
  const [taskDeadline, setTaskDeadline] = useState(new Date());
  const [formattedDeadline, setFormattedDeadline] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const task = {
      title: taskTitle,
      description: taskDescription,
      deadline: formattedDeadline,
      status: taskState,
    };

    console.log(task);

    console.log(task);

    try {
      const data = await createTask(userId, task, token); // replace token with your actual token

      console.log("Task created successfully", data);
      navigate("/home");
    } catch (error) {
      console.error(`HTTP error! status: ${error.message}`);
    }
  };

  const handleDateChange = (date) => {
    if (!(date instanceof Date)) {
      console.error("Invalid date:", date);
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];
    setTaskDeadline(date);
    setFormattedDeadline(formattedDate);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Union</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task_title">
            Title
            <TextareaAutosize
              className={styles.task_title}
              minRows={1}
              id="task_title"
              name="task_title"
              autoFocus
              value={taskTitle}
              onChange={(event) => {
                setTaskTitle(event.target.value);
              }}
            />
          </label>
          <label htmlFor="task_description">
            Task description
            <TextareaAutosize
              className={styles.task_description}
              id="task_description"
              name="task_description"
              minRows={1}
              autoFocus
              value={taskDescription}
              onChange={(event) => {
                setTaskDescription(event.target.value);
              }}
            />
          </label>
          <label htmlFor="task_state" className={styles.state_container}>
            State
            <select
              className={styles.task_state}
              name="task_state"
              id="task_state"
              value={taskState}
              onChange={(event) => {
                setTaskState(event.target.value);
              }}
            >
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </label>
          <div className="calendar-container">
            <Datepicker
              selected={taskDeadline}
              setSelected={handleDateChange}
            />
          </div>

          <button id="create_task" className={styles.create_task}>
            Create new task
          </button>
        </form>
      </main>
    </div>
  );
}
