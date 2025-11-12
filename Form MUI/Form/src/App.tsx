// src/App.tsx
import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import PumpReplacementForm from "./components/PumpReplacementForm";
// import theme from "./theme"; // optional if you create a custom MUI theme

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <PumpReplacementForm />
    </Fragment>
  );
}
