import styled from "styled-components";
import { COLORS } from "../../services/theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  input {
    font-size: 18px;
    border-radius: 8px;
    height: 50px;
    padding-left: 24px;
    outline: none;
    border: 1px solid ${COLORS.neutral.grey500};
    cursor: pointer;
    width: 100%;
  }
  input:focus {
    border: 1px solid ${COLORS.primary.green600};
    outline: none;
  }
  input:hover {
    border-color: ${COLORS.primary.green600};
    outline: none;
  }
`;
