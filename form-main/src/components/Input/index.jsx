import Container from "./styles";

export const Input = ({ name, label, id, type, formData, handleChange }) => {
  return (
    <Container>
      <label htmlFor={id}>
        {label}
        <span>*</span>
      </label>
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
      />
    </Container>
  );
};
