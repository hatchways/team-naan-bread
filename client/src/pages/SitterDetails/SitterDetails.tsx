import { Grid, Avatar, Paper, Box, Typography, Divider } from '@material-ui/core';
import LoginForm from '../Login/LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import logo from '../../Images/logo.png';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import useStyles from './useStyles';

export default function SitterDetails(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.headerWrapper}>
          <Grid container elevation={6} component={Paper} square>
            <Box className={classes.header}>
              <LogoHeader logo={logo} />
              <AuthHeader linkTo="/signup" btnText="SIGN UP" linkText="BECOME A SITTER" />
            </Box>
          </Grid>
          <Grid container component={Paper} elevation={1} square className={classes.detailsCard}>
            <Grid item xs={12} sm={6} md={2} className={classes.avatarContainer}>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QarHFR-ztiFkrO-eO7N7FP9cdH3XTEOBdg&usqp=CAU"
                className={classes.large}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} className={classes.sitterBioContainer}>
              <Box className={classes.sitterBioItem}>
                <Typography variant="h5" className={classes.sitterAboutTypo} gutterBottom>
                  {' First Name Last Name'}
                </Typography>
                <Typography variant="body2" display="block" className={classes.sitterAboutTypo} gutterBottom>
                  {
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.'
                  }
                </Typography>
                <Typography variant="body1" component="h2" className={classes.sitterAboutTypo} gutterBottom>
                  {'Location:'}
                </Typography>
                <Typography variant="body1" component="h2" className={classes.sitterAboutTypo} gutterBottom>
                  {'Phone:'}
                </Typography>
                <Typography variant="body1" component="h2" className={classes.sitterAboutTypo} gutterBottom>
                  {'No of dogs sitted:'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} className={classes.imageListItem}>
              <ImageList rowHeight={200} className={classes.imageList} cols={3}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ImageListItem key={item}>
                    <img
                      src={`${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QarHFR-ztiFkrO-eO7N7FP9cdH3XTEOBdg&usqp=CAU'}?w=164&h=164&fit=crop&auto=format`}
                      alt={'item'}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
