import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {each} = props

  return (
    <Link to={`/blogs/${each.id}`}>
      <li className="details">
        <div className="image-container">
          <img src={each.imageUrl} className="image" alt="" />
        </div>
        <div>
          <div>
            <p>{each.topic}</p>
            <h1>{each.title}</h1>
          </div>
          <div className="details">
            <img src={each.avatarUrl} className="image1" />
            <p>{each.author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
