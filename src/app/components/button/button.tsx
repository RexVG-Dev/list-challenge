import { ReactNode } from 'react';
import clsx from 'clsx';

import { BUTTON_ACTION, BUTTON_SIZE, ButtonType } from './constants';

import styles from './button.module.scss';

const Button = ({
  size = BUTTON_SIZE.FLUID,
  action = BUTTON_ACTION.DELETE,
  handleClick,
  children
}: ButtonType ) => {
  return (
    <div>
      <button
        className={clsx(styles.button, {
          [styles['button__fluid']]: size === BUTTON_SIZE.FLUID,
          [styles['button__small']]: size === BUTTON_SIZE.SMALL,
          [styles['button__medium']]: size === BUTTON_SIZE.MEDIUM,
          [styles['button__large']]: size === BUTTON_SIZE.LARGE,
          [styles['button--delete']]: action === BUTTON_ACTION.DELETE,
          [styles['button--nav']]: action === BUTTON_ACTION.NAV,
        })}
        onClick={handleClick}
      >{children}</button>
    </div>
  )
}
export default Button