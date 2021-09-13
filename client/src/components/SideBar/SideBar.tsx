import Button from '@material-ui/core/Button';
import { Badge, Avatar, Typography, Grid } from '@material-ui/core/';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import Chat from '../Chat/Chat';

const SideBar = (): JSX.Element => {
  const classes = useStyles();

  return <Grid item xs={12} sm={2} md={2}></Grid>;
};

export default SideBar;
