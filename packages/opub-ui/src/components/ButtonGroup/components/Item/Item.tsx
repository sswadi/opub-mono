import cx from 'classnames';
import React from 'react';
import { useToggle } from '../../../../utils';
import styles from '../../ButtonGroup.module.scss';

export interface ItemProps {
  button: React.ReactElement;
}

export function Item({ button }: ItemProps) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused,
  } = useToggle(false);

  const className = cx(
    styles.Item,
    focused && styles['Item-focused'],
    button.props.plain && styles['Item-plain']
  );

  return (
    <div
      className={className}
      onFocus={forceTrueFocused}
      onBlur={forceFalseFocused}
    >
      {button}
    </div>
  );
}
