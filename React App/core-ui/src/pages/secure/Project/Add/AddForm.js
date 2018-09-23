import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { upper } from '../../../../lib/normalize';
import { required, alphaNumberic, name } from '../../../../lib/validate';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  FormText,
  Input,
  Label
} from 'reactstrap';

const renderField = ({
  input,
  label,
  type,
  inputplaceholder,
  meta: { error, touched }
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input {...input} type={type} placeholder={inputplaceholder} />
    {touched && <FormText className="help-block">{error}</FormText>}
  </FormGroup>
);


const AddForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="6" sm="12">
        <Card>
          <CardHeader>
            <strong>Add Project</strong>
          </CardHeader>
          <CardBody>
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Project Name *"
              inputplaceholder="Enter Project Name"
              normalize={upper}
              validate={[required, alphaNumberic, name]}
            />

            <Col xs="12" align="center">
              <Button type="save" color="primary">
                Save
              </Button>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </form>
  );
};

export default reduxForm({
  form: 'addProjectForm'
})(AddForm);
