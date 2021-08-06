import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import '../assets/scss/main.scss';
import Header from './Header';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
      isNavAlt: true,
      isHidden: false,
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.mainBody = null;
  }

  handleScroll() {
    if (this.mainBody) {
      const top_pos = this.mainBody.getBoundingClientRect().top;
      const doc_pos = document.body.getBoundingClientRect().top;
      if (doc_pos < -80) {
        this.setState({ isHidden: true });
      } else {
        this.setState({ isHidden: false });
      }
      if (top_pos > 0) {
        this.setState({ isNavAlt: true });
      } else {
        this.setState({ isNavAlt: false });
      }
    }
  }

  componentDidMount() {
    if (this.props.isAlt) {
      this.mainBody = document.getElementById('main');
      window.addEventListener('scroll', this.handleScroll);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAlt != prevProps.isAlt) {
      if (this.props.isAlt) {
        this.mainBody = document.getElementById('main');
        window.addEventListener('scroll', this.handleScroll);
      } else {
        window.removeEventListener('scroll', this.handleScroll);
        this.mainBody = null;
      }
    }
  }

  componentWillUnmount() {
    if (this.props.isAlt) {
      window.removeEventListener('scroll', this.handleScroll);
      this.mainBody = null;
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const { children, isAlt, extra } = this.props;

    return (
      <>
        <div
          className={clsx([
            'body',
            this.state.loading,
            this.state.isMenuVisible ? 'is-menu-visible' : '',
          ])}
        >
          <div id="wrapper">
            <Header
              onToggleMenu={this.handleToggleMenu}
              isAlt={isAlt && this.state.isNavAlt}
              isAuto={!isAlt || this.state.isHidden}
            />
            {children}
            <Contact />
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} />
        </div>
        {extra}
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isAlt: PropTypes.bool,
  extra: PropTypes.any,
};

Layout.defaultProps = {
  children: [],
  isAlt: false,
  extra: [],
};

export default Layout;
