import React, {Component} from 'react';
import UserBoard from './components/UserBoard';

export default class User extends Component{

  render(){
    return(
      <UserBoard name = "Alice" name1 = "John" name2 = "Fooo"/>
    );
  }
}