import React from "react";
import PropTypes from "prop-types";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const initialItems = [
  { id: "1", content: "Section 1" },
  { id: "2", content: "Section 2" },
  { id: "3", content: "Section 3" },
];

const Item = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        padding: 2,
        marginBottom: 1,
        backgroundColor: "lightgray",
        borderRadius: "4px",
        ...style,
      }}
    >
      {content}
    </Box>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Rearrange = ({ open, onClose }) => {
  const [items, setItems] = React.useState(initialItems);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Box
      sx={{
        display: open ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1300,
        overflow: "auto",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: 2,
          position: "relative",
          width: "50%",
          maxWidth: "600px",
          height: "auto",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Rearrange Sections
        </Typography>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={items.map((item) => item.id)}>
            {items.map((item) => (
              <Item key={item.id} id={item.id} content={item.content} />
            ))}
          </SortableContext>
        </DndContext>
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



// import React from "react";
// import PropTypes from "prop-types";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { arrayMove, SortableContext } from "@dnd-kit/sortable";
// import { useSortable } from "@dnd-kit/sortable";
// import { Box, Button, Typography, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const initialItems = [
//   { id: "1", content: "Section 1" },
//   { id: "2", content: "Section 2" },
//   { id: "3", content: "Section 3" },
// ];

// const Item = ({ id, content }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id });

//   const style = {
//     transform: transform
//       ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
//       : undefined,
//     transition,
//   };

//   return (
//     <Box
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       sx={{
//         padding: 2,
//         marginBottom: 1,
//         backgroundColor: "lightgray",
//         borderRadius: "4px",
//         ...style,
//       }}
//     >
//       {content}
//     </Box>
//   );
// };

// Item.propTypes = {
//   id: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

// const Rearrange = ({ open, onClose }) => {
//   const [items, setItems] = React.useState(initialItems);

//   const onDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       setItems((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: open ? "block" : "none",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         zIndex: 1300,
//         overflow: "auto",
//         p: 2,
//         // display: "flex",
//         // alignItems: "center",
//         // justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: "white",
//           borderRadius: "8px",
//           padding: 2,
//           position: "relative",
//           width: "50%",
//           height: "50%",
//         }}
//       >
//         <IconButton
//           onClick={onClose}
//           sx={{ position: "absolute", top: 8, right: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Rearrange Sections
//         </Typography>
//         <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
//           <SortableContext items={items.map((item) => item.id)}>
//             {items.map((item) => (
//               <Item key={item.id} id={item.id} content={item.content} />
//             ))}
//           </SortableContext>
//         </DndContext>
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
