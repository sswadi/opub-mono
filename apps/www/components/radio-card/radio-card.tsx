import { RadioItemProps } from 'opub-ui/dist/ts/components/RadioGroup/RadioGroup';
import { RadioItem } from 'opub-ui/src';
import { twMerge } from 'tailwind-merge';

import styles from './radio-card.module.scss';

export function RadioCard({ ...props }: RadioItemProps) {
  return (
    <RadioItem className={twMerge(styles.Item, 'inherit p-0')} {...props} />
  );
}
