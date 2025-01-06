import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { hideModal } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext'
import { useDispatch } from 'react-redux'

export default function UpdateAccount() {
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { updatePassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // @ts-ignore
  function handleSubmit(e) {
    e.preventDefault()
    // @ts-ignore
    if (!passwordRef.current || !passwordConfirmRef.current) {
      return setError('Password fields are not filled in');
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    if (passwordRef.current.value.length < 8) {
      return setError('Password should be at least 8 characters long')
    }
    const promises = []
    setLoading(true)
    setError('')

    // @ts-ignore
    if (passwordRef.current.value) {
      // @ts-ignore
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        dispatch(hideModal());
      })
      .catch((error) => {
        setError(`Failed to update account. The error is: ${error}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                // @ts-ignore
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>New Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                // @ts-ignore
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}