import { FC } from "react";
import Box from "@mui/material/Box";

const Footer: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        position: "fixed",
        backgroundColor: "primary.main",
      }}
    >
      <p>Blommor</p>
    </Box>
  );
};

export default Footer;
