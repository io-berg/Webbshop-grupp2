import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminButton() {
  const navigate = useNavigate();
  return (
    <Box mt={2}>
      <Button
        onClick={() => navigate("/admin")}
        size="medium"
        color="secondary"
      >
        Till Admin{" "}
      </Button>
    </Box>
  );
}
