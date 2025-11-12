import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { ExpandMore, DarkMode } from "@mui/icons-material";

const HeaderSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 32px",
        boxShadow: "0 4px 3px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        borderRadius: "10px",
      }}
    >
      {/* Left side */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#b71c1c", // dark red
            lineHeight: 1.2,
          }}
        >
          MOC Portal
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", marginTop: "2px" }}>
          Management of Change
        </Typography>
      </Box>

      {/* Right side */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton>
          <DarkMode sx={{ color: "#555" }} />
        </IconButton>

        <Button
          variant="outlined"
          endIcon={<ExpandMore />}
          sx={{
            color: "#b71c1c",
            borderColor: "#b71c1c",
            textTransform: "none",
            "&:hover": {
              borderColor: "#7f0000",
              backgroundColor: "rgba(183, 28, 28, 0.04)",
            },
          }}
        >
          John Smith
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderSection;
