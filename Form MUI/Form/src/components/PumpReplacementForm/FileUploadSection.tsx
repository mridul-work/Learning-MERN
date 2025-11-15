import React, { useState } from "react";
import { Box, Button, Typography, Stack, Alert } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const MAX_FILE_SIZE_MB = 10;

const FileUploadBox: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);
    const validFiles: File[] = [];
    let hasError = false;

    selectedFiles.forEach((file) => {
      const sizeMB = file.size / (1024 * 1024);
      if (sizeMB > MAX_FILE_SIZE_MB) {
        hasError = true;
      } else {
        validFiles.push(file);
      }
    });

    if (hasError) {
      setError(
        `Some files exceeded ${MAX_FILE_SIZE_MB} MB and were not added.`
      );
    } else {
      setError(null);
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  return (
    <Box
      sx={{
        border: "1px dashed #ccc",
        borderRadius: 2,
        p: 3,
        textAlign: "center",
        backgroundColor: "#fafafa",
        color: "#555",
      }}
    >
      <CloudUploadIcon sx={{ fontSize: 40, color: "#999" }} />
      <Typography variant="body2" sx={{ mt: 1 }}>
        Click to upload or drag
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Max {MAX_FILE_SIZE_MB} MB per file
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#d32f2f",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
        >
          Choose Files
          <input
            type="file"
            hidden
            multiple
            onChange={handleFileChange}
            accept="*"
          />
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2, fontSize: "0.8rem" }}>
          {error}
        </Alert>
      )}

      {files.length > 0 ? (
        <Stack spacing={0.5} sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <Typography key={index} variant="caption">
              {file.name}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 2 }}
        >
          No documents uploaded
        </Typography>
      )}
    </Box>
  );
};

export default FileUploadBox;
