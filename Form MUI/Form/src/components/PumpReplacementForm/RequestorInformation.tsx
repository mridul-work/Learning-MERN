import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const RequestorInformation: React.FC = () => {
  const requestInfo = {
    location: "Hindalco Renukoot",
    contact: "John Smith",
    date: "2025-11-10",
    draft: "DRAFT-T1782677586077",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: '70%',
          border: "1px solid #ddd",
          borderRadius: 2,
          m: 2,
          p: 2,
          mb: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          1. Requestor Information
        </Typography>

        <Grid container spacing={2} columns={10} sx={{ padding: 2, margin: 2 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid size={{ xs: 12, sm: 3, md: 3.3 }}>
              <Paper
                sx={{ p: 2, background: "#f9fafb", border: "1px solid #eee" }}
              >
                <Typography variant="caption" color="text.secondary">
                  Location Name
                </Typography>
                <Typography variant="body1">{requestInfo.location}</Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 3, md: 3.3 }}>
              <Paper
                sx={{ p: 2, background: "#f9fafb", border: "1px solid #eee" }}
              >
                <Typography variant="caption" color="text.secondary">
                  Contact Person
                </Typography>
                <Typography variant="body1">{requestInfo.contact}</Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 3, md: 3.3 }}>
              <Paper
                sx={{ p: 2, background: "#f9fafb", border: "1px solid #eee" }}
              >
                <Typography variant="caption" color="text.secondary">
                  Date of Request
                </Typography>
                <Typography variant="body1">{requestInfo.date}</Typography>
              </Paper>
            </Grid>
          </div>

          <Grid size={12}>
            <Paper
              sx={{
                width: "100%",
                p: 2,
                background: "#fff8e1",
                border: "1px solid #fbc02d",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Draft Number
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: "#b28704" }}
              >
                {requestInfo.draft}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RequestorInformation;
