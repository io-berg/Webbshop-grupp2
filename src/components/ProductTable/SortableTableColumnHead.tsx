import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button, TableCell, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  align?: "inherit" | "left" | "center" | "right" | "justify";
  text: string;
  onClick: () => void;
  active: boolean;
  sortDirection: "asc" | "desc";
}

const SortableTableColumnHead: FC<Props> = ({
  align,
  text,
  sortDirection,
  active,
  onClick,
}) => {
  return (
    <TableCell align={align}>
      <Button
        variant="text"
        size="small"
        sx={{ display: "flex", justifyContent: "left", paddingLeft: 0 }}
        onClick={onClick}
      >
        <Typography variant="body2" color={"black"} sx={{ marginLeft: "0px" }}>
          {text}
        </Typography>
        {active ? (
          sortDirection === "asc" ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )
        ) : null}
      </Button>
    </TableCell>
  );
};

export default SortableTableColumnHead;
