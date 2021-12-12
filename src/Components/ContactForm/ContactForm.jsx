import React from "react";
import { FormTextField, RowContainer, Form } from "./ContactForm.styles";
import Button from "../../Components/Button/Button";

export default function ContactForm() {
  return (
    <>
      <Form action="">
        <RowContainer>
          <FormTextField
            required
            id="outlined-required"
            label="Name"
            size="small"
            defaultValue=""
          />
          <FormTextField
            required
            id="outlined-required"
            label="Email"
            size="small"
            defaultValue=""
          />
        </RowContainer>
        <FormTextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
        />
        <Button text="Submit" />
      </Form>
    </>
  );
}
