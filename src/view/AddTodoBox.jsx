import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import * as TaskApi from "../api/TaskAPI";

const AddTodoBox = () => {
  const [inputTaskLabel, setInputTaskLabel] = useState("");
  const createTask = async (taskLabel) => {
    const task = {
      id: Date.now(),
      label: taskLabel,
      createTime: Date.now(),
      completed: false,
    };
    await TaskApi.createTask(task);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "70%",
        }}
      >
        <TextField
          id="filled-basic"
          style={{ width: "60%", maxWidth: 300, marginRight: 10 }}
          value={inputTaskLabel}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              createTask(inputTaskLabel);
              setInputTaskLabel("");
            }
          }}
          onChange={(e) => setInputTaskLabel(e.target.value)}
        />
        <Button
          variant="outlined"
          style={{ textTransform: "none", color: "black", backgroundColor: "#CFE5F6" }}
          onClick={() => {
            createTask(inputTaskLabel);
            setInputTaskLabel("");
          }}
        >
          <span style={{ fontSize: "20px" }}>Add</span>
        </Button>
      </Box>
    </>
  );
};
export default AddTodoBox;
