import {useState} from "react";
import {Tab, Box} from "@mui/material";
import { TabPanel, TabContext, TabList } from '@mui/lab';

export const UITabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'background.paper' }}>
          <TabList onChange={handleChange} aria-label="lis of Tabs" centered>
            <Tab label="Home" value="1" />
            <Tab label="History" value="2" />
            <Tab label="Members" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
