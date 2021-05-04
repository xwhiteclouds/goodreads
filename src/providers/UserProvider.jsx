import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";


export const UserContext = createContext({ user: null });

class UserProvider extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }


  
  
  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
    

  };

  render() {
    const { user } = this.state;
    console.log({user})
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
