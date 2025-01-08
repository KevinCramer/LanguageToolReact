import { Alert, Button, Card, Form } from 'react-bootstrap'
import { displayLogin, displaySignup } from '../../redux-store/auth'
import { useRef, useState } from 'react'
import CustomLink from '../atoms/CustomLink'
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux'

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const emailRef = useRef()
  // @ts-ignore
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  // @ts-ignore
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage('');
      setError('');
      setLoading(true);
      // @ts-ignore
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setError(`Failed to reset password. The error is: ${error}`);
    } 
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Password Reset</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              {/* @ts-ignore */}
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type='submit'>
              Reset Password
            </Button>
          </Form>
          <div>
            <CustomLink onClick={() => dispatch(displayLogin())}>
              Log In
            </CustomLink>
          </div>
        </Card.Body>
      </Card>
      <div>
        Need an account?
        <CustomLink onClick={() => dispatch(displaySignup())}>
              Sign Up
        </CustomLink>
      </div>
    </>
  )
}