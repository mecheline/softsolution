import { Box, Divider, Paper, Typography } from "@mui/material";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

import ApexChartComponent from "../dashboardComponents/ApexChartComponent";

import Map from "../dashboardComponents/Map";
import Customers from "../dashboardComponents/Customers";
import QuiltedImageList from "../dashboardComponents/Menu";

const data = [
  {
    icon: <SummarizeOutlinedIcon />,
    title: "Total Menu",
    value: "345",
  },
  {
    icon: <AssessmentOutlinedIcon />,
    title: "Total Revenue",
    value: "$37,193.00",
  },
  {
    icon: <GroupsTwoToneIcon />,
    title: "Total Customer",
    value: "1349",
  },
  {
    icon: <ShoppingBagTwoToneIcon />,
    title: "Total Orders",
    value: "3,500",
  },
];

const barChartData = {
  series: [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 30, 40, 45],
    },
  ],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

const donutChartData = {
  series: [18, 14],
  labels: ["Daily customers", "Weekly new customers"],
};

const Dashboard = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: { xs: "46%", md: "23%" },
            p: 2,
            background: "",
          },
        }}
      >
        {data.map((item) => (
          <Paper elevation={4} key={item.title}>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: 1,
                  display: "inline-block",
                  borderRadius: 2,
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#64748B",
                  my: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "41.1px",
                  letterSpacing: "-0.8px",
                  color: "#1E293B",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
      {/* <Charts /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          columnGap: 2,
          rowGap: { xs: 2, md: 0 },
          my: 2,
        }}
      >
        <Paper sx={{ p: 2, width: { xs: "100%", md: "48%" } }}>
          <ApexChartComponent
            type="bar"
            series={barChartData.series}
            labels={barChartData.labels}
            title="$112,340"
            header="Revenue"
          />
        </Paper>

        <Paper sx={{ p: 2, width: { xs: "100%", md: "48%" } }}>
          <ApexChartComponent
            type="donut"
            series={donutChartData.series}
            labels={donutChartData.labels}
            header="Customers"
            subheader="Customers that buy our products"
          />
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          columnGap: 2,
        }}
      >
        <Paper sx={{ p: 2, width: { xs: "100%", md: "70%" } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "24px",
              color: "#081735",
            }}
          >
            Customer Map
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Map />
        </Paper>
        <Paper sx={{ p: 2, width: { xs: "100%", md: "30%" } }}>
          <Customers />
        </Paper>
      </Box>
      <Box>
        <QuiltedImageList />
      </Box>
    </Box>
  );
};

export default Dashboard;
