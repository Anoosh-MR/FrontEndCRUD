import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

export const Closeicon = styled(CloseIcon)`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const ModelBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
