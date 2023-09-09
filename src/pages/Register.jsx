import { useFormik } from "formik";
import React from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import * as yup from "yup";
const Register = () => {
  const validation = useFormik({
    initialValues: {
      first: "",
      last: "",
      birthday: "",
      sexual: "",
    },
    validationSchema: yup.object().shape({
      first: yup.string().matches(/[^0-9]+/g, "No number"),
      last: yup.string().matches(/[^0-9]+/g, "No number"),
      sexual: yup
        .string()
        .oneOf(["fmale", "male", "other"], "Out of value range"),
      birthday: yup.date(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form>
      {/* Full Name = First + Last */}
      <FormGroup>
        <InputGroup>
          <Input
            value={validation.values.first}
            onChange={validation.handleChange}
            name="first"
            placeholder="Enter first name..."
            invalid={validation.errors.first}
          />

          <Input
            value={validation.values.last}
            onChange={validation.handleChange}
            name="last"
            placeholder="Enter last name..."
            invalid={validation.errors.last}
          />
          <FormFeedback>
            {validation.errors.first}
            {validation.errors.last}
          </FormFeedback>
        </InputGroup>
      </FormGroup>
      {/* Gioi tinh + Tuoi */}
      <FormGroup>
        <Input name="sexual" type="select">
          <option value="other">Others</option>
          <option value="male">Nam</option>
          <option value="fmale">Nu</option>
        </Input>
        <Input
          name="birthday"
          style={{
            marginTop: "4px",
          }}
          type="number"
          placeholder="Enter age..."
        />
      </FormGroup>
      {/* Birthday */}
      <FormGroup>
        <Input type="date" placeholder="Enter birthday" />
      </FormGroup>
      <Button color="primary" outline onClick={validation.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
