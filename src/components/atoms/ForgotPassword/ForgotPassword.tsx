import { Alert, Button, Card, Form } from 'react-bootstrap'
import { displayLogin, displaySignup } from '../../../redux-store/login'
import { useRef, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
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
      setMessage('')
      setError('')
      setLoading(true)
      // @ts-ignore
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              {/* @ts-ignore */}
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <div style={{ color: 'rgb(13, 110,253)', 
              textDecoration: 'underline' }} onClick={() => dispatch(displayLogin())}>
            Log In</div>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <div style={{ color: 'rgb(13, 110,253)', 
          textDecoration: 'underline' }} onClick={() => dispatch(displaySignup())}>
            Sign Up</div>
      </div>
    </>
  )
}