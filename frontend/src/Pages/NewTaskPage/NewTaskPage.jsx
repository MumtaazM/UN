import styles from "./NewTaskPage.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import Datepicker from "../../AppComponents/Datepicker/Datepicker";

export function NewTaskPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Union</h1>
      <main>
        <form>
          <label htmlFor="task_title">
            Title
            <TextareaAutosize
              className={styles.task_title}
              minRows={1}
              id="task_title"
              name="task_title"
              autoFocus
            />
          </label>
          <label htmlFor="task_description">
            Task description
            <TextareaAutosize
              className={styles.task_description}
              id="task_description"
              name="task_description"
              minRows={4}
              autoFocus
            />
          </label>
          <label htmlFor="task_state" className={styles.state_container}>
            State
            <select
              className={styles.task_state}
              name="task_state"
              id="task_state"
            >
              <option value="New Task">New Task</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <Datepicker />
          <button id="create_task" className={styles.create_task}>
            Create new task
          </button>
        </form>
      </main>
    </div>
  );
}
