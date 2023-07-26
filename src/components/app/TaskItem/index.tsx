import { Button, Checkbox } from "@/components/atoms";
import { TaskType } from "@/types";

import styles from "./index.module.scss";

export interface TaskItemPropTypes {
  data: TaskType;
  onEdit: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
  complete: () => void;
}

const TaskItem: React.FC<TaskItemPropTypes> = ({
  data,
  complete,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h6 className={styles.title}>{data.title}</h6>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.actions}>
        <Checkbox checked={data.completed} onChange={complete} />
        <Button onClick={() => onEdit(data)}>Edit</Button>
        <Button onClick={() => onDelete(data)}>Delete</Button>
      </div>
    </div>
  );
};

export default TaskItem;
