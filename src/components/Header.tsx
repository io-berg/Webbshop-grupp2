import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

interface Props {
  admin?: boolean;
}

const Header: FC<Props> = ({ admin }) => {
  return (
    <header>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters className="flex justify-between">
            <Link to="/">
              <Typography variant="h6" fontWeight="bold" letterSpacing={1.2}>
                BLOMMOR
              </Typography>
            </Link>
            {!admin ? <CartIcon /> : null}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
