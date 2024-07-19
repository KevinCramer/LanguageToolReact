import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { displaySignup } from '../../../redux-store/auth'
import { useAuth } from '../../../contexts/AuthContext'
import { useDispatch } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef()
  const passwordRef = useRef()
  // @ts-ignore
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // @ts-ignore
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      // @ts-ignore
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch(error) {
      setError(`Failed to log in. The error is ${error}`)
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              {/* @ts-ignore */}
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              {/* @ts-ignore */}
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"
        style={{ display:'flex', flexDirection: 'row', justifyContent: 'center' }}>
        Need an account?&nbsp;<div style={{ color: 'rgb(13, 110,253)', 
          textDecoration: 'underline' }} onClick={() => dispatch(displaySignup())}>Sign Up</div>
      </div>
    </>
  )
}