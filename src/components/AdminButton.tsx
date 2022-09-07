import { Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/admin")} size="large" color="secondary">
      Till Admin{" "}
    </Button>
  );
}
