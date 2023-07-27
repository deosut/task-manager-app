"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TaskForm, TaskList } from "@/components/app";
import { TaskType } from "@/types";

export default function TaskHomePage() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [editTask, setEditTask] = useState<TaskType>();

  const handleTaskFormSubmit = (item: TaskType) => {
    if (item.id && item.id === editTask.id) {
      handleUpdateTask(item);
      setEditTask(null);
    } else {
      setTasks((prev) => [...prev, { ...item, id: uuidv4() }]);
    }
  };
  const handleUpdateTask = (item: TaskType) => {
    setTasks((prev) => prev.map((t) => (t.id == item.id ? item : t)));
  };
  const handleDeleteTask = (item: TaskType) => {
    setTasks((prev) => prev.filter((t) => t.id !== item.id));
    if (item.id === editTask?.id) {
      setEditTask(null);
    }
  };

  return (
    <div>
      <h2>{editTask ? "Edit" : "Add New"} Task</h2>
      <TaskForm task={editTask} onSubmit={handleTaskFormSubmit} />

      <h2>Task List</h2>
      <TaskList
        items={tasks}
        update={handleUpdateTask}
        onEdit={setEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
