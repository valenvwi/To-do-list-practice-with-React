import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "task", headerName: "Task", width: 300 },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 500,
  },
  { field: "deadline", headerName: "Deadline", width: 120 },
];

const initialRows = [
  {
    id: 1,
    task: "Address auto complete",
    description: "Google Maps API",
    deadline: "15/7/2023",
  },
  {
    id: 2,
    task: "Notification",
    description: "likes, follow & comment",
    deadline: "16/7/2023",
  },
  {
    id: 3,
    task: "CSS show multiple images",
    description: "lightbox / carousel",
    deadline: "17/7/2023",
  },
  {
    id: 4,
    task: "Clean up codes",
    description: "All CSS file",
    deadline: "18/7/2023",
  },
];

export default function DataTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [openForm, setOpenForm] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");
  const [newDeadline, setNewDeadline] = React.useState("");

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleCreateTask = () => {
    const newId = rows.length + 1;
    const newTaskData = {
      id: newId,
      task: newTask,
      description: newDescription,
      deadline: newDeadline,
    };
    setRows((prevRows) => [...prevRows, newTaskData]);
    setNewTask("");
    setNewDescription("");
    setNewDeadline("");
    handleCloseForm();
  };

  const handleDeleteSelected = () => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(remainingRows);
    setSelectedRows([]);
  };

  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <button onClick={handleOpenForm}>Create New Task</button>
      <button
        onClick={handleDeleteSelected}
        disabled={selectedRows.length === 0}
      >
        Delete Task
      </button>
      {openForm && (
        <div>
          <input
            type="text"
            placeholder="Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Deadline"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
          />
          <button onClick={handleCreateTask}>Save</button>
          <button onClick={handleCloseForm}>Cancel</button>
        </div>
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelection}
        rowSelectionModel={selectedRows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
