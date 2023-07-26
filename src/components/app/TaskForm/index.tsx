"use client";

import React, { useEffect, useState } from "react";

import { Button, Form, TextField } from "@/components/atoms";
import { TaskType } from "@/types";

export interface TaskFormPropTypes {
  task?: TaskType;
  onSubmit: (item: TaskType) => void;
}

const TaskForm: React.FC<TaskFormPropTypes> = ({ task, onSubmit }) => {
  const [formData, setFormData] = useState<TaskType>({
    title: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState<TaskType>({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Perform validation here
  const validateForm = () => {
    const errors: TaskType = {};
    if (!formData.title) {
      errors.title = "Title is required";
    }
    if (!formData.description) {
      errors.description = "Description is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If there are no errors, you can submit the form data to the server or handle it as needed
    if (validateForm() && onSubmit) {
      onSubmit(formData);
      setFormData({
        title: "",
        description: "",
      });
    }
  };

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData({ title: "", description: "" });
    }
  }, [task]);

  return (
    <Form onSubmit={handleCreateNewTask}>
      <TextField
        id="title-field"
        label="Title"
        name="title"
        onChange={handleChange}
        value={formData.title}
        helperText={formErrors.title}
      />
      <TextField
        id="description-field"
        label="Description"
        name="description"
        onChange={handleChange}
        multiline
        value={formData.description}
        helperText={formErrors.description}
      />
      <Button type="submit">{task ? "Update" : "Create"}</Button>
    </Form>
  );
};

export default TaskForm;
