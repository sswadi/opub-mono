import { Icons } from '@/components/icons';

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type CreateDataset = {
  type: string;
  name: string;
  description: string;
  terms: boolean;
};

export type EditDatasetProps = {
  source: string;
  created: string;
  frequency: string;
  tags: string[];
};
