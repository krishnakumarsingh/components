import React from 'react';
import ReactDOM from 'react-dom'
import { Button, ButtonToolbar } from 'react-bootstrap'

const LoadState = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },

  render() {
    let isLoading = this.state.isLoading;
    return (
      <div>
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}>
          {isLoading ? 'Loading...' : 'Loading state'}
        </Button>
      </div>
    )
  },

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }

});

export default LoadState;