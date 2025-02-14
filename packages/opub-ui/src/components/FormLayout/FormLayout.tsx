import { isElementOfType, wrapWithComponent } from '../../utils';
import styles from './FormLayout.module.scss';
import { Group, Item } from './components';
import React, { memo, Children } from 'react';
import type { NamedExoticComponent } from 'react';

export interface FormLayoutProps {
  /** The content to display inside the layout. */
  children?: any;
}

export const FormLayout = memo(function FormLayout({
  children,
}: FormLayoutProps) {
  return (
    <div className={styles.FormLayout}>
      {Children.map(children, wrapChildren)}
    </div>
  );
}) as NamedExoticComponent<FormLayoutProps> & {
  Group: typeof Group;
};

FormLayout.Group = Group;

function wrapChildren(child: React.ReactElement, index: number) {
  if (isElementOfType(child, Group)) {
    return child;
  }
  const props = {};
  return wrapWithComponent(child, Item, props);
}
