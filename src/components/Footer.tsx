import { FC } from "react";
import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";

const Footer: FC = ({}) => {
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
