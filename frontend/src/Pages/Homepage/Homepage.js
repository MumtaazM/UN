import styles from "./Homepage.module.scss";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../helpers/DecodeToken";
import { fetchAllTasks } from "../../helpers/Api";

export const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const userId = useMemo(() => decodeToken(token.jwt).userId, [token]);
  const name = useMemo(() => decodeToken(token.jwt).name, [token]);

  console.log(token.jwt);

  const findCompletedTasks = (tasks) => {
    return tasks.filter((task) => task.status === "COMPLETED");
  };
  const findOngoingTasks = (tasks) => {
    return tasks.filter((task) => task.status === "IN_PROGRESS");
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!token) {
          navigate("/");
        } else {
          const data = await fetchAllTasks(userId, token.jwt);
          console.log("Tasks fetched", data);
          setTasks(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, [token, userId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.logo}>Union</h1>
        <button>Edit</button>
        <div className={styles.text}>
          <h2>
            Hello <span className={styles.name}>{name}</span>,
          </h2>
          <p>Here are your daily tasks</p>
        </div>
      </div>
      <main>
        <h3>Tasks</h3>
        <TaskBar toggleTab={setToggleState} toggleState={toggleState} />

        {toggleState === 1 ? (
          <Cards tasks={tasks} />
        ) : toggleState === 2 ? (
          <Cards tasks={findOngoingTasks(tasks)} />
        ) : (
          <Cards tasks={findCompletedTasks(tasks)} />
        )}
      </main>
    </div>
  );
};

function Cards({ tasks }) {
  return (
    <div className={styles.task_container}>
      <div className={styles.card_grid}>
        {Array.isArray(tasks) ? (
          tasks.map((task) => {
            let taskDate = new Date(task.deadline);

            let formattedDate = taskDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            });

            return (
              <Card
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                date={formattedDate}
                status={task.status}
              />
            );
          })
        ) : (
          <p>none</p>
        )}
      </div>
    </div>
  );
}

function Card({ id, title, description, date, status }) {
  const navigate = useNavigate();

  //turn date into date object
  const dateObject = new Date(date);

  const data = {
    id: id,
    title: title,
    description: description,
    date: dateObject,
    status: status,
  };

  const toTaskPage = () => {
    navigate("/TaskPage", { state: data });
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        toTaskPage();
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.tags}>
        <div className={styles.date}>
          <img src="/src/assets/timer.svg" alt="" />
          <span>{date}</span>
        </div>
        <span className={styles.task_state}>
          {status === "COMPLETED"
            ? "Completed"
            : status === "IN_PROGRESS"
            ? "In Progress"
            : ""}
        </span>
      </div>
    </div>
  );
}

function TaskBar({ toggleTab, toggleState }) {
  return (
    <nav className={styles.taskbar}>
      <ul>
        <li
          className={toggleState === 1 ? styles.current_state : ""}
          onClick={() => toggleTab(1)}
        >
          All Tasks
        </li>
        <li
          className={toggleState === 2 ? styles.current_state : ""}
          onClick={() => toggleTab(2)}
        >
          In Progress
        </li>
        <li
          className={toggleState === 3 ? styles.current_state : ""}
          onClick={() => toggleTab(3)}
        >
          Completed
        </li>
      </ul>
    </nav>
  );
}

export default Homepage;
