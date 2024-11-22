import { Box, Typography } from "@mui/material";

const customerData = [
  {
    photo: "./customers/photo1.svg",
    Name: "Ana Black",
    email: "ana@gmail.com",
  },
  {
    photo: "./customers/photo2.svg",
    Name: "George Litz",
    email: "georgelitz@gmail.com",
  },
  {
    photo: "./customers/photo3.svg",
    Name: "John Miller",
    email: "jmiller@gmail.com",
  },
  {
    photo: "./customers/photo4.svg",
    Name: "Jane Jonhson",
    email: "jj@gmail.com",
  },
  {
    photo: "./customers/photo5.svg",
    Name: "Mezei Ágnes",
    email: "fefekartika@gmail.com",
  },
  {
    photo: "./customers/photo6.svg",
    Name: "Katona Beatrix",
    email: "edobram@gmail.com",
  },
  {
    photo: "./customers/photo7.svg",
    Name: "Halász Emese",
    email: "jiloputri@yahoo.com",
  },
];

const Customers = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "24px",
          color: "#081735",
          mb: 2,
        }}
      >
        Customers List
      </Typography>
      <Box>
        {customerData.map((customer) => (
          <Box
            key={customer.Name}
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 2,
              mb: 2,
            }}
          >
            <img src={customer.photo} />
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#1E293B",
                }}
              >
                {customer.Name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#64748B",
                }}
              >
                {customer.email}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Customers;
