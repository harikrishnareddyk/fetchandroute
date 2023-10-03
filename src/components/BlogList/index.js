import {Component} from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Loader from 'react-loader-spinner'

import UserInfo from '../UserInfo'

import BlogsItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  componentDidMount = () => {
    this.getBlogsData()
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div>
        <UserInfo />
        <div>
          {isLoading ? (
            <Loader
              data-testid="loader"
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
            />
          ) : (
            <ul>
              {blogsData.map(each => (
                <BlogsItem each={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BlogList
