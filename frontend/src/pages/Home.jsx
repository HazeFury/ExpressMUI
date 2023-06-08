/* eslint-disable import/no-extraneous-dependencies */
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/login">
        <Button variant="contained">Login</Button>
      </Link>
    </div>
  );
}
