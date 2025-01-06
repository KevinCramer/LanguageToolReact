import { Alert, Button, Card, Form } from 'react-bootstrap'
import { displayLogin, hideModal } from '../../redux-store/auth'
import { useRef, useState } from 'react'
import CustomLink from '../atoms/CustomLink'
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux'

export default function Signup() {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // @ts-ignore
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // @ts-ignore
  async function handleSubmit(e) {
    e.preventDefault()
    // @ts-ignore
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    // if( emailRef.current && emailRef.current.value !== 'kevincramer1996@gmail.com') {
    //   return setError('Sorry we are currently not accepting signups to avoid incurring the ICO data protection fee. ')
    // }

    try {
      setError('')
      setLoading(true)
      // @ts-ignore
      await signup(emailRef.current.value, passwordRef.current.value)
      // @ts-ignore
      dispatch(hideModal());
    } catch(error) {
      setError(`Failed to create an account. The error is: ${error}`)
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              {/* @ts-ignore */}
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Already have an account?&nbsp;<CustomLink onClick={() => dispatch(displayLogin())}>
          Log In
        </CustomLink>
      </div>
    </>
  )
}