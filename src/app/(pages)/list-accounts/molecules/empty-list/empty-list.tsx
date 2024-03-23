import styles from './empty-list.module.scss';

type EmptyListType = {
  filter: string;
}

export const EmptyList = ({filter}: EmptyListType) => {
  const messageEmptyRequest: string = 'There is not banks, try later';
  const messageFilter: string = 'No results match your search';
  return (
    <section className={styles.empty}>
      <div className={styles['empty__card']}>
        <span>{filter ? messageFilter : messageEmptyRequest}</span>
      </div>
    </section>
  )
}