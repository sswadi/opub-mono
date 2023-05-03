import React from 'react';
import { useRouter } from 'next/navigation';
import { CreateDataset as Props } from '@/types';
import {
  Box,
  Checkbox,
  Form,
  FormLayout,
  Icon,
  Input,
  RadioGroup,
  Text,
} from '@opub-cdl/ui';
import { IconSource } from '@opub-cdl/ui/dist/ts/components/Icon/Icon';

import { Icons } from '@/components/icons';
import { RadioCard } from '@/components/radio-card';
import styles from '../new.module.scss';

const defaultValBase: Props = {
  type: 'file',
  name: '',
  description: '',
  terms: false,
};

export function CreateDataset({
  defaultVal,
  submitRef,
}: {
  defaultVal?: Props;
  submitRef?: React.RefObject<HTMLButtonElement>;
}) {
  const [val, setVal] = React.useState(defaultVal);
  const router = useRouter();

  const defaultValue = defaultVal || defaultValBase;
  return (
    <Form
      onSubmit={() => {
        router.push('/dashboard/dataset/1/edit/metadata');
      }}
      formOptions={{ defaultValues: defaultValue }}
      onChange={setVal}
    >
      <div className={styles.CreateDataset}>
        <Text variant="headingMd">Source Type</Text>
        <RadioGroup name="type" title="Select Source Type" titleHidden>
          <div className={styles.RadioWrapper}>
            <RadioItem
              value="file"
              title="Upload File(s)"
              subtitle=".csv, .txt, .xls, .xlsx"
              icon={Icons.dataset}
            />
            <RadioItem
              value="api"
              title="Link API"
              subtitle="currently unavailable"
              icon={Icons.link}
              disabled
            />
          </div>
        </RadioGroup>
        <Box paddingBlockStart="8" maxWidth="656px">
          <Text variant="headingMd">Dataset Details</Text>
          <Box paddingBlockStart="3">
            <FormLayout>
              <Input
                name="name"
                label="Name of Dataset"
                placeholder="example: Population of India"
                maxLength={30}
                showCharacterCount
                autoComplete="off"
                required
                error="This field is required"
              />
              <Input
                name="description"
                label="Description"
                multiline={5}
                placeholder="some information about this dataset."
                maxLength={300}
                showCharacterCount
                autoComplete="off"
                required
                error="This field is required"
              />
            </FormLayout>
          </Box>

          <Box paddingBlockStart="8">
            <Text variant="headingMd">Terms & Conditions</Text>
            <Box paddingBlockStart="2">
              <Checkbox name="terms" required error="This field is required">
                I agree to the terms and conditions as set out by the user
                agreement. I state that I have read and understood the terms and
                conditions.
              </Checkbox>
            </Box>
          </Box>
        </Box>
      </div>
      <button hidden ref={submitRef}>
        submit form
      </button>
    </Form>
  );
}

const RadioItem = ({
  title,
  subtitle,
  icon,
  ...props
}: {
  value: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
  icon: IconSource;
}) => {
  return (
    <RadioCard {...props}>
      <div className={styles.RadioItem}>
        <Icon source={icon} />
        <div className={styles.RadioContent}>
          <Text
            variant="headingSm"
            color={props.disabled ? 'disabled' : 'default'}
          >
            {title}
          </Text>
          <Text
            variant="headingXs"
            color={props.disabled ? 'disabled' : 'subdued'}
          >
            {subtitle}
          </Text>
        </div>
      </div>
    </RadioCard>
  );
};
