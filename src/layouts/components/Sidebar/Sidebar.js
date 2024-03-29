import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  LiveActiveIcon,
  UserGroupActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" textBtn={'See all'} />
      <SuggestedAccounts label="Following accounts" textBtn={'See more'} />
    </aside>
  );
}

export default Sidebar;
