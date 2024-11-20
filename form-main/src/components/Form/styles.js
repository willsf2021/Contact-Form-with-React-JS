import styled from "styled-components";
import { COLORS } from "../../services/theme";

export default styled.form`
  flex: 1;
  background-color: ${COLORS.neutral.white};
  padding: 24px;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 32px;
  @media (min-width: 768px) {
    max-width: 728px;
    padding: 40px;
    margin: 0px auto 24px;
  }
  div.contentForm {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  div.names {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    width: 100%;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      column-gap: 16px;
      align-items: center;
      div {
        flex-grow: 1;
        max-width: 100%;
      }
    }
  }
  span {
    color: ${COLORS.primary.green600};
    margin-left:8px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
  }

  div.containerInputs {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      column-gap: 16px;
      div {
        flex-grow: 1;
        max-width: 100%;
      }
    }
  }

  div.radioContainer {
    cursor: pointer;
    border: 1px solid ${COLORS.neutral.grey500};
    display: flex;
    align-items: center;
    column-gap: 16px;
    border-radius: 8px;
    height: 50px;
    padding-left: 8px;
    margin-top: 16px;
    &:hover {
      border-color: ${COLORS.primary.green600};
    }
    input {
      appearance: none;
      inset: 0;
    }
    label {
      font-size: 19px;
      cursor: pointer;
    }
    label.customRadio {
      position: relative;
      height: 15px;
      width: 15px;
      display: inline-block;
    }

    label.customRadio::after {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      border: 1px solid ${COLORS.neutral.grey500};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    label.customRadio::before {
      position: absolute;
      content: "";
      height: 10px;
      width: 10px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    input:checked + label.customRadio::before {
      background-color: ${COLORS.primary.green600};
    }
    input:checked + label.customRadio::after {
      border: 1px solid ${COLORS.primary.green600};
    }
  }

  .radioContainer:has(input:checked) {
    background-color: ${COLORS.primary.green200};
    border: 1px solid ${COLORS.primary.green600};
  }

  div.messageContainer {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    textarea {
      font-size: 18px;
      resize: none;
      border-radius: 8px;
      height: 50px;
      padding: 16px 24px;
      outline: none;
      border: 1px solid ${COLORS.neutral.grey500};
      cursor: pointer;
      height: 272px;
      @media (min-width: 768px) {
        height: 102px;
      }
    }
    textarea:focus {
      border: 1px solid ${COLORS.primary.green600};
      outline: none;
    }
    textarea:hover {
      border: 1px solid ${COLORS.primary.green600};
      outline: none;
    }
  }

  div.checkboxContainer {
    display: flex;
    align-items: center;
    label.text {
      max-width: 230px;
      cursor: pointer;
      @media (min-width: 768px) {
        max-width: max-content;
      }
    }
    @media (min-width: 768px) {
      margin: 16px 0px;
    }
    input {
      appearance: none;
    }
    label.checkboxConsentLabel {
      position: relative;
      height: 19px;
      width: 19px;
      margin-right: 16px;
      cursor: pointer;
    }

    label.checkboxConsentLabel::after {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      border: 1px solid ${COLORS.neutral.grey500};
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    input:checked + label.checkboxConsentLabel::after {
      background-color: ${COLORS.primary.green600};
      border-color: ${COLORS.primary.green600};
      content: "✓";
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${COLORS.primary.green600};
    color: ${COLORS.neutral.white};
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 19px;
    font-weight: 400;
    &:hover {
      background-color: ${COLORS.neutral.grey900};
    }
    @media (min-width: 768px) {
      height: 60px;
    }
  }
`;
