import PropTypes from "prop-types";
import { Typography, Box, IconButton, Drawer, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const ImprovedText = ({ onClose, open }) => {
    const [sections, setSections] = useState({
        tailoredSuggestions: { showDescription: true, switchOn: false },
        spellcheckGrammar: { showDescription: true, switchOn: false },
        wordingReadability: { showDescription: true, switchOn: false },
        recommendations: { showDescription: true, switchOn: false },
      });

    const handleToggle = (section) => {
        setSections((prevSections) => ({
          ...prevSections,
          [section]: {
            ...prevSections[section],
            showDescription: !prevSections[section].showDescription,
            switchOn: !prevSections[section].switchOn,
          },
        }));
      };
      const descriptions = {
        tailoredSuggestions: "Receive relevant examples as you type that will help you describe your job responsibilities and achievements.",
        spellcheckGrammar: "Make sure you look professional and don’t have any mistakes in your writing.",
        wordingReadability: "Explain yourself better, avoid repetition and improve the overall readability.",
        recommendations: "Get content tips, suggestions and alternative ways to express yourself."
      };
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: "80%",
          maxWidth: 300,
          height: "100%",
          top: 64, // Height of AppBar
          zIndex: 1100, // Lower than the mini drawer
          position: "fixed",
          left: 0,
          transition: (theme) =>
            theme.transitions.create("transform", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          transform: open ? "translateX(0)" : "translateX(-100%)",
          marginLeft: "15rem",
        },
      }}
    >
      <Box sx={{ width: 300, padding: 2, bgcolor: "background.paper" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Improved Text</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {Object.keys(sections).map((section, index) => (
        <Box key={index} mb={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography
              gutterBottom
              onClick={() => handleToggle(section)}
              style={{ cursor: 'pointer' }}
            >
              {section.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </Typography>
            <Switch
              checked={sections[section].switchOn}
              onChange={() => handleToggle(section)}
            />
          </Box>
          {sections[section].showDescription && (
            <Typography style={{fontSize:"13px"}} variant="body2" gutterBottom>
              {descriptions[section]}
            </Typography>
          )}
          <hr style={{ marginBottom: '2rem' }} />
        </Box>
      ))}
     
      </Box>
    </Drawer>
  );
};

ImprovedText.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ImprovedText;
