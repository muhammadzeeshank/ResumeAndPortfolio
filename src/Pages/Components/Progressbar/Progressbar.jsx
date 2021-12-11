import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
function LinearProgressWithLabel(props) {
  return (
    <>
      <Box sx={{ width: "100%", mr: 1 }}>
        <Typography sx={{ fontSize: "14px", fontWeight: "500" }} variant="h3">
          {props.heading}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={props.value}
            className={props.className}
          />
        </Box>

        <Box sx={{ minWidth: 35 }}>
          <Typography color={props.valuecolor} variant="body2">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export const CustomProgressbar = styled(LinearProgressWithLabel)`
  &.MuiLinearProgress-root {
    background-color: #dfdfdf;
    border-radius: 6px;
    height: 5px;
  }
  .MuiLinearProgress-bar {
    background-color: ${(props) => props.$barcolor || null};
  }
`;
