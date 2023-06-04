import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Puff } from 'react-loader-spinner';
import CustomModal from '../../modals/CustomModal';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const closeModal = () => {
    setShowAlert(false);
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(value ? '' : 'Please enter your email.');
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value ? '' : 'Please enter your password.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!email || !password) {
      setEmailError(email ? '' : 'Please enter your email.');
      setPasswordError(password ? '' : 'Please enter your password.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    setIsLoading(true);
    
    setTimeout(() => {
        if ( email.toLowerCase().trim() == 'test@gmail.com' && password === '123' )
        {
            console.log("correct");
            navigate('/menu');
        }
            
        else
        {
            console.log("incorrect");
            setShowAlert(true);
        }
        setIsLoading(false);
    }, 2000);


    // clean fields and errors
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">

      <CustomModal type='error' title='Error' body='Wrong credentials!' show={showAlert} closeModal={closeModal} />

      <div className="login-container">
        <Form onSubmit={handleSubmit}>
          {(emailError || passwordError) && <Alert variant="danger">{emailError || passwordError}</Alert>}
          <Form.Group controlId="formEmail" className='mt-4'>
            <Form.Control
              disabled={isLoading}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              className={emailError ? 'is-invalid' : ''}
            />
          </Form.Group>
          <div className='mt-3'></div>
          <Form.Group controlId="formPassword">
            <Form.Control
              disabled={isLoading}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={passwordError ? 'is-invalid' : ''}
            />
          </Form.Group>
          <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading 
                ? <Puff color="#00BFFF" height={30} width={30} /> 
                : <Button style={{width: '100%'}} variant="primary" type="submit">Login</Button>
            }
          </div>
          <div>
            {   !isLoading
                ? <p><small>[ <b>email: </b>test@gmail.com <b>pass: </b>123 ]</small></p>
                : ''
            }
          </div>
          
        </Form>
      </div>
    </Container>
  );
};

export default Login;