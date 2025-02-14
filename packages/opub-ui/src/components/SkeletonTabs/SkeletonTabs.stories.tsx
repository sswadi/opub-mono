import { Meta, StoryObj } from '@storybook/react';
import { SkeletonTabs } from './SkeletonTabs';

/**
 * SkeletonTabs tabs are used to provide a low fidelity representation of content before it appears on the page
 *
 * Reference: https://polaris.shopify.com/components/feedback-indicators/SkeletonTabs-tabs
 */
const meta = {
  component: SkeletonTabs,
} satisfies Meta<typeof SkeletonTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
