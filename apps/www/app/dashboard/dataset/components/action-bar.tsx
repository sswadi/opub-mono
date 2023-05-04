'use client';

import Link, { LinkProps } from 'next/link';
import { Size, useWindowSize } from '@/hooks/use-window-size';
import { Box, Button, Icon, Text, Tooltip } from '@opub-cdl/ui/src';
import { twMerge } from 'tailwind-merge';

import { Icons } from '@/components/icons';
import styles from '../dataset.module.scss';

interface Props {
  title: string;
  primaryAction: {
    content: string;
    onAction(): void;
  };
  secondaryAction?: {
    content: string;
    onAction(): void;
  };
  previousPage?: {
    content: string;
    link?: LinkProps['href'];
    action?: () => void;
  };
}

export function ActionBar(props: Props) {
  const { width }: Size = useWindowSize();

  const backButton = props.previousPage && props.previousPage?.link && (
    <Link href={props.previousPage?.link} className={styles.BackButton}>
      <Icon source={Icons.back} color="base" size="8" />
      <Text visuallyHidden>Go back to {props.previousPage?.content} page</Text>
    </Link>
  );

  const backButtonAction = props.previousPage && props.previousPage?.action && (
    <button onClick={props.previousPage?.action} className={styles.BackButton}>
      <Icon source={Icons.back} color="base" size="8" />
      <Text visuallyHidden>Go back to {props.previousPage?.content} page</Text>
    </button>
  );

  const btn = props.previousPage?.action ? backButtonAction : backButton;

  return (
    <div className="flex flex-wrap items-center gap-4 justify-between py-5 border-b border-divider border-solid">
      <div
        className={twMerge(styles.ProgressNav, 'flex items-center sm:gap-4')}
      >
        {btn && props.previousPage ? (
          <Tooltip
            content={`Back to ${props.previousPage?.content}`}
            hideArrow
            children={btn}
          />
        ) : (
          btn
        )}

        <Text variant="headingLg" as="h2">
          {props.title}
        </Text>
      </div>

      {width && width <= 480 ? (
        <Button
          primary
          onClick={props.primaryAction.onAction}
          connectedDisclosure={
            props.secondaryAction && {
              actions: [
                {
                  content: 'Cancel',
                  onAction: props.secondaryAction?.onAction,
                },
              ],
            }
          }
        >
          {props.primaryAction.content}
        </Button>
      ) : (
        <Box flex alignItems="center" gap="3">
          {props.secondaryAction && (
            <Button plain onClick={props.secondaryAction.onAction}>
              {props.secondaryAction.content}
            </Button>
          )}
          <Button primary onClick={props.primaryAction.onAction}>
            {props.primaryAction.content}
          </Button>
        </Box>
      )}
    </div>
  );
}
