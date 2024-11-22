import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// Define the props for our component
interface TabsLayoutProps {
  leftTabLabel: string;
  rightTabLabels: string[];
}

const TabsLayout: React.FC<TabsLayoutProps> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const leftTabLabel = "Home";
  const rightTabLabels = ["Profile", "Settings", "Help", "Logout"];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
      >
        {/* Left Tab */}
        <Tab label={leftTabLabel} />

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Tabs */}
        {rightTabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsLayout;
