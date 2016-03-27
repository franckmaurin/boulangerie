import './styles.css';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from '../Navigation';
import Shop from '../Shop';
import Cart from '../Cart';
import CreateForm from '../CreateForm';

class App extends React.Component {
  render() {
    // Makes transition classnames more BEM-friendly.
    const transitionNames = {
      enter        : 'transition--enter',
      enterActive  : 'is-active',
      leave        : 'transition--leave',
      leaveActive  : 'is-active',
      appear       : 'transition--enter',
      appearActive : 'is-active'
    };

    return (
      <ReactCSSTransitionGroup transitionEnterTimeout={750} transitionLeaveTimeout={50} transitionAppearTimeout={750} transitionAppear={true} component="div" transitionName={transitionNames}>
        <Navigation />
        <main key={this.props.location.pathname} className="transition">
          {this.props.children}
        </main>
      </ReactCSSTransitionGroup>
    );
  }
}

export default App;