import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
const cx = classNames.bind(styles);
function AcountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://previews.123rf.com/images/nadianb/nadianb1709/nadianb170900256/86443804-idyllic-landscape-in-mountains-rural-scene-beautiful-nature-image-toned-square.jpg"
        alt="Hòa"
      />
      <div className={cx('into')}>
        <p className={cx('name')}>
          <span>Nguyễn văn hòa</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <span className={cx('username')}>NguyenVanA</span>
      </div>
    </div>
  );
}

export default AcountItem;
