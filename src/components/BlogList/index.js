// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsList: []}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imgUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: modifiedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="homeListCon">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachList => (
            <BlogItem key={eachList.id} itemDetails={eachList} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
