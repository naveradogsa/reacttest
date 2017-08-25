import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={ this.props.headerTitle }/>
        <Content title={ this.props.contentTitle }
                 body={ this.props.contentBody }/>
      </div>
    )
  }
}