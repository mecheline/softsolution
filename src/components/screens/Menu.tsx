import { Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "24px",
          color: "#081735",
        }}
      >
        No Data Available, Try again Later
      </Typography>
    </Box>
  );
};

export default Menu;
