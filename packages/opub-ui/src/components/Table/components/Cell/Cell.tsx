import { SortDirection } from '../../../../types/datatable';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import { Tooltip } from '../../../Tooltip';
import styles from '../../Table.module.scss';
import {
  SortAscendingMajor,
  SortDescendingMajor,
} from '@shopify/polaris-icons';
import cx from 'classnames';
import React from 'react';

function SortButton({
  column,
  sortable,
  text,
  columnType,
  defaultSortDirection,
}: {
  column: any;
  sortable: boolean;
  text: React.ReactNode;
  columnType: string;
  defaultSortDirection: SortDirection;
}) {
  const headerClassName = cx(
    styles.Heading,
    columnType === 'text' && styles['Heading-left']
  );

  const iconClassName = cx(sortable && styles.Icon);
  const sortDirection = column.getIsSorted() as string;
  const direction = sortDirection ? sortDirection : defaultSortDirection;
  const source =
    direction === 'desc' ? SortDescendingMajor : SortAscendingMajor;

  const a11ylabel = `Sorted in ${
    direction === 'desc' ? 'descending' : 'ascending'
  } order`;

  const iconMarkup = (
    <span className={iconClassName}>
      <Icon color="base" source={source} accessibilityLabel={a11ylabel} />
    </span>
  );

  return column.getCanSort() && sortable ? (
    <button
      className={headerClassName}
      onClick={column.getToggleSortingHandler()}
    >
      {iconMarkup}
      <Text variant="bodyMd">{text}</Text>
    </button>
  ) : null;
}

type HeaderProps = {
  header: any;
  sortable: boolean;
  className: string;
  text: React.ReactNode;
  columnType: string;
  defaultSortDirection: SortDirection;
};

export const HeaderCell = ({
  header,
  sortable,
  className,
  text,
  columnType,
  defaultSortDirection,
  ...rest
}: HeaderProps) => {
  return (
    <th className={className} {...rest}>
      {header.isPlaceholder ? null : header.column.getCanSort() && sortable ? (
        <SortButton
          columnType={columnType}
          text={text}
          column={header.column}
          sortable={sortable}
          defaultSortDirection={defaultSortDirection}
        />
      ) : (
        <Text variant="bodyMd">{text}</Text>
      )}
    </th>
  );
};

type CellProps = {
  cell: any;
  className: string;
  text: React.ReactNode;
  truncate: boolean;
  index: number;
};

export const Cell = ({
  className,
  text,
  cell,
  truncate,
  index,
  ...rest
}: CellProps) => {
  return (
    <td className={className} key={cell.id} {...rest}>
      {truncate && index === 0 ? (
        <TruncatedText className={styles.TooltipContent}>{text}</TruncatedText>
      ) : (
        text
      )}
    </td>
  );
};

const TruncatedText = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const textRef = React.useRef<any | null>(null);
  const { current } = textRef;
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    forceUpdate();
  }, [children]);

  const text = (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );

  return current?.scrollWidth > current?.offsetWidth ? (
    <Tooltip.Provider>
      <Tooltip delayDuration={0} content={textRef.current.innerText}>
        <Text variant="bodyMd">{text}</Text>
      </Tooltip>
    </Tooltip.Provider>
  ) : (
    text
  );
};
