// import React from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { Box, Button, Typography, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const initialItems = [
//   { id: '1', content: 'Section 1' },
//   { id: '2', content: 'Section 2' },
//   { id: '3', content: 'Section 3' },
// ];

// const Rearrange = ({ open, onClose }) => {
//   const [items, setItems] = React.useState(initialItems);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
    
//     const reorderedItems = Array.from(items);
//     const [movedItem] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, movedItem);

//     setItems(reorderedItems);
//   };

//   return (
//     <Box
//       sx={{
//         display: open ? 'block' : 'none',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         zIndex: 1300,
//         overflow: 'auto',
//         p: 2,
//       }}
//     >
//       <Box sx={{ backgroundColor: 'white', borderRadius: '8px', padding: 2, position: 'relative' }}>
//         <IconButton
//           onClick={onClose}
//           sx={{ position: 'absolute', top: 8, right: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ mb: 2 }}>Rearrange Sections</Typography>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(provided) => (
//               <Box
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 {items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided) => (
//                       <Box
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         sx={{
//                           padding: 2,
//                           marginBottom: 1,
//                           backgroundColor: 'lightgray',
//                           borderRadius: '4px',
//                         }}
//                       >
//                         {item.content}
//                       </Box>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </Box>
//             )}
//           </Droppable>
//         </DragDropContext>
//         <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//           Save Arrangement
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// Rearrange.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Rearrange;


import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const initialItems = [
  { id: '1', content: 'Section 1' },
  { id: '2', content: 'Section 2' },
  { id: '3', content: 'Section 3' },
];

const Rearrange = ({ open, onClose }) => {
  const [items, setItems] = React.useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <Box
      sx={{
        display: open ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1300,
        overflow: 'auto',
        p: 2,
      }}
    >
      <Box sx={{ backgroundColor: 'white', borderRadius: '8px', padding: 2, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>Rearrange Sections</Typography>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          padding: 2,
                          marginBottom: 1,
                          backgroundColor: 'lightgray',
                          borderRadius: '4px',
                        }}
                      >
                        {item.content}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Arrangement
        </Button>
      </Box>
    </Box>
  );
};

Rearrange.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Rearrange;
