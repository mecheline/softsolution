import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Box,
  IconButton,
  ImageListItemBar,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  const title = "Menu";
  const tabLabels = ["All Category", "Breakfast", "Lunch", "Dinner"];

  const rightTabContentsFunc = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return [
      <Box sx={{ width: "100%" }}>
        <ImageList
          variant={isMobile ? "standard" : "quilted"}
          cols={isMobile ? 1 : 4}
          rowHeight={isMobile ? "auto" : 121}
          gap={isMobile ? 8 : 4}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={isMobile ? 1 : item.cols || 1}
              rows={isMobile ? 1 : item.rows || 1}
            >
              <img
                {...srcset(
                  item.img,
                  isMobile ? window.innerWidth : 121,
                  item.rows,
                  item.cols
                )}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: isMobile ? "auto" : "100%" }}
              />
              <ImageListItemBar
                sx={{
                  backdropFilter: "blur(-5px)",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#1E293B",
                }}
                title={item.title}
                subtitle={`${item.qty} served`}
                actionIcon={
                  <IconButton
                    sx={{
                      //   color: "rgba(255, 255, 255, 0.54)",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#1E293B",
                    }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Noto Sans",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "#fff",
                      }}
                    >
                      ${item.price?.toFixed(2)}
                    </Typography>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>,
      <Box>
        <Typography>Item 2</Typography>
      </Box>,
      <Box>
        <Typography>Item 3</Typography>
      </Box>,
      <Box>
        <Typography>Item 4</Typography>
      </Box>,
    ];
  };
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Paper>
        <Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="h1"
              sx={{
                p: 2,
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              {title}
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="custom tabs example"
              variant="scrollable"
            >
              {tabLabels.map((label, index) => (
                <Tab
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "22px",
                    letterSpacing: "-0.1px",
                    "&:hover": {
                      color: "#6C5DD3",
                    },
                    "&.Mui-selected": {
                      color: "#6C5DD3",
                    },
                    MuiTabs: {
                      styleOverrides: {
                        indicator: {
                          backgroundColor: "red",
                        },
                      },
                    },
                  }}
                  key={index}
                  label={label}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
        {rightTabContentsFunc().map((content, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {content}
          </CustomTabPanel>
        ))}
      </Paper>
    </Box>
  );
}

const itemData = [
  {
    img: "./menu/Background1.svg",
    title: "Surf & Turf Gift Basket",
    category: "Breakfast",
    price: 89.24,
    qty: 456,
    rows: 2,
    cols: 3,
  },
  {
    img: "./menu/Background2.svg",
    title: "Shaking Beef Tri-Tip",
    category: "Breakfast",
    price: 69.46,
    qty: 456,
    rows: 2,
    cols: 1,
  },
  {
    img: "./menu/Background3.svg",
    title: "BBQ Rib Dinner",
    category: "Breakfast",
    price: 69.21,
    qty: 456,
    rows: 2,
    cols: 1,
  },
  {
    img: "./menu/Background4.svg",
    title: "Chicken & Ribs Combo",
    category: "Breakfast",
    price: 98.49,
    qty: 456,
    rows: 2,
    cols: 1,
  },
  {
    img: "./menu/Background5.svg",
    title: "Fried Chicken Dinne",
    category: "Breakfast",
    price: 83.56,
    qty: 456,
    rows: 2,
    cols: 1,
  },
  {
    img: "./menu/Background6.svg",
    title: "Dark & Stormy",
    category: "Breakfast",
    price: 90.58,
    rows: 2,
    cols: 1,
  },
];
