import Container from "./styles";
import { Input } from "../Input";
import { useState, useEffect } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    queryType: "",
    message: "",
    checkboxConsent: false,
  });

  const handleQueryType = (event) => {
    setFormData({
      ...formData,
      queryType: event.target.value,
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("Os seguinte dados foram enviados ao Backend:", formData);
    }, 2000);
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <div className="contentForm">
        <div className="names">
          <Input
            setFormData={setFormData}
            formData={formData}
            handleChange={handleChange}
            type={"text"}
            id={"name"}
            label={"First Name"}
            name={"firstname"}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            handleChange={handleChange}
            type={"text"}
            id={"lastname"}
            label={"Last Name"}
            name={"lastname"}
          />
        </div>
        <Input
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          type={"email"}
          id={"email"}
          label={"Email address"}
          name={"email"}
        />
        <fieldset>
          <legend>
            Query Type<span>*</span>
          </legend>
          <div class="containerInputs">
            <div className="radioContainer">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                value={"General Enquiry"}
                onChange={handleQueryType}
              />

              <label className="customRadio" htmlFor="generalEnquiry"></label>
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </div>
            <div className="radioContainer">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value={"Support Request"}
                onChange={handleQueryType}
              />

              <label className="customRadio" htmlFor="supportRequest"></label>

              <label htmlFor="supportRequest">Support Request</label>
            </div>
          </div>
        </fieldset>
        <div className="messageContainer">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="checkboxContainer">
          <input
            type="checkbox"
            name="checkboxConsent"
            id="checkboxConsent"
            onChange={() => {
              setFormData((prevState) => {
                return {
                  ...prevState,
                  checkboxConsent: !prevState.checkboxConsent,
                };
              });
            }}
          />
          <label
            htmlFor="checkboxConsent"
            className="checkboxConsentLabel"
          ></label>
          <label htmlFor="checkboxConsent" className="text">
            I consent to beig contacted by the team <span>*</span>
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Container>
  );
};
