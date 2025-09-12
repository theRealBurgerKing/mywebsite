// pages/TodoPage.tsx
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface Todo {
  id: number;
  label: string;
  done: boolean;
}

// Toggle Button Component
const ToggleButton = ({ label, name, onClicked }: { label: string; name: string; onClicked: (active: boolean) => void }) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    onClicked(newState);
  };
  
  return (
    <div className={`togglebutton-wrapper ${isActive ? 'togglebutton-checked' : ''}`}>
      <label htmlFor={name}>
        <span className="togglebutton-label">{label}</span>
        <span className="tooglebutton-box"></span>
      </label>
      <input 
        id={name} 
        type="checkbox" 
        name={name} 
        checked={isActive}
        onChange={handleToggle}
      />
    </div>
  );
};

export function WorkPage() {
  const [newItem, setNewItem] = useState('');
  const [sortByStatus, setSortByStatus] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, label: "Learn React", done: true },
    { id: 2, label: "Code a todo list", done: false },
    { id: 3, label: "Learn something else", done: false }
  ]);
  const [draggedItem, setDraggedItem] = useState<Todo | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const addItem = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newItem.trim()) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 9999) + 10,
          label: newItem,
          done: false
        }
      ]);
      setNewItem('');
    }
  };

  const markAsDoneOrUndone = (item: Todo) => {
    setTodos(todos.map(todo => 
      todo.id === item.id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteItemFromList = (item: Todo) => {
    setTodos(todos.filter(todo => todo.id !== item.id));
  };

  const clickOnToggle = (active: boolean) => {
    setSortByStatus(active);
  };

  const todoByStatus = () => {
    if (!sortByStatus) {
      return todos;
    }
    const notDoneArray = todos.filter(item => !item.done);
    const doneArray = todos.filter(item => item.done);
    return [...notDoneArray, ...doneArray];
  };

  // 拖拽处理函数
  const handleDragStart = (e: React.DragEvent, item: Todo) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.style.opacity = '1';
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (!draggedItem) return;

    const currentTodos = todoByStatus();
    const dragIndex = currentTodos.findIndex(todo => todo.id === draggedItem.id);
    
    if (dragIndex === dropIndex) return;

    // 重新排列数组
    const newTodos = [...currentTodos];
    const [removed] = newTodos.splice(dragIndex, 1);
    newTodos.splice(dropIndex, 0, removed);

    setTodos(newTodos);
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  return (
    <Box
      sx={{
        margin: "4rem auto",
        padding: "2rem 3rem 3rem",
        maxWidth: "500px",
        background: "#FF6666",
        color: "#FFF",
        boxShadow: "-20px -20px 0px 0px rgba(100,100,100,.1)",
        fontFamily: "'Quicksand', sans-serif",
        "& *": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        },
        // Keyframes for strike animation
        "@keyframes strikeitem": {
          to: { width: "calc(100% + 1rem)" }
        },
        // Main heading styles
        "& h1": {
          fontWeight: "normal",
          fontSize: "2.6rem",
          letterSpacing: "0.05em",
          borderBottom: "1px solid rgba(255,255,255,.3)",
          margin: 0,
          "& span": {
            display: "block",
            fontSize: "0.8rem",
            marginBottom: "0.7rem",
            marginLeft: "3px",
            marginTop: "0.2rem"
          }
        },
        // Empty list message
        "& .emptylist": {
          marginTop: "2.6rem",
          textAlign: "center",
          letterSpacing: ".05em",
          fontStyle: "italic",
          opacity: 0.8
        },
        // List styles
        "& ul": {
          marginTop: "2.6rem",
          listStyle: "none",
          padding: 0
        },
        "& li": {
          display: "flex",
          margin: "0 -3rem 4px",
          padding: "1.1rem 3rem",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255,255,255,0.1)",
          transition: "all 0.3s ease",
          cursor: "grab",
          position: "relative",
          "&:active": {
            cursor: "grabbing"
          },
          "&.drag-over": {
            background: "rgba(255,255,255,0.2)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          },
          "&.dragging": {
            opacity: 0.5,
            transform: "rotate(2deg)"
          }
        },
        "& .drag-handle": {
          color: "rgba(255,255,255,0.7)",
          cursor: "grab",
          marginRight: "0.5rem",
          "&:hover": {
            color: "#FFF"
          }
        },
        "& .item-content": {
          display: "flex",
          alignItems: "center",
          flexGrow: 1
        },
        "& .actions": {
          flexShrink: 0,
          paddingLeft: "0.7em",
          display: "flex",
          alignItems: "center"
        },
        "& .label": {
          position: "relative",
          transition: "opacity .2s linear"
        },
        "& .done .label": {
          opacity: 0.6,
          "&:before": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "-.5rem",
            display: "block",
            width: 0,
            height: "1px",
            background: "#FFF",
            animation: "strikeitem .3s ease-out 0s forwards"
          }
        },
        "& .btn-picto": {
          border: "none",
          background: "none",
          cursor: "pointer",
          color: "#FFF",
          fontSize: "1.2rem",
          padding: "0.2rem",
          marginLeft: "0.5rem",
          transition: "opacity 0.2s ease",
          "&:hover": {
            opacity: 0.7
          }
        },
        // Form styles
        "& .form-wrapper": {
          marginTop: "3rem",
          "& label": {
            minWidth: "100%",
            marginBottom: ".5rem",
            fontSize: "1.3rem",
            display: "block"
          },
          "& .form-input-group": {
            display: "flex",
            flexWrap: "wrap",
            "& input": {
              flexGrow: 1,
              border: "none",
              background: "#f7f1f1",
              padding: "0 1.5em",
              fontSize: "1.1rem",
              fontFamily: "'Quicksand', sans-serif",
              height: "3rem",
              outline: "none"
            },
            "& button": {
              padding: "0 1.3rem",
              border: "1px solid rgba(255,255,255,.3)",
              background: "#FF6666",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
              marginLeft: "5px",
              cursor: "pointer",
              transition: "background .2s ease-out",
              fontFamily: "'Quicksand', sans-serif",
              height: "3rem",
              "&:hover": {
                background: "#FF5E5E"
              }
            }
          }
        },
        // Toggle button styles
        "& .togglebutton-wrapper": {
          marginTop: "1em",
          "& label": {
            display: "flex !important",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "0 !important"
          },
          "& input": {
            position: "absolute",
            left: "-9999px"
          },
          "& .togglebutton-label": {
            fontSize: ".8rem",
            letterSpacing: ".1em"
          },
          "& .tooglebutton-box": {
            position: "relative",
            display: "block",
            marginLeft: "0.6em",
            width: "38px",
            height: "22px",
            background: "white",
            borderRadius: "999px",
            cursor: "pointer",
            "&:before": {
              content: "''",
              position: "absolute",
              top: "2px",
              left: "2px",
              display: "block",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FF6666",
              opacity: 0.7,
              transition: "all .2s ease-in-out"
            }
          },
          "&.togglebutton-checked .tooglebutton-box:before": {
            left: "calc(100% - 4px - 16px)",
            opacity: 1
          }
        }
      }}
    >
      <Typography component="h1" variant="h1">
        Todo List
        <span>Get things done, one item at a time.</span>
      </Typography>
      
      {todos.length > 0 ? (
        <>
          <ul>
            {todoByStatus().map((item, index) => (
              <li 
                key={item.id} 
                className={`${item.done ? 'done' : ''} ${dragOverIndex === index ? 'drag-over' : ''} ${draggedItem?.id === item.id ? 'dragging' : ''}`}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div className="item-content">
                  <DragIndicatorIcon className="drag-handle" fontSize="small" />
                  <span className="label">{item.label}</span>
                </div>
                <div className="actions">
                  <button 
                    className="btn-picto" 
                    type="button" 
                    onClick={() => markAsDoneOrUndone(item)}
                    aria-label={item.done ? 'Undone' : 'Done'}
                    title={item.done ? 'Undone' : 'Done'}
                  >
                    {item.done ? <TaskAltIcon /> : <PanoramaFishEyeIcon />}
                  </button>
                  <button 
                    className="btn-picto" 
                    type="button" 
                    onClick={() => deleteItemFromList(item)}
                    aria-label="Delete" 
                    title="Delete"
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ToggleButton 
            label="Move done items at the end?" 
            name="todosort" 
            onClicked={clickOnToggle} 
          />
        </>
      ) : (
        <Typography className="emptylist">Your todo list is empty.</Typography>
      )}
      
      <div className="form-wrapper">
        <label htmlFor="newitem">Add to the todo list</label>
        <div className="form-input-group">
          <input 
            type="text" 
            name="newitem" 
            id="newitem" 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button type="button" onClick={() => addItem()}>
            Add item
          </button>
        </div>
      </div>
    </Box>
  );
}