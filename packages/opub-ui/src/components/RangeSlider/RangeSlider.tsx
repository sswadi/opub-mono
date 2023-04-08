import * as Slider from '@radix-ui/react-slider';
import cx from 'classnames';
import React, { forwardRef, useEffect } from 'react';
import type { Action } from '../../types/button';
import type { Error } from '../../types/shared/form';
import { Flex } from '../Flex';
import { Labelled } from '../Labelled';
import { Text } from '../Text';
import styles from './RangeSlider.module.scss';
import { getThumbInBoundsOffset } from './utils';

export type RangeSliderProps = {
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
  /** Callback when the range value change */
  onChange?(selected: number[], name: string | undefined): void;
  /** Callback when the range value change ends */
  onChangeEnd?(selected: number[], name: string | undefined): void;
} & Omit<Slider.SliderProps, 'prefix' | 'onChange'>;

const RangeSlider = forwardRef((props: RangeSliderProps, ref: any) => {
  const [value, setValue] = React.useState(
    props.value || props.defaultValue || [0]
  );

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
    onChange,
    onChangeEnd,
    name,
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

  const tooltipRef1 = React.useRef<HTMLOutputElement>(null);
  const tooltipRef2 = React.useRef<HTMLOutputElement>(null);

  useEffect(() => {
    const offset1 = getThumbInBoundsOffset(16, value[0]);
    const offset2 = getThumbInBoundsOffset(16, value[1]);

    if (tooltipRef1.current) {
      tooltipRef1.current.style.left = `calc(${
        value[0]
      }% + ${offset1}px - ${16}px)`;
    }
    if (tooltipRef2.current) {
      tooltipRef2.current.style.left = `calc(${
        value[1]
      }% + ${offset2}px - ${16}px)`;
    }
  }, [value]);

  function onValChange(val: number[]) {
    setValue(val);
    onChange && onChange(val, name);
  }

  const outputMarup1 = !props.disabled && value && output && (
    <output htmlFor={finalID} className={styles.Output} ref={tooltipRef1}>
      <div className={styles.OutputBubble}>
        <Text as="span" variant="headingXs" alignment="center">
          {value[0]}
        </Text>
      </div>
    </output>
  );

  const outputMarup2 = !props.disabled && value[1] && output && (
    <output
      htmlFor={finalID + '-2'}
      className={styles.Output}
      ref={tooltipRef2}
    >
      <div className={styles.OutputBubble}>
        <Text as="span" variant="headingXs" alignment="center">
          {value[1]}
        </Text>
      </div>
    </output>
  );

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
            name={name}
            onValueChange={onValChange}
            onValueCommit={(val) => onChangeEnd && onChangeEnd(val, name)}
            {...others}
          >
            <Slider.Track className={styles.Track}>
              <Slider.Range className={styles.Range} />
            </Slider.Track>
            {outputMarup1}
            <Slider.Thumb id={finalID} className={styles.Thumb} />

            {value && value[1] && (
              <>
                {outputMarup2}
                <Slider.Thumb id={finalID + '-2'} className={styles.Thumb} />
              </>
            )}
          </Slider.Root>
          {suffixMarkup}
        </Flex>
      </Labelled>
    </div>
  );
});

export { RangeSlider };
