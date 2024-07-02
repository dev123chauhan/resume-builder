
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TemplateIcon from '@mui/icons-material/Description';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CheckIcon from '@mui/icons-material/Check';
import AssistantIcon from '@mui/icons-material/Assistant';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import HistoryIcon from '@mui/icons-material/History';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: '250px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    paddingTop: theme.spacing(2),
  },
}));

const menuItems = [
  { text: 'Add section', icon: <AddIcon /> },
  { text: 'Rearrange', icon: <SwapVertIcon /> },
  { text: 'Templates', icon: <TemplateIcon /> },
  { text: 'Design & Font', icon: <FontDownloadIcon /> },
  { text: 'Improve text', icon: <TextsmsIcon /> },
  { text: 'Check', icon: <CheckIcon /> },
  { text: 'AI Assistant', icon: <AssistantIcon /> },
  { text: 'Download', icon: <DownloadIcon /> },
  { text: 'Share', icon: <ShareIcon /> },
  { text: 'History', icon: <HistoryIcon /> },
  { text: 'Branding', icon: <BrandingWatermarkIcon /> },
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <aside>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </aside>
    </div>
  );
}
