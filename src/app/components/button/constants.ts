import { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ValueOf } from 'type-fest';

export const BUTTON_SIZE = {
  FLUID: 'fluid',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const BUTTON_ACTION = {
  DELETE: 'delete',
  NAV: 'nav',
} as const;

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size: ValueOf<typeof BUTTON_SIZE>;
  action: ValueOf<typeof BUTTON_ACTION>;
  handleClick : () => void;
}
