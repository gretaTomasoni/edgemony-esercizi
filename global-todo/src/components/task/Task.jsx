// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { useContext } from "react";
import { Context } from "../../store";
import { randomHSLA } from "../../utils/funcs";
import TasksList from "../tasksList";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  // }, []);

  const { store, dispatch } = useContext(Context);

  const onHandleSetCompleted = () => {
    dispatch({ type: "SET_TASK_COMPLETED", payload: taskData.id });
  };

  const onHandleDeleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: taskData.id });
  };

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={taskData.image} alt={taskData.username} />
        <span>{taskData.username}</span>
      </div>
      <div className={styles.content}>
        {/* {taskData.completed && <button onClick={onHandleDeleteTask}>V</button>} */}
        <div onClick={onHandleSetCompleted} className={styles.todo}>
          <button className={taskData.completed ? styles.fill : null}></button>
          <p className={taskData.completed ? styles.line : null}>
            {taskData.todo}
          </p>
        </div>
        <button onClick={onHandleDeleteTask} className={styles.delete}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Task;
