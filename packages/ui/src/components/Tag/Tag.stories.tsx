import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { Light } from '@opub-icons/workflow';
import { Flex } from '../Flex';
import { PropsVariationSection } from '@ui/utils/helpers';

/**
 * Tag represent a set of interactive keywords that help label, organize, and categorize objects
 *
 * Reference: https://polaris.shopify.com/components/selection-and-input/tag
 */
export default {
  component: Tag,

  argTypes: {
    children: {
      control: 'text',
      description: 'description text',
    },
  },
} as Meta<typeof Tag>;

export const Primary = {
  args: {
    children: 'Tag',
  },
};

export const LongName = {
  args: {
    onRemove: () => {
      console.log('Remove triggered');
    },
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ipsum quam. Aliquam fermentum bibendum vestibulum. Vestibulum condimentum luctus metus, sed sagittis magna pellentesque eget. Duis dapibus pretium nisi, et venenatis tortor dignissim ut. Quisque eget lacus ac ex eleifend ultrices. Phasellus facilisis ex sit amet leo elementum condimentum. Ut vel maximus felis. Etiam eget diam eu eros blandit interdum. Sed eu metus sed justo aliquam iaculis ac sit amet ex. Curabitur justo magna, porttitor non pulvinar eu, malesuada at leo. Cras mollis consectetur eros, quis maximus lorem dignissim at. Proin in rhoncus massa. Vivamus lectus nunc, fringilla euismod risus commodo, mattis blandit nulla.',
  },
};

export const Colors = () => (
  <PropsVariationSection
    component={Tag}
    common={{ children: 'Tag' }}
    xAxis={{
      colors: {},
    }}
    yAxis={{
      standard: {},
      one: {
        color: 'one',
      },
      two: {
        color: 'two',
      },
      three: {
        color: 'three',
      },
      four: {
        color: 'four',
      },
      five: {
        color: 'five',
      },
    }}
  />
);

// export const States = () => (
//   <PropsVariationSection
//     component={Tag}
//     common={{ children: 'Tags' }}
//     xAxis={{
//       default: {},
//       disabled: { disabled: true },
//       'custom children': {
//         children: (
//           <Flex alignItems="center" gap={4}>
//             <Light size={14} />
//             <span>Sun is up</span>
//           </Flex>
//         ),
//       },
//     }}
//     yAxis={{
//       default: {},
//       'with remove': {
//         onRemove: () => {
//           console.log('Remove triggered');
//         },
//       },
//       'with click': {
//         onClick: () => {
//           console.log('Remove triggered');
//         },
//       },
//       'with link': {
//         url: '#',
//       },
//       'removable with link': {
//         url: '#',
//         onRemove: () => {
//           console.log('Remove triggered');
//         },
//       },
//     }}
//   />
// );
