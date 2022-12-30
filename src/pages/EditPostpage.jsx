
import { useParams } from 'react-router-dom'

export const EditPostPage = () => {
 const {id} = useParams()
  return (
    <h2>
        Edit Post N {id}
    </h2>
  )
}
