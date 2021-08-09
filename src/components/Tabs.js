import React from 'react';
import PropTypes from 'prop-types';

import {
  Tab as _Tab,
  Tabs as _Tabs,
  TabList as _TabList,
  TabPanel as _TabPanel,
} from 'react-tabs';
import * as styles from './Tabs.module.scss';

function Tabs(props) {
  const tab_titles = props.children.map((tabitem, ind) => {
    return (
      <_Tab
        key={ind}
        className={styles.tab}
        disabledClassName={styles.disabled}
        selectedClassName={styles.selected}
      >
        {tabitem.props.title}
      </_Tab>
    );
  });

  const tab_panels = props.children.map((tabitem, ind) => {
    return (
      <_TabPanel
        key={ind}
        className={styles.panel}
        selectedClassName={styles.selected}
      >
        {tabitem.props.children}
      </_TabPanel>
    );
  });

  return (
    <_Tabs className={styles.tabs}>
      <_TabList className={styles.tabList}>{tab_titles}</_TabList>
      {tab_panels}
    </_Tabs>
  );
}

function TabItem(props) {
  return {
    title: props.title,
    children: props.children,
  };
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(TabItem)),
    PropTypes.instanceOf(TabItem),
  ]).isRequired,
};

Tabs.defaultProps = {
  children: [],
};

TabItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

TabItem.defaultProps = {
  children: [],
  title: 'Tab',
};

export { Tabs, TabItem };
