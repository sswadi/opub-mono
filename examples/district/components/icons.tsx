import {
  IconAnchor,
  IconArrowLeft,
  IconArrowRight,
  IconBarrierBlock,
  IconBellFilled,
  IconChartInfographic,
  IconChevronDown,
  IconChevronRight,
  IconDatabase,
  IconDatabaseCog,
  IconDatabasePlus,
  IconFileChart,
  IconHome,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconLink,
  IconListSearch,
  IconReportSearch,
  IconSearch,
  IconSquareRoundedArrowRight,
  IconUserCog,
  TablerIconsProps,
} from '@tabler/icons-react';

export const Icons: {
  [key: string]: (props: TablerIconsProps) => React.ReactElement;
} = {
  back: IconArrowLeft,
  logo: IconAnchor,
  dataset: IconDatabase,
  datasetSettings: IconDatabaseCog,
  addDataset: IconDatabasePlus,
  userSettings: IconUserCog,
  arrowRight: IconArrowRight,
  down: IconChevronDown,
  right: IconChevronRight,
  search: IconSearch,
  notification: IconBellFilled,
  department: IconListSearch,
  scheme: IconReportSearch,
  cardLink: IconSquareRoundedArrowRight,

  construction: IconBarrierBlock,
  link: IconLink,
  collapse: IconLayoutSidebarLeftCollapse,
  expand: IconLayoutSidebarLeftExpand,
  home: IconHome,
  overview: IconFileChart,
  explorer: IconChartInfographic,
};

export default Icons;
