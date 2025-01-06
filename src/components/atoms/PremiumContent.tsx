import { Card } from 'react-bootstrap'
import CustomLink from './CustomLink'
import { displayLogin } from '../../redux-store/auth';
import { useDispatch } from 'react-redux'

export default function PremiumContent() {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <Card.Body>
          <h2>Premium Content</h2>
          <div>
            Please <CustomLink inline={true} onClick={() => { dispatch(displayLogin()) }}>log in</CustomLink> to access this content.
          </div>
        </Card.Body>
      </Card>
    </>
  )
}