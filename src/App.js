import React from "react";
import { GridBox } from "./components/GridBox";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card sx={{ bgcolor: "#DAF7A6 " }}>
      <CardContent>
        <GridBox />
      </CardContent>
    </Card>
  );
}

export default App;
