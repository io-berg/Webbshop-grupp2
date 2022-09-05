import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import "../styles/header.css";

interface Props {
  admin?: boolean;
}

const Header: FC<Props> = ({ admin }) => {
  return (
    <AppBar position="static">
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
            {!admin ? <ShoppingCartIcon /> : null}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
