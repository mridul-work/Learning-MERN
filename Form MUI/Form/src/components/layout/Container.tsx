import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        margin: "0 auto",
        padding: "0px 0px",
        backgroundColor: "#e0d0d0ff",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
}
