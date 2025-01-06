import { Card } from 'react-bootstrap'
import CustomLink from '../CustomLink/CustomLink'
import { displayLogin } from '../../../redux-store/auth';
import { useDispatch } from 'react-redux'

export default function PremiumContent() {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Premium Content</h2>
          <div style={{ textAlign:'center' }}>
            Please <CustomLink inline={true} onClick={() => { dispatch(displayLogin()) }}>log in</CustomLink> to access this content.
          </div>
        </Card.Body>
      </Card>
    </>
  )
}