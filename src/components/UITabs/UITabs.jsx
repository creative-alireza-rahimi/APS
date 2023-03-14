import { Members } from '../Members/Members';
import { Home } from '../Home/Home';
import { History } from '../History/History';
import {useState} from "react";
import {Tab, Box} from "@mui/material";
import { TabPanel, TabContext, TabList } from '@mui/lab';

export const UITabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value} >
        <Box sx={{ width: '100%' }}>
          <TabList onChange={handleChange} aria-label="list of Tabs" centered>
            <Tab label="Home" value="1" />
            <Tab label="History" value="2" />
            <Tab label="Members" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{<Home />}</TabPanel>
        <TabPanel value="2">{<History />}</TabPanel>
        <TabPanel value="3">{<Members />}</TabPanel>
      </TabContext>
    </Box>
  );
}
