import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { constants } from '../../config';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    const toastId = toast('Signing in, Please wait..', {
      autoClose: false
    });

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        toast.update(toastId, {
          render: 'Signed in successfully',
          type: toast.TYPE.SUCCESS,
          autoClose: constants.toastTimer
        });
        history.push('/dashboard');
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
        toast.update(toastId, {
          render: error.message,
          type: toast.TYPE.ERROR,
          autoClose: constants.toastTimer
        });
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          value={email}
                          placeholder="Email"
                          autoComplete="email"
                          onChange={(event) => this.handleChange(event, 'email')}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          value={password}
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(event) => this.handleChange(event, 'password')}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12" align='center'>
                          <Button color="primary" className="px-4" disabled={isInvalid}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { LoginForm };
