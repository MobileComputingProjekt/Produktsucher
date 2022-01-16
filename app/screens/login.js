export default class App extends Component {
    componentDidMount() {
      console.log('I was triggered during componentDidMount')
    }
  
    render() {
      console.log('I was triggered during render')
      return ( 
        <div> I am the App component </div>
      )
    }
  }