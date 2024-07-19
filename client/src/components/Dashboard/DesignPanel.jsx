import PropTypes from 'prop-types';
import { useState } from 'react';
import { Slider, Select, MenuItem, Typography, Box, IconButton, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DesignPanel = ({ onClose, open, fontStyle, setFontStyle }) => {
  const [pageMargins, setPageMargins] = useState(5);
  const [sectionSpacing, setSectionSpacing] = useState(3);
  const [fontSize, setFontSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const colors = ['#000000', '#808080', '#008000', '#FFA500', '#0000FF', '#800080', '#008080', '#DAA520'];

  return (
    <Drawer 
      anchor="left"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          width: '80%',
          maxWidth: 300,
          height: '100%',
          top: 64, // Height of AppBar
          zIndex: 1100, // Lower than the mini drawer
          position: 'fixed',
          left: 0,
          transition: theme => theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          marginLeft: "15rem"
        },
      }}
    >
      <Box sx={{ width: 300, padding: 2, bgcolor: 'background.paper' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Design & Font</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography gutterBottom>PAGE MARGINS: {pageMargins}</Typography>
        <Slider
          value={pageMargins}
          onChange={(e, newValue) => setPageMargins(newValue)}
          min={0}
          max={10}
          step={1}
        />

        <Typography gutterBottom>SECTION SPACING: {sectionSpacing}</Typography>
        <Slider
          value={sectionSpacing}
          onChange={(e, newValue) => setSectionSpacing(newValue)}
          min={0}
          max={10}
          step={1}
        />

        <Typography gutterBottom>FONT STYLE</Typography>
        <Select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
          fullWidth
        >
         <MenuItem value="Roboto">Roboto</MenuItem>
          <MenuItem value="Open Sans">Open Sans</MenuItem>
          <MenuItem value="Lato">Lato</MenuItem>
          <MenuItem value="Montserrat">Montserrat</MenuItem>
          <MenuItem value="Poppins">Poppins</MenuItem>
          <MenuItem value="Raleway">Raleway</MenuItem>
          <MenuItem value="Rubik">Rubik</MenuItem>
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
          <MenuItem value="Georgia">Georgia</MenuItem>
          <MenuItem value="Courier New">Courier New</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
        </Select>

        <Typography gutterBottom>FONT SIZE: {fontSize.toUpperCase()}</Typography>
        <Slider
          value={['small', 'medium', 'large'].indexOf(fontSize)}
          onChange={(e, newValue) => setFontSize(['small', 'medium', 'large'][newValue])}
          min={0}
          max={2}
          step={1}
          marks
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => ['SMALL', 'MEDIUM', 'LARGE'][value]}
        />

        <Typography gutterBottom>COLORS</Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {colors.map((color) => (
            <Box
              key={color}
              width={30}
              height={30}
              bgcolor={color}
              borderRadius="50%"
              border={selectedColor === color ? '2px solid #000' : 'none'}
              onClick={() => setSelectedColor(color)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
        <Typography variant="body2" mt={1}>Use custom color</Typography>
      </Box>
    </Drawer>
  );
};

DesignPanel.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  setFontStyle: PropTypes.func.isRequired,
};

export default DesignPanel;
