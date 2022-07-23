import './App.css';
import {Component} from 'react'


class App extends Component {
    state={
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

  render(){
    const {posts} = this.state

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