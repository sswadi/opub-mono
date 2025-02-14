import { Meta, StoryObj } from '@storybook/react';
import { SkeletonDisplayText } from './SkeletonDisplayText';

/**
 * Skeleton display text is used to provide a low fidelity representation of content before it appears on the page
 *
 * Reference: https://polaris.shopify.com/components/feedback-indicators/skeleton-display-text
 */
const meta = {
  component: SkeletonDisplayText,
} satisfies Meta<typeof SkeletonDisplayText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
