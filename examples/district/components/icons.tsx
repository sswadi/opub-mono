import {
  IconAnchor,
  IconArrowLeft,
  IconArrowRight,
  IconBarrierBlock,
  IconBellFilled,
  IconChartInfographic,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconDatabase,
  IconDatabaseCog,
  IconDatabasePlus,
  IconDatabaseSearch,
  IconDatabaseShare,
  IconDiamondsFilled,
  IconDownload,
  IconHome,
  IconInfoCircleFilled,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconLink,
  IconListSearch,
  IconReport,
  IconReportSearch,
  IconSearch,
  IconSquareRoundedArrowRight,
  IconSquareRoundedChevronLeftFilled,
  IconUserCog,
  IconExternalLink,
  IconChevronsLeft,
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
  up: IconChevronUp,
  down: IconChevronDown,
  right: IconChevronRight,
  left: IconChevronLeft,
  doubleLeft: IconChevronsLeft,
  leftFilled: IconSquareRoundedChevronLeftFilled,
  search: IconSearch,
  notification: IconBellFilled,
  department: IconListSearch,
  scheme: IconReportSearch,
  cardLink: IconSquareRoundedArrowRight,
  info: IconInfoCircleFilled,

  construction: IconBarrierBlock,
  link: IconLink,
  collapse: IconLayoutSidebarLeftCollapse,
  expand: IconLayoutSidebarLeftExpand,
  home: IconHome,
  overview: IconReport,
  explorer: IconChartInfographic,
  'database-share': IconDatabaseShare,
  'database-search': IconDatabaseSearch,
  download: IconDownload,
  diamond: IconDiamondsFilled,
  externalLink: IconExternalLink,
};

export default Icons;
