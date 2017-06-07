import React, {Component} from 'react';
import UserForm from './UserForm';
import HeaderDefault from './HeaderDefault';
import RepoList from './RepoList';


class App extends Component {
  // handleSearchFormSubmit = (event) => {
  //   axios
  //     .get(`https://api.github.com/users/${username}/repos`)
  //     .then((reponse) => {
  //       this.setState({repos: response.data})
  //     })
  //     .catch(()=>)
  // }

  //   this.setState({     repos:[]   })   return
  // axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
  // .then(({data})=>{       const {items: users} = data;       if(users <1){
  //    this.setState({           users:[]         })         throw new
  // Error('Unknown username')       }       // We only want one user       if(
  // users>1){         this.setState({           users:[]         })         throw
  // new Error('There is more than one user found')       }       this.setState({
  //        users: users       });     }); } handleUserClick = (username) =>{
  // axios.get(`https://api.github.com/users/${username}/repos`)
  // .then((reponse)=>{       this.setState({         repos: response.data
  // })     }) }

  render() {
    return (
        <div className="App">
          <HeaderDefault/>
          <hr/>
          <UserForm/>
          <hr/>
          <RepoList repos={this.props.repos}/>
        </div>
    );
  }
}

export default App;
