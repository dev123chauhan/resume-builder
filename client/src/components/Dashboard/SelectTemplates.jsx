import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import template1 from "../../assets/template 1.jpg";
import template2 from "../../assets/template 2.jpg";
import template3 from "../../assets/template 3.jpg";
import template4 from "../../assets/template 4.jpg";
import template5 from "../../assets/template 5.jpg";
import template6 from "../../assets/template 6.jpg";
import template7 from "../../assets/template 7.jpg";
import template8 from "../../assets/template 8.jpg";


const SelectTemplates = ({ open, onClose, onSelectTemplate, activeTemplateId }) => {
  const templates = [
    { id: 1, name: 'Template 1', image: template1 },
    { id: 2, name: 'Template 2', image: template2 },
    { id: 3, name: 'Template 3', image: template3 },
    { id: 4, name: 'Template 4', image: template4 },
    { id: 5, name: 'Template 5', image: template5 },
    { id: 6, name: 'Template 6', image: template6 },
    { id: 7, name: 'Template 7', image: template7 },
    { id: 8, name: 'Template 8', image: template8 },
  ];

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
          // position: 'absolute',
          position: 'fixed',
          left: 0,
          transition: theme => theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          marginLeft:"15rem"
        },
      }}
    >
      <Box sx={{ p: 2, height: '100%', overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Select Template</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          {templates.map((template) => (
            <Grid item xs={12} sm={6} key={template.id}>
              <Card
                sx={{
                  border: activeTemplateId === template.id ? '1px solid #027b9a !important' : 'none',
                  cursor: 'pointer',
                }}
              >
                <CardActionArea onClick={() => onSelectTemplate(template)} disableRipple>
                  <CardMedia
                    component="img"
                    height="140"
                    image={template.image}
                    alt={template.name}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Drawer>
  );
};

SelectTemplates.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelectTemplate: PropTypes.func.isRequired,
  activeTemplateId: PropTypes.number,
};

export default SelectTemplates;




