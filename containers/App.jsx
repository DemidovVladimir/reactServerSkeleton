import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as pageActions from '../actions/PageAction';
import { Link } from 'react-router';

class App extends Component{
  render(){
    return (
      <div>
        <Link to={'/step1'} activeClassName="active">Step1</Link>
        <h1>Server side rendering included...</h1>
        {
          this.props.children ?
            React.cloneElement(this.props.children, this.props) :
            null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        task: state.task
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App)
