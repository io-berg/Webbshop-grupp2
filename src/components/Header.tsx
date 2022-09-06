import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import "../styles/header.css";
import CartIcon from "./CartIcon";

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
            {!admin ? <CartIcon /> : null}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
