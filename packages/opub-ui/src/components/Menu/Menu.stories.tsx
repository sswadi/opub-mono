import {
  DeleteMinor,
  EditMinor,
  ExportMinor,
  ImportMinor,
  TickMinor,
} from '@shopify/polaris-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Menu } from './Menu';

/**
 * A wrapper around Popover and ActionList Components
 */
const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button disclosure>More actions</Button>,
    items: [
      {
        content: 'Import file',
        onAction: () => console.log('Imported action'),
      },
      {
        content: 'Export file',
        onAction: () => console.log('Exported action'),
      },
    ],
  },
};

export const WithSuffix: Story = {
  ...Default,
  args: {
    trigger: <Button disclosure>More actions</Button>,
    items: [
      {
        active: true,
        content: 'Import file',
        icon: <ImportMinor />,
        suffix: <Icon source={TickMinor} />,
      },
      { content: 'Export file', icon: <ExportMinor /> },
    ],
  },
};

export const WithSections: Story = {
  ...Default,
  args: {
    trigger: <Button disclosure>More actions</Button>,
    sections: [
      {
        title: 'File options',
        items: [
          { content: 'Import file', icon: <ImportMinor /> },
          { content: 'Export file', icon: <ExportMinor /> },
        ],
      },
      {
        title: 'Bulk actions',
        items: [
          { content: 'Edit', icon: <EditMinor /> },
          { content: 'Delete', icon: <DeleteMinor /> },
        ],
      },
    ],
  },
};

export const DestructiveItem: Story = {
  ...Default,
  args: {
    trigger: <Button disclosure>More actions</Button>,
    items: [
      {
        active: true,
        content: 'Import file',
        icon: <ImportMinor />,
      },
      { content: 'Export file', icon: <ExportMinor /> },
      {
        destructive: true,
        content: 'Delete file',
        icon: <DeleteMinor />,
      },
    ],
  },
};

export const HelpText: Story = {
  ...Default,
  args: {
    trigger: <Button disclosure>More actions</Button>,
    sections: [
      {
        items: [
          {
            content: 'Blog posts',
            helpText: 'Manage your blog articles',
          },
          {
            content: 'Blogs',
            helpText: 'Manage blogs published to your Online Store',
          },
        ],
      },
    ],
  },
};
