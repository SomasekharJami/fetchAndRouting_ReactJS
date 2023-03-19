// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {id, title, imgUrl, avatarUrl, author, topic} = itemDetails

  return (
    <Link className="linking_list" to={`/blogs/${id}`}>
      <li className="listEl">
        <img src={imgUrl} alt={topic} className="blogImg" />
        <div className="detailsCon">
          <p className="detailP">{topic}</p>
          <h1 className="detailH">{title}</h1>
          <div className="authorCon">
            <img className="authImg" src={avatarUrl} alt={author} />
            <p className="authP">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
