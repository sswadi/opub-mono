import { TablerIconsProps } from '@tabler/icons-react';
import cx from 'classnames';
import React from 'react';
import { SpacingSpaceScale } from '../../tokens';
import { variationName } from '../../utils/css';
import { Text } from '../Text';
import styles from './Icon.module.scss';

type Color =
  | 'surface'
  | 'base'
  | 'subdued'
  | 'critical'
  | 'interactive'
  | 'warning'
  | 'highlight'
  | 'success'
  | 'primary'
  | 'decorative1'
  | 'decorative2'
  | 'decorative3'
  | 'decorative4'
  | 'decorative5';

export type IconSource =
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  | 'placeholder'
  | string
  | ((props: TablerIconsProps) => React.ReactElement)
  | TablerIconsProps
  | React.SVGProps<SVGSVGElement>;

export interface IconProps {
  /** The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox) */
  source: IconSource;
  /** Set the color for the SVG fill */
  color?: Color;
  /** Show a backdrop behind the icon */
  backdrop?: boolean;
  /** Descriptive text to be read to screenreaders */
  accessibilityLabel?: string;
  /** size of the icon, use space tokens  */
  size?: SpacingSpaceScale | number;
  /** stroke width  */
  stroke?: number;
  /** fill color  */
  fill?: Color;
}

export function Icon({
  source,
  color,
  backdrop,
  accessibilityLabel,
  size,
  stroke,
  fill,
}: IconProps) {
  let sourceType: 'function' | 'placeholder' | 'external';
  if (typeof source === 'function' || typeof source === 'object') {
    sourceType = 'function';
  } else if (source === 'placeholder') {
    sourceType = 'placeholder';
  } else {
    sourceType = 'external';
  }

  const className = cx(
    styles.Icon,
    color && styles[variationName('color', color)],
    backdrop && styles.hasBackdrop,
    'OPub-Icon'
  );

  const SourceComponent: any = source;
  const iconSize = size
    ? typeof size === 'number'
      ? size
      : Number(size) * 4
    : 20;

  const contentMarkup = {
    function: (
      <SourceComponent
        className={styles.Svg}
        size={iconSize}
        color="currentColor"
        focusable="false"
        aria-hidden="true"
        stroke={stroke ? stroke : 2}
        style={{
          '--fill': fill ? `var(--icon-${fill})` : 'none',
        }}
      />
    ),
    placeholder: <div className={styles.Placeholder} />,
    external: (
      <img
        className={styles.Img}
        src={`data:image/svg+xml;utf8,${source}`}
        alt=""
        aria-hidden="true"
      />
    ),
  };

  return (
    <span
      className={className}
      style={
        size
          ? ({
              height: iconSize,
              width: iconSize,
              '--fill': fill ? `var(--icon-${fill})` : 'none',
            } as React.CSSProperties)
          : {}
      }
    >
      <Text as="span" visuallyHidden>
        {accessibilityLabel}
      </Text>
      {contentMarkup[sourceType]}
    </span>
  );
}
