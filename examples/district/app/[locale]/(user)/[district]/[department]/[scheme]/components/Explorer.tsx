import React from 'react';
import mapFile from '@/public/files/assam.json';
import { createColumnHelper } from '@tanstack/react-table';
import { Select, Tab, TabList, TabPanel, Table, Tabs, Text } from 'opub-ui';
import { BarChart, MapChart } from 'opub-viz';

import { ckan } from '@/config/site';
import { useFetch } from '@/lib/api';
import { cn } from '@/lib/utils';
import { explorer } from '../scheme.config';
import { Indicators } from './Indicators';
import { ITable } from './scheme-layout';

export const Explorer = ({
  scheme,
  tableData,
}: {
  scheme?: string;
  tableData: any;
}) => {
  const [selectedTab, setTab] = React.useState<'map' | 'table' | 'chart'>(
    'map'
  );
  const [selectedYear, setYear] = React.useState('2022-2023');

  const { data, isLoading } = useFetch('indicators', ckan.indicators);
  const indicatorRef = React.useRef(null);

  return (
    <div className={cn('grid grid-cols-[244px_1fr] gap-4')}>
      <Indicators
        data={data}
        scheme={scheme || ''}
        loading={isLoading}
        indicatorRef={indicatorRef}
        disable={selectedTab === 'table'}
      />

      <Content
        indicatorRef={indicatorRef}
        tableData={tableData}
        states={{ setTab, setYear, selectedTab, selectedYear }}
      />
    </div>
  );
};

// temp data for map chart
const dataFile = mapFile.features.map((feature: any) => {
  return {
    name: feature.properties.district,
    value: Math.round(Math.random() * 1000),
  };
});

const Content = ({
  indicatorRef,
  tableData,
  states,
}: {
  indicatorRef: any;
  tableData: ITable;
  states: {
    setTab: (tab: 'map' | 'table' | 'chart') => void;
    setYear: (year: string) => void;
    selectedTab: 'map' | 'table' | 'chart';
    selectedYear: string;
  };
}) => {
  const contentRef = React.useRef(null);

  const columns: any = [];
  const columnContentTypes: any = [];
  const columnHelper = createColumnHelper();
  Object.keys(tableData[states.selectedYear][0]).forEach((key: any) => {
    columns.push(columnHelper.accessor(key, { header: key }));
    columnContentTypes.push('numeric');
  });

  React.useEffect(() => {
    // change height of indicator list based on content height
    if (indicatorRef.current && contentRef.current) {
      setTimeout(() => {
        // it takes some time to render the content
        const indicatorList = indicatorRef.current;
        const content: any = contentRef.current;
        const contentHeight = content.offsetHeight;

        indicatorList.style.maxHeight = `${contentHeight - 50}px`;
      }, 20);
    }
  }, [states.selectedTab]);

  const tabs = [
    {
      label: 'Map View',
      value: 'map',
      content: (
        <MapChart
          mapFile={mapFile}
          data={dataFile}
          mapName="assam"
          nameProperty="district"
          height="500px"
        />
      ),
    },
    {
      label: 'Bar View',
      value: 'bar',
      content: (
        <BarChart
          xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          data={[120, 210, 150, 80, 70, 110, 130]}
          height="500px"
        />
      ),
    },
    {
      label: 'Table View',
      value: 'table',
      content: (
        <Table
          columns={columns}
          rows={tableData[states.selectedYear]}
          columnContentTypes={columnContentTypes}
        />
      ),
    },
  ];

  return (
    <div className="grow h-full overflow-x-auto">
      <Tabs
        defaultValue={explorer.tabs[0].value}
        onValueChange={(value) => states.setTab(value as any)}
        value={states.selectedTab}
      >
        <TabList>
          {explorer.tabs.map((tab) => (
            <Tab value={tab.value} key={tab.value}>
              <div className="flex items-center gap-3">
                <Text variant="bodyMd" fontWeight="medium">
                  {tab.label}
                </Text>
              </div>
            </Tab>
          ))}
        </TabList>
        <div
          className="rounded-05 bg-background h-full p-4 md:p-6"
          ref={contentRef}
        >
          <div className="flex gap-4 flex-wrap">
            {/* <ComboboxMulti
              name="block"
              label="Block"
              labelHidden
              defaultList={['Block 1', 'Block 2', 'Block 3', 'Block 4']}
              defaultValues={['Block 1']}
              className="w-full"
              placeholder='Select "Block"'
              verticalContent
            /> */}
            {/* <Select
              name="sort"
              label="Sort By"
              labelHidden
              options={[
                { label: 'Ascending Order', value: 'asc' },
                { label: 'Descending Order', value: 'desc' },
              ]}
              className="w-1/3 grow"
            /> */}
            <Select
              name="year"
              label="Year"
              labelHidden
              onChange={states.setYear}
              options={Object.keys(tableData).map((year) => ({
                label: year,
                value: year,
              }))}
              // className="basis-1/3"
            />
          </div>

          {tabs.map((tab) => (
            <TabPanel value={tab.value} key={tab.value}>
              <div className="relative overflow-y-auto mt-5">{tab.content}</div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
