import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Alert, Avatar, Badge, Collapse, Menu, MenuItem } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CircularWithValueLabel from "./Progress";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    handleClose(); // Optionally close the menu after item is clicked
    handleDrawerClose();
  };

  const pages = [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardOutlinedIcon />,
      children: false,
    },
    {
      title: "Orders",
      href: "/orders",
      icon: <ShoppingBagOutlinedIcon />,
      childIcon: <KeyboardArrowRightOutlinedIcon />,
      children: true,
      childDropdown: [
        { title: "Item one", href: "" },
        { title: "Item two", href: "" },
      ],
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <AssessmentOutlinedIcon />,
      children: false,
    },
    {
      title: "Customer",
      href: "/customers",
      icon: <PeopleOutlinedIcon />,
      children: false,
    },
    {
      title: "Menu",
      href: "/menu",
      icon: <MenuOutlinedIcon />,
      children: false,
    },
  ];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {pages.map((text, index) => (
          <Link
            key={text.title}
            to={text.href}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding onClick={() => handleItemClick(index)}>
              <ListItemButton
                sx={{
                  backgroundColor:
                    activeIndex === index ? "#6C5DD3" : "transparent",
                  color: activeIndex === index ? "#fff" : "#8F95B2",
                  borderRadius: activeIndex === index ? "12px" : "",
                  "&:hover": {
                    backgroundColor: "#6C5DD3",
                    color: "#fff",
                    borderRadius: "12px",
                    "& .MuiListItemIcon-root": {
                      color: "#fff", // Change icon color on hover
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: activeIndex === index ? "white" : "inherit", // Set icon color to white when active
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} />
                {text.children ? (
                  <ListItemIcon
                    sx={{
                      color: activeIndex === index ? "white" : "inherit", // Set icon color to white when active
                    }}
                  >
                    {text.childIcon}
                  </ListItemIcon>
                ) : (
                  ""
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F8F9FB",
          borderRadius: "10px",
          mt: 4,
        }}
      >
        <Collapse in={open}>
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, backgroundColor: "#1018280A" }}
          >
            <Box>
              <CircularWithValueLabel days={86} />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "22px",
                  letterSpacing: "-0.1px",
                  color: "#272D37",
                }}
              >
                Subscription Plan
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "-0.1px",
                  color: "#5F6D7E",
                  mt: 2,
                  mb: 4,
                }}
              >
                Your Subscription plan will expire soon please upgrade!
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#6C5DD3",
                }}
              >
                Upgrade
              </Typography>
            </Box>
          </Alert>
        </Collapse>
      </Box>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          boxShadow: "none",
          py: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: { xs: "#6C5DD3", sm: "inherit" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <img src="/appBar/Logo.svg" />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                width: "40%",
              }}
            >
              <Typography
                sx={{
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "31.2px",
                }}
              >
                Hi, Taylor!
              </Typography>
              <Typography
                sx={{
                  color: "#718096",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22.4px",
                }}
                noWrap
              >
                Let’s check your store today
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                rowGap: 2,
                width: "60%",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchInput onSearch={handleSearch} />
              </Box>

              <Box sx={{ color: "#000" }}>
                <Badge
                  color="error"
                  badgeContent=""
                  overlap="circular"
                  variant="dot"
                >
                  <EmailOutlinedIcon />
                </Badge>
                <Badge
                  color="error"
                  sx={{ ml: { xs: 2, sm: 0, md: 2 } }}
                  badgeContent=""
                  overlap="circular"
                  variant="dot"
                >
                  <NotificationsOutlinedIcon />
                </Badge>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ mx: 1 }}>
                  <Avatar alt="Remy Sharp" src="./appBar/Avatar.svg" />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.3px",
                    color: "#111827",
                  }}
                >
                  Tynisha Obey
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            sx={{
              my: 2,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mr: 4,
            }}
          >
            <CloseOutlinedIcon onClick={handleDrawerClose} />
          </Box>

          {drawer}
          <Box
            sx={{
              mt: "60%",
              ml: 2,
            }}
          >
            <Box sx={{ width: "95%" }}>
              <SearchInput onSearch={handleSearch} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 2,
                my: 2,
              }}
            >
              <Box>
                <Avatar alt="Remy Sharp" src="./appBar/Avatar.svg" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Noto Sans",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.3px",
                  color: "#111827",
                }}
              >
                Tynisha Obey
              </Typography>
            </Box>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Box sx={{ p: 2 }}>
            <img src="/appBar/Logo.svg" />
          </Box>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
