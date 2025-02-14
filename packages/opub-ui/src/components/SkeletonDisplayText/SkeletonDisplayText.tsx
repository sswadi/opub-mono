import { variationName } from '../../utils/css';
import cx from 'classnames';
import styles from './SkeletonDisplayText.module.scss';
type Size = 'small' | 'medium' | 'large' | 'extraLarge';

export interface SkeletonDisplayTextProps {
  /**
   * Size of the text
   * @default 'medium'
   */
  size?: Size;
}

export function SkeletonDisplayText({
  size = 'medium',
}: SkeletonDisplayTextProps) {
  const className = cx(
    styles.DisplayText,
    size && styles[variationName('size', size)]
  );

  return <div className={className} />;
}
