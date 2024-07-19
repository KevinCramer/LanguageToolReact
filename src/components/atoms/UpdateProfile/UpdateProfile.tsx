import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { hideModal } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext'
import { useDispatch } from 'react-redux'

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // @ts-ignore
  const { updatePassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // @ts-ignore
  function handleSubmit(e) {
    e.preventDefault()
    // @ts-ignore
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
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
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                // @ts-ignore
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                // @ts-ignore
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}