import React, { forwardRef } from 'react';
import styles from './RangeSlider.module.scss';
import cx from 'classnames';
import * as Slider from '@radix-ui/react-slider';
import { Labelled } from '../Labelled';
import type { Action } from '@ui/types/button';
import type { Error } from '@ui/types/shared/form';
import { Flex } from '../Flex';
import { Text } from '../Text';

type Props = {
  /** Label for the range input */
  label: React.ReactNode;
  /** Adds an action to the label */
  labelAction?: Action;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** ID for range input */
  id?: string;
  /** Provide a tooltip while sliding, indicating the current value */
  output?: boolean;
  /** Additional text to aid in use */
  helpText?: React.ReactNode;
  /** Display an error message */
  error?: Error;
  /** Disable input */
  disabled?: boolean;
  /** Element to display before the input */
  prefix?: React.ReactNode;
  /** Element to display after the input */
  suffix?: React.ReactNode;
} & Omit<Slider.SliderProps, 'prefix'>;

const RangeSlider = forwardRef((props: Props, ref: any) => {
  const themeClass = cx(styles.RangeSlider, {});
  const {
    id,
    label,
    error,
    labelAction,
    labelHidden,
    helpText,
    prefix,
    suffix,
    output,
    defaultValue,
    minStepsBetweenThumbs = 1,
    ...others
  } = props;

  const randomId = React.useId();
  const finalID = id || randomId;

  const prefixMarkup = prefix && <div className={styles.Prefix}>{prefix}</div>;

  const suffixMarkup = suffix && (
    <div
      style={{
        minWidth: '24px',
        textAlign: 'right',
      }}
      className={styles.Suffix}
    >
      {suffix}
    </div>
  );

  // TODO: need to figure out the position to add this functionality
  // const outputMarkup = !props.disabled && props.value && output && (
  //   <output htmlFor={id} className={styles.Output}>
  //     <div className={styles.OutputBubble}>
  //       <Text as="span" variant="headingXs" alignment="center">
  //         {props.value}
  //       </Text>
  //     </div>
  //   </output>
  // );

  return (
    <div className={`opub-RangeSlider ${themeClass}`} ref={ref}>
      <Labelled
        id={finalID}
        label={label}
        error={error}
        action={labelAction}
        labelHidden={labelHidden}
        helpText={helpText}
      >
        <Flex alignItems="center">
          {prefixMarkup}
          <Slider.Root
            className={styles.Root}
            defaultValue={defaultValue}
            aria-label={String(label)}
            minStepsBetweenThumbs={minStepsBetweenThumbs}
            {...others}
          >
            <Slider.Track className={styles.Track}>
              <Slider.Range className={styles.Range} />
            </Slider.Track>
            <Slider.Thumb id={finalID} className={styles.Thumb} />
            {/* {outputMarkup} */}

            {defaultValue && defaultValue[1] && (
              <Slider.Thumb id={finalID} className={styles.Thumb} />
            )}
          </Slider.Root>
          {suffixMarkup}
        </Flex>
      </Labelled>
    </div>
  );
});

export { RangeSlider };
