import { Alert, Button, Card, Form } from 'react-bootstrap'
import { hideModal } from '../../redux-store/auth';
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export default function DeleteAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const { deleteUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // @ts-ignore
  function handleSubmit(e) {
    e.preventDefault()
    // @ts-ignore

    const promises = []
    setLoading(true)
    setError('')

    // @ts-ignore
    promises.push(deleteUser())

    Promise.all(promises)
      .then(() => {
        dispatch(hideModal());
        navigate('/')
      })
      .catch((error) => {
        setError(`Failed to delete account. The error is: ${error}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Delete Account</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Button disabled={loading} type='submit'>
              Delete Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}