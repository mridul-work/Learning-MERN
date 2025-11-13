import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import FileUploadBox from "./FileUploadSection.tsx";

const ChangeDetailsSection: React.FC = () => {
  const changeTriggers = [
    "Customer requirement",
    "Supplier Induced",
    "Internal",
  ];

  const changeTypes = [
    "Manpower",
    "Material – Properties/Alloy/Grade",
    "Method / Process",
    "Supplier",
    "Other",
    "Machine / Equipment",
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: "70%",
          border: "1px solid #ddd",
          borderRadius: 2,
          m: 2,
          p: 5,
          mb: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          2. Change Details
        </Typography>

        <div style={{ padding: 4, margin: 4 }}>
          <Grid container spacing={2} columns={12}>
            {/* Affected Part/Project No */}
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Affected Part/Project No."
                fullWidth
                required
                size="small"
              />
            </Grid>

            {/* Change Description */}
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Change Description"
                fullWidth
                required
                multiline
                rows={3}
              />
            </Grid>

            {/* Change Trigger */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Change Trigger *
              </Typography>
              {changeTriggers.map((trigger) => (
                <Paper
                  key={trigger}
                  sx={{
                    mb: 1,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox color="error" />}
                    label={
                      <Typography variant="body2" sx={{ color: "#333" }}>
                        {trigger}
                      </Typography>
                    }
                  />
                </Paper>
              ))}
            </Grid>

            {/* Change Type */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Change Type *
              </Typography>
              {changeTypes.map((type) => (
                <Paper
                  key={type}
                  sx={{
                    mb: 1,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox color="error" />}
                    label={
                      <Typography variant="body2" sx={{ color: "#333" }}>
                        {type}
                      </Typography>
                    }
                  />
                </Paper>
              ))}
            </Grid>

            {/* Supporting Documents */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Supporting Documents
              </Typography>
              
              <FileUploadBox />
              
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default ChangeDetailsSection;
