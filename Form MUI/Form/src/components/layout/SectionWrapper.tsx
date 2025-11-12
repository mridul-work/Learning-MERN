import { Box, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  title?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 0,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: "#333",
          }}
        >
          {title}
        </Typography>
      )}

      <Box>{children}</Box>
    </Paper>
  );
}
