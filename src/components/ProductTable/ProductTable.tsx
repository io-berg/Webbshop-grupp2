import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Product } from "../../utils/types";
import DesktopRow from "./DesktopRow";
import MobileRow from "./MobileRow";
import SortableTableColumnHead from "./SortableTableColumnHead";

interface Props {
  Products: Product[];
  handleDelete: (product: Product) => void;
  handleEdit: (product: Product) => void;
  handleAdd: () => void;
  mobile: boolean;
}

type SortByType = "id" | "name" | "price" | "amountInStock";
type SearchByType = "id" | "name" | "price" | "amountInStock" | "description";

const ProductTable: FC<Props> = ({
  Products,
  handleDelete,
  handleEdit,
  handleAdd,
  mobile,
}) => {
  const [sortBy, setSortBy] = useState<SortByType>("id");
  const [searchInput, setSearchInput] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByType>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const ProcessProducts = (products: Product[]) => {
    const filtered = products.filter((product) =>
      product[searchBy]
        .toString()
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );

    if (sortDirection === "asc") {
      return filtered.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    } else {
      return filtered.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
    }
  };

  const handleSort = (sortProperty: SortByType) => {
    if (sortBy === sortProperty) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(sortProperty);
    }
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "#efefef" }}
        >
          <Typography variant="h6">Produkter</Typography>
          <div className="flex justify-center align-center">
            <FormControl size="small">
              <InputLabel id="searchType-label">Sök Efter</InputLabel>
              <Select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value as SearchByType)}
                size="small"
                labelId="searchType-label"
                label="Search By"
                color="primary"
                sx={{ mr: 2, minWidth: 76, maxWidth: 90 }}
              >
                <MenuItem value={"id"}>Id</MenuItem>
                <MenuItem value={"name"}>Namn</MenuItem>
                <MenuItem value={"description"}>Beskrivning</MenuItem>
                <MenuItem value="price">Pris</MenuItem>
              </Select>
            </FormControl>
            <Input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              placeholder="Sök"
              size="small"
              sx={{ width: 90 }}
            />
            {mobile ? null : (
              <Button
                color="success"
                variant="outlined"
                sx={{ marginLeft: 2 }}
                onClick={handleAdd}
              >
                Ny Produkt
              </Button>
            )}
          </div>
        </Toolbar>
        <Table sx={{ minWidth: 300 }} size="small">
          <TableHead>
            <TableRow>
              <SortableTableColumnHead
                align="left"
                text="ID"
                active={sortBy === "id"}
                onClick={() => handleSort("id")}
                sortDirection={sortDirection}
              />
              <SortableTableColumnHead
                align="left"
                text="Namn"
                active={sortBy === "name"}
                onClick={() => handleSort("name")}
                sortDirection={sortDirection}
              />
              {mobile ? null : (
                <>
                  <TableCell>
                    <Typography variant="body2">BESKRIVNING</Typography>
                  </TableCell>
                  <SortableTableColumnHead
                    align="left"
                    text="Pris"
                    active={sortBy === "price"}
                    onClick={() => handleSort("price")}
                    sortDirection={sortDirection}
                  />
                  <SortableTableColumnHead
                    align="left"
                    text="Lager"
                    active={sortBy === "amountInStock"}
                    onClick={() => handleSort("amountInStock")}
                    sortDirection={sortDirection}
                  />
                </>
              )}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ProcessProducts(Products).map((product, idx) => {
              if (mobile)
                return (
                  <MobileRow
                    product={product}
                    key={idx}
                    gray={idx % 2 === 0}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              return (
                <DesktopRow
                  product={product}
                  key={idx}
                  gray={idx % 2 === 0}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
