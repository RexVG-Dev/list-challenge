import Link from "next/link";


import styles from './nav.module.scss';
import Image from "next/image";

export const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <a className={styles['header__logo']}>
          <Image src="/icons/code-icon.svg" alt="code icon" width={50} height={50} />
          <span className={styles['header__title-logo']}>Obten +</span>
        </a>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__ul']}>
            <Link
              className={styles['header__item-nav']}
              href="/"
            >
              Home
            </Link>
            <Link
              className={styles['header__item-nav']}
              href="/list-accounts"
            >
              Banks List
            </Link>
          </ul>
        </nav>
      </div>
    </header>
    
  )
}
