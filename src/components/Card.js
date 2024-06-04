import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import {
  Card as MuiCard,
  CardContent,
  Checkbox,
  Typography,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Card = ({ taskObj, index, deleteTask, updateListArray, handleTaskDone, isDone }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = () => {
    handleTaskDone(index);
  };

  return (
    <MuiCard style={{ backgroundColor: colors[index % 5].secondaryColor, margin: '20px', position: 'relative' }}>
      <div style={{ backgroundColor: colors[index % 5].primaryColor, height: '5px' }}></div>
      <CardContent>
        <Checkbox
          checked={isDone}
          onChange={handleCheckboxChange}
          style={{ color: colors[index % 5].primaryColor }}
        />
        <Typography
          variant="h5"
          component="div"
          className={isDone ? 'done' : ''}
          style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: '10px', padding: '10px' }}
        >
          {taskObj.Name}
        </Typography>
        <Typography
          variant="body2"
          className={`mt-3 ${isDone ? 'done' : ''}`}
          style={{ marginTop: '10px' }}
        >
          {taskObj.Description}
        </Typography>
        <div style={{ position: 'absolute', top: '160px', left: '160px' }}>
          <Button
            startIcon={<EditIcon />}
            style={{ color: colors[index % 5].primaryColor }}
            onClick={toggle}
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            style={{ color: colors[index % 5].primaryColor }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </CardContent>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </MuiCard>
  );
};

export default Card;
