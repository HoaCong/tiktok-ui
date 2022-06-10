import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './AcountItem.module.scss';
const cx = classNames.bind(styles);
function AcountItem({ data }) {
  return (
    <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('into')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AcountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AcountItem;
