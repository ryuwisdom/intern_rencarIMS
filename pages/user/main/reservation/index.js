import React from 'react';
import { MainHeader } from '../../../../components/Header';
import MainTab from '../../../../components/MainTab';
import { MainCard } from '../../../../components/Card';
import { MainFooter } from '../../../../components/Footer';
import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';
import styles from '../MainPage.scss';
import { parseCookies } from '../../../../lib/parseCookies';
import callApi from '../../../../utils/callApi';
import { SERVER_URL } from '../../../../config';
import axios from 'axios';

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const result = await callApi.get(`${SERVER_URL}/suggestion?status=1`, {
    headers: { Authorization: cookies.token },
  });
  const data = result.data.data;
  return {
    props: {
      data,
    },
  };
}

const ReservationConfirmation = ({ data }) => {
  const router = useRouter();

  const goToDetail = (id) => {
    router.push(`/user/main/reservation/detail/${id}`);
  };

  const CardLists = data.map((list) => {
    return (
      <MainCard
        name={list.name}
        id={list.id}
        onClick={() => {
          goToDetail(list.suggestion_id);
        }}
        key={list.suggestion_id}
        carType={list.cars_model}
        carNumber={list.car_number}
        date={list.created_at}
        suggestion_id={list.suggestion_id}
        isReservationCard={true}
      />
    );
  });

  return useObserver(() => (
    <div className={styles.main_container}>
      <div className={styles.main_headerWrap}>
        <MainHeader />
        <MainTab />
      </div>
      <div className={styles.main_background}>{CardLists}</div>
      <MainFooter />
    </div>
  ));
};

export default ReservationConfirmation;
