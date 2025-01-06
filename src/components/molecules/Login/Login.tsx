import { Alert, Button, Card, Form } from 'react-bootstrap'
import { displayForgotPassword, displaySignup, hideModal } from '../../../redux-store/auth'
import { useRef, useState } from 'react'
import CustomLink from '../../atoms/CustomLink/CustomLink'
import { resetPermission } from '../../../redux-store/lock'
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

  // @ts-ignore
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      // @ts-ignore
      await login(emailRef.current.value, passwordRef.current.value)
      dispatch(hideModal());
      dispatch(resetPermission())
    } catch(error) {
      setError(`Failed to log in. The error is: ${error}`)
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Log In</h2>
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
            <Button disabled={loading} type="submit">
              Log In
            </Button>
          </Form>
          <div>
            <CustomLink onClick={() => dispatch(displayForgotPassword())}>
              Forgot Password?
            </CustomLink>
          </div>
        </Card.Body>
      </Card>
      <div>
        New to LingoCommand?&nbsp;<CustomLink onClick={() => dispatch(displaySignup())}>
        Create account
        </CustomLink>
      </div>
    </>
  )
}