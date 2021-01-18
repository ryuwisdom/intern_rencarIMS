import React from 'react';
import styles from './MainHeader.scss';
import { useRouter } from 'next/router';
import { useObserver } from 'mobx-react';
import useStore from '../../stores';

const MainHeader = ({ title, id }) => {
  const router = useRouter();
  const { MainFooterActiveStore, MainTabActiveStore } = useStore();

  return useObserver(() => (
    <div className={styles.header_wrap}>
      <div className={styles.header_top}></div>
      <div className={styles.header_bottom}>
        <div className={styles.header_arrow_wrap}>
          <img
            src='/logo-blue.png'
            srcSet='/logo-blue@2x.png, /logo-blue@3x.png'
            className={styles.header_left_arrow}
            onClick={() => {
              MainFooterActiveStore.setId(1);
              MainTabActiveStore.setId(1);
              router.push('/user/main');
            }}
          />
        </div>
        <div className={styles.header_title}>{title}</div>
      </div>
    </div>
  ));
};

export default MainHeader;
