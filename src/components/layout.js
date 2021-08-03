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
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.banner = null;
  }

  handleScroll() {
    if (this.banner) {
      const bottom_pos = this.banner.getClientRects()[0];
      if (bottom_pos.bottom > 0) {
        this.setState({ isNavAlt: true });
      } else {
        this.setState({ isNavAlt: false });
      }
    }
  }

  componentDidMount() {
    if (this.props.isAlt) {
      this.banner = document.getElementById('banner');
      window.addEventListener('scroll', this.handleScroll);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAlt != prevProps.isAlt) {
      if (this.props.isAlt) {
        this.banner = document.getElementById('banner');
        window.addEventListener('scroll', this.handleScroll);
      } else {
        window.removeEventListener('scroll', this.handleScroll);
        this.banner = null;
      }
    }
  }

  componentWillUnmount() {
    if (this.props.isAlt) {
      window.removeEventListener('scroll', this.handleScroll);
      this.banner = null;
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
    const { children, isAlt } = this.props;

    return (
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
          />
          {children}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isAlt: PropTypes.bool,
};

Layout.defaultProps = {
  children: [],
  isAlt: false,
};

export default Layout;
