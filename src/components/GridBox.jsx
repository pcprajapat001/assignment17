import React, { useState, useRef } from "react";
import { Grid, TextField, Button, TextareaAutosize } from "@mui/material";

export const GridBox = () => {
  const [radius, setRadius] = useState(0);
  const [border, setBorder] = useState(0);
  const [storeborder, setStoreborder] = useState([]);
  const [data, setData] = useState([]);
  const [bc, setBc] = useState("");
  const [storbc, setStorbc] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  const [storeinput, setStoreinput] = useState([]);

  const textRef = useRef(null);

  const handleCopyText = () => {
    if (textRef.current) {
      textRef.current.select();
      document.execCommand("copy");
    }
  };

  const handleGenerateGrid = () => {
    // Convert radius and border to integers
    const parsedRadius = parseInt(radius, 10);
    const parsedBorder = parseInt(border, 10);

    // Validate input
    if (isNaN(parsedRadius) || isNaN(parsedBorder)) {
      alert("Please enter valid values for Radius and Border.");
      return;
    }

    // Update state arrays with new values
    setStoreborder([...storeborder, parsedBorder]);
    setStorbc([...storbc, bc]);
    setStoreinput([...storeinput, inputTxt]);
    setData([...data, parsedRadius]);
  };

  return (
    <Grid container spacing={2}>
      {/* Left Side */}
      <Grid item xs={6} sx={{ marginBottom: 2, padding: 2 }}>
        <TextField
          sx={{ marginBottom: 2 }}
          onChange={(e) => setRadius(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Border Radius"
        />
        <TextField
          sx={{ marginBottom: 2 }}
          onChange={(e) => setBorder(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Border"
        />
        <TextField
          sx={{ marginBottom: 2 }}
          onChange={(e) => setBc(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Background color"
        />
        <TextareaAutosize
          sx={{ marginBottom: 2 }}
          onChange={(e) => setInputTxt(e.target.value)}
          minRows={4}
          placeholder="Enter text..."
          style={{ width: "100%" }}
        />
        <Button
          onClick={handleGenerateGrid}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: 55, marginBottom: 2 }}
        >
          Generate Grid
        </Button>
      </Grid>

      {/* Right Side */}
      <Grid item xs={6}>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                style={{
                  height: "200px",
                  width: "400px",
                  borderRadius: item + "px", // Add "px" to the radius value
                  border: storeborder[index] + "px solid", // Add "px solid" to the border value
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: storbc[index],
                }}
              >
                {storeinput[index]}
                <Button
                  onClick={handleCopyText}
                  variant="contained"
                  color="secondary"
                  sx={{ marginTop: 2 }}
                >
                  Copy Text
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
