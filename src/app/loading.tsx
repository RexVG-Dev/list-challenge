'use client'

import { TailSpin } from 'react-loader-spinner';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p className={styles['loading__title']}>Loading...</p>
      <TailSpin
        visible={true}
        height="140"
        width="140"
        color="#1e293b"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
export default Loading;