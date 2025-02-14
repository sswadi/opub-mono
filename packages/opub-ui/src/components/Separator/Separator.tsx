'use client';

import { cn } from '../../utils';
import styles from './Separator.module.scss';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

const colorMap = {
  base: 'var(--border-subdued)',
  dark: 'var(--border)',
  divider: 'var(--divider)',
  transparent: 'var(--transparent)',
  border: 'var(--border-default)',
} as const;
type layerOptions = keyof typeof colorMap;

interface SeparatorProps extends SeparatorPrimitive.SeparatorProps {
  /** Separator bg color */
  bgColor?: layerOptions;

  className?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      bgColor = 'border',
      ...props
    }: SeparatorProps,
    ref
  ) => {
    const style = {
      '--bg-color': colorMap[bgColor] ? colorMap[bgColor] : bgColor,
    } as React.CSSProperties;

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          styles.Separator,
          orientation === 'horizontal' ? styles.Horizontal : styles.Vertical,
          className
        )}
        style={style}
        {...props}
      />
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
