import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,

  Typography,
//   TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  Button,
  Grid,
  Slider,
  FormControlLabel,
//   Divider
} from '@mui/material';
import { ColorPicker } from 'material-ui-color';

function Settings({ onSettingsChange }) {
  const [settings, setSettings] = useState({
    fontFamily: 'Arial',
    fontSize: 12,
    primaryColor: '#1976d2',
    secondaryColor: '#f50057',
    showPhoto: true,
    layout: 'classic',
    spacing: 2,
  });

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings({ ...settings, [field]: value });
    onSettingsChange({ ...settings, [field]: value });
  };

  const handleColorChange = (color, field) => {
    setSettings({ ...settings, [field]: color.css.backgroundColor });
    onSettingsChange({ ...settings, [field]: color.css.backgroundColor });
  };

  return (
    <Box elevation={3} sx={{ p: 3,  my: 10 }}>
      <Typography variant="h5" gutterBottom>Resume Settings</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Font Family</InputLabel>
            <Select
              value={settings.fontFamily}
              onChange={handleChange('fontFamily')}
              label="Font Family"
            >
              <MenuItem value="Arial">Arial</MenuItem>
              <MenuItem value="Roboto">Roboto</MenuItem>
              <MenuItem value="Times New Roman">Times New Roman</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Font Size</InputLabel>
            <Select
              value={settings.fontSize}
              onChange={handleChange('fontSize')}
              label="Font Size"
            >
              {[10, 11, 12, 13, 14, 16].map(size => (
                <MenuItem key={size} value={size}>{size}px</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Primary Color</Typography>
          <ColorPicker
            value={settings.primaryColor}
            onChange={(color) => handleColorChange(color, 'primaryColor')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Secondary Color</Typography>
          <ColorPicker
            value={settings.secondaryColor}
            onChange={(color) => handleColorChange(color, 'secondaryColor')}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Layout</InputLabel>
            <Select
              value={settings.layout}
              onChange={handleChange('layout')}
              label="Layout"
            >
              <MenuItem value="classic">Classic</MenuItem>
              <MenuItem value="modern">Modern</MenuItem>
              <MenuItem value="creative">Creative</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom>Spacing</Typography>
          <Slider
            value={settings.spacing}
            onChange={handleChange('spacing')}
            step={0.5}
            marks
            min={1}
            max={4}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={settings.showPhoto}
                onChange={handleChange('showPhoto')}
              />
            }
            label="Show Photo"
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => onSettingsChange(settings)}>
          Apply Settings
        </Button>
      </Box>
    </Box>
  );
}
Settings.propTypes = {
    onSettingsChange: PropTypes.func.isRequired,
  };
export default Settings;