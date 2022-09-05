import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  crumbs: { name: string; path: string }[];
}

const NavCrumbs: FC<Props> = ({ crumbs }) => {
  const hoverStyle = {
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <Breadcrumbs>
      {crumbs.map((crumb, index) => {
        if (index === crumbs.length - 1) {
          return (
            <Typography key={crumb.name} variant="body2" color="text.primary">
              {crumb.name}
            </Typography>
          );
        }
        return (
          <Link key={crumb.name} color="inherit" to={crumb.path}>
            <Typography color="text.secondary" variant="body2" sx={hoverStyle}>
              {crumb.name}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default NavCrumbs;
