import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { FormLayout } from '../FormLayout';
import { Text } from '../Text';
import { Form } from './Form';
import { getLocalTimeZone, today, parseDate } from '@internationalized/date';

/**
 * A wrapper component that handles the submission of forms.
 */
const meta = {
  component: Form,

  argTypes: {
    children: {
      control: 'null',
      description: 'Form Field elements',
    },
  },
} satisfies Meta<typeof Form>;
export default meta;

const options = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 days', value: 'lastWeek' },
];

const checkboxOptions = [
  {
    label: 'ReactJs',
    value: 'react',
    helpText: 'Kinda Popular these days.',
  },
  {
    label: 'VueJs',
    value: 'vue',
  },
  {
    label: 'AngularJs',
    value: 'angular',
  },
];

export const FormBase = () => {
  const defaultVal = {
    text: 'Excalibur',
    select: 'yesterday',
    range: [6],
    checkbox: true,
    'checkbox-group': ['angular', 'vue'],
    radio: '1',
    date: parseDate('2020-02-03').toString(),
  };

  const [values, setValues] = React.useState<any>();

  return (
    <>
      <Form
        onSubmit={(e) => setValues(e)}
        formOptions={{ defaultValues: defaultVal }}
      >
        <FormLayout>
          <Form.Input name="text" label="Name" />
          <Form.Select name="select" label="Select Period" options={options} />
          <Form.RangeSlider name="range" label="Budget" prefix={<p>$</p>} />
          <Form.Checkbox name="checkbox"> I agree to T&C</Form.Checkbox>
          <Form.CheckboxGroup
            name="checkbox-group"
            title="Pick your Poison"
            options={checkboxOptions}
          />
          <Form.RadioGroup name="radio" title="Select an item">
            <Form.RadioItem value="1">Item 1</Form.RadioItem>
            <Form.RadioItem value="2">Item 2</Form.RadioItem>
            <Form.RadioItem value="3">Item 3</Form.RadioItem>
          </Form.RadioGroup>

          <Form.DateField
            name="date"
            label="Choose Date"
            defaultValue={parseDate('2020-02-03')}
          />
          <Button submit size="slim">
            Submit
          </Button>
        </FormLayout>
      </Form>

      <br />
      <Text>Output:</Text>
      <br />
      <pre>{JSON.stringify(values || defaultVal, null, 2)}</pre>
    </>
  );
};

export const AsyncDefaultValues = () => {
  const [defaultVal, setDefaultVal] = React.useState({});
  React.useEffect(() => {
    const defaultOptions = {
      text: 'Excalibur',
      select: 'yesterday',
      range: [6],
      checkbox: true,
      'checkbox-group': ['angular', 'vue'],
      radio: '2',
      date: parseDate('2020-02-03').toString(),
    };
    setDefaultVal(defaultOptions);
  }, []);

  const [values, setValues] = React.useState<any>();

  return (
    <>
      <Form
        onSubmit={(e) => setValues(e)}
        formOptions={{ defaultValues: defaultVal }}
      >
        <FormLayout>
          <Form.Input name="text" label="Name" />
          <Form.Select name="select" label="Select Period" options={options} />
          <Form.RangeSlider name="range" label="Budget" prefix={<p>$</p>} />
          <Form.Checkbox name="checkbox"> I agree to T&C</Form.Checkbox>
          <Form.CheckboxGroup
            name="checkbox-group"
            title="Pick your Poison"
            options={checkboxOptions}
          />
          <Form.RadioGroup name="radio" title="Select an item">
            <Form.RadioItem value="1">Item 1</Form.RadioItem>
            <Form.RadioItem value="2">Item 2</Form.RadioItem>
            <Form.RadioItem value="3">Item 3</Form.RadioItem>
          </Form.RadioGroup>

          <Form.DateField
            name="date"
            label="Choose Date"
            defaultValue={parseDate('2020-02-03')}
          />
          <Button submit size="slim">
            Submit
          </Button>
        </FormLayout>
      </Form>

      <br />
      <Text>Output:</Text>
      <br />
      <pre>{JSON.stringify(values || defaultVal, null, 2)}</pre>
    </>
  );
};

export const ResetOnSubmit = () => {
  const defaultVal = {
    text: 'Excalibur',
    select: 'yesterday',
    range: [6],
    checkbox: true,
    'checkbox-group': ['angular', 'vue'],
    radio: '1',
    date: parseDate('2020-02-03').toString(),
  };

  const [values, setValues] = React.useState<any>();

  return (
    <>
      <Form
        onSubmit={(e) => setValues(e)}
        formOptions={{ defaultValues: defaultVal }}
        resetValues={{
          text: '',
          select: '',
          range: [0],
          checkbox: false,
          'checkbox-group': [],
          radio: '',
          date: '',
        }}
      >
        <FormLayout>
          <Form.Input name="text" label="Name" />
          <Form.Select name="select" label="Select Period" options={options} />
          <Form.RangeSlider name="range" label="Budget" prefix={<p>$</p>} />
          <Form.Checkbox name="checkbox"> I agree to T&C</Form.Checkbox>
          <Form.CheckboxGroup
            name="checkbox-group"
            title="Pick your Poison"
            options={checkboxOptions}
          />
          <Form.RadioGroup name="radio" title="Select an item">
            <Form.RadioItem value="1">Item 1</Form.RadioItem>
            <Form.RadioItem value="2">Item 2</Form.RadioItem>
            <Form.RadioItem value="3">Item 3</Form.RadioItem>
          </Form.RadioGroup>

          <Form.DateField
            name="date"
            label="Choose Date"
            defaultValue={parseDate('2020-02-03')}
          />
          <Button submit size="slim">
            Submit
          </Button>
        </FormLayout>
      </Form>

      <br />
      <Text>Output:</Text>
      <br />
      <pre>{JSON.stringify(values || defaultVal, null, 2)}</pre>
    </>
  );
};
