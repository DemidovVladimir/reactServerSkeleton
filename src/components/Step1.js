import React, {Component} from 'react';

export default class Step1 extends Component {
  constructor(props){
    super();
    this.state = {
      customProps: [{id: 0, title: 'loading...'}]
    }
  }

  createFile(){
    var page = this.refs.pageName.value;
    this.props.pageActions.generateFile(page, 'refs out');
  }

  addPage(){
    var page = this.refs.pageName.value;
    this.props.pageActions.addPage(page);
  }

  render() {
    return (
      <div>
        <h1>Select element to plug into page</h1>
        <input type="text" ref="pageName"/>Please insert page title
        <button onClick={::this.addPage}>Add</button>
        {this.props.task.elementsToCreate.length > 0 ? (
          <div>
            <h1>Task</h1>
            <h3>Please add input types to page {this.props.task.elementsToCreate[this.props.task.elementsToCreate.length-1]}</h3>
            <form onSubmit={::this.createFile}>
              <input type="checkbox" ref="type" value="text"/>Input text<br/>
              <input type="checkbox" ref="type" value="textArea"/>Input textarea<br/>
              <input type="checkbox" ref="type" value="radio"/>Input radio<br/>
              <input type="checkbox" ref="type" value="file"/>Input file<br/>
              <input type="text" ref="placeholder"/>Paste placeholder text<br/>
              <input type="text" ref="defaultValue"/>Paste default value<br/>
              <input type="checkbox" ref="prop"/>Paste prop to the custom element<br/>
              {this.state.customProps ? (this.state.customProps.map((prop)=>{
                return (<div>
                  <input key={prop.id} ref={prop.title} type="text"/>Paste {prop.title} value<br/>
                  <input type="checkbox" ref="prop" value="prop"/>Paste prop to the custom element<br/>
                  </div>)
              })) : ''}
              <input type="submit" value="Submit"/>
            </form>
          </div>
        ) : ''}
      </div>
    )
  }
}
