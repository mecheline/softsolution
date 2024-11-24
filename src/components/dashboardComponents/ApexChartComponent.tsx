import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Typography,
  useTheme,
} from "@mui/material";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { styled, alpha } from "@mui/material/styles";

// Define the props for our component
interface ChartProps {
  type: "bar" | "donut";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  labels?: string[];
  title?: string;
  height?: number;
  width?: string;
  header: string;
  subheader?: string;
}

export default function ApexChartComponent({
  type,
  series,
  labels,
  header,
  subheader,
  title = "",
  height = 250,
  width = "100%",
}: ChartProps) {
  const theme = useTheme();

  // Define the base options
  const baseOptions: ApexOptions = {
    chart: {
      type: type,
      height: height,
      width: width,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    theme: {
      mode: theme.palette.mode,
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.info.main,
    ],
    title: {
      text: title,
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: theme.palette.text.primary,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: theme.palette.text.secondary,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Extend the base options based on the chart type
  const options: ApexOptions = {
    ...baseOptions,
    ...(type === "bar"
      ? {
          xaxis: {
            categories: labels,
            labels: {
              style: {
                colors: theme.palette.text.secondary,
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: theme.palette.text.secondary,
              },
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              borderRadius: 4,
            },
          },
        }
      : {
          labels: labels,
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: "22px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    color: theme.palette.text.primary,
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    color: theme.palette.text.secondary,
                  },
                  total: {
                    show: true,
                    label: "Total",
                    color: theme.palette.text.primary,
                  },
                },
              },
            },
          },
        }),
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[300],
      }),
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "24px",
              color: "#081735",
            }}
          >
            {header}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#8F95B2",
            }}
          >
            {subheader}
          </Typography>
        </Box>

        <Box>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizOutlinedIcon />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <VisibilityTwoToneIcon />
              View
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <IosShareTwoToneIcon />
              Export
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <DeleteTwoToneIcon />
              Remove
            </MenuItem>
          </StyledMenu>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          width: width,
          height: height,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          height={height}
          width={width}
        />
      </Box>
    </Box>
  );
}
