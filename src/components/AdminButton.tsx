import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminButton() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row-reverse">
      <Button onClick={() => navigate("/admin")} size="large" color="secondary">
        Till Admin{" "}
      </Button>
    </div>
  );
}
