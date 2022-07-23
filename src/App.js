import './App.css';
import {Component} from 'react'


class App extends Component {
    state={
      counter: 0,
      posts: [
        {
          id: 1,
          title: "o espetacular miranha 2",
          body: "da gwen"
        },
        {
          id: 2,
          title: "miranha no miranhaverso",
          body: "do peter loiro"
        },
        {
          id: 3,
         title: "miranha",
          body: "do tio"
        }
      ]
    }
    timeoutUpdate = null

    componentDidMount(){
      this.handleTimeout()
    }

    componentDidUpdate(){
      this.handleTimeout()
    }

    componentWillUnmount(){
      clearTimeout(this.timeoutUpdate)
    }

    handleTimeout = () => {
      const {posts, counter} = this.state
      posts[0].title = 'sem miranha :('

      this.timeoutUpdate = setTimeout(() => {})
      setTimeout(() => {
        this.setState({posts, counter: counter + 1})
      }, 5000)
    }

  render(){
    const {posts, counter} = this.state

    return(
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
  )}
}
export default App;