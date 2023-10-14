import React from "react";
import Alert from "@mui/material/Alert";

export const AlertBar = () => {
  return (
    <Alert severity="success" className="alert">
      This is a success alert — check it out!
    </Alert>
  );
};
