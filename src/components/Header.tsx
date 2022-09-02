import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import "../styles/header.css";

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="flex justify-between w-full">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLOMMOR
            </Typography>
            <ShoppingCartIcon />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
