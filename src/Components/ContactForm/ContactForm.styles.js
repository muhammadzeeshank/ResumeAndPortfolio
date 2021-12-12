import TextField from "@mui/material/TextField";
import { styled as stylefield } from "@mui/material/styles";
import { HoverColor } from "../../App.styles";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
// styled components was not working properly here that's why used styled from MUI
export const FormTextField = stylefield(TextField)({
  "& label.Mui-focused": {
    color: `${HoverColor}`,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: `${HoverColor}`,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `#dfdfdf`,
    },
    "&:hover fieldset": {
      borderColor: `${HoverColor}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${HoverColor}`,
    },
  },
});

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
