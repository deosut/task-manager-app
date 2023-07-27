import { TaskType } from "@/types";

import TaskItem from "../TaskItem";

export interface TaskListPropTypes {
  items: TaskType[];
  update: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
  onEdit: (task: TaskType) => void;
}

const TaskList: React.FC<TaskListPropTypes> = ({
  items,
  update,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      {items.map((it) => (
        <TaskItem
          key={it.id}
          data={it}
          complete={() => update && update({ ...it, completed: true })}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TaskList;
