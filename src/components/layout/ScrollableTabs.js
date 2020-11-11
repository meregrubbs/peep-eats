import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Tab Imports
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import CategoryItems from './CategoryItems';
import CategoryTabs from './CategoryTabs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component={'div'} variant={'body2'}>
          {children}
        </Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs'
          className='container'
        >
          <CategoryTabs />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className='container'>
        <CategoryItems />
      </TabPanel>
      <TabPanel value={value} index={1} className='container'>
        <CategoryItems />
      </TabPanel>
      <TabPanel value={value} index={2} className='container'>
        <CategoryItems />
      </TabPanel>
      <TabPanel value={value} index={3} className='container'>
        <CategoryItems />
      </TabPanel>
      <TabPanel value={value} index={4} className='container'>
        <CategoryItems />
      </TabPanel>
      <TabPanel value={value} index={5} className='container'>
        <CategoryItems />
      </TabPanel>
    </div>
  );
}
