import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeWrapper from "./theme";

import Navbar from "./components/navigation";
import Dashboard from "./components/screens/Dashboard";
import Orders from "./components/screens/Orders";
import Analytics from "./components/screens/Analytics";
import Customers from "./components/screens/Customers";
import Menu from "./components/screens/Menu";

const drawerWidth = 240;

export default function App() {
  return (
    <ThemeWrapper>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mt: 4,
              backgroundColor: "#F8F9FB",
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeWrapper>
  );
}
