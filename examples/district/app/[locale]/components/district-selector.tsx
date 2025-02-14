import {
  assamDistrictCategory,
  availableDistricts,
  filterDistricts,
} from '../home.config';
import Icons from '@/components/icons';
import { usePRouter } from '@/hooks/use-prouter';
import { useFetch } from '@/lib/api';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Icon, Input, Separator, Text } from 'opub-ui';
import React from 'react';

const LeafletChoropleth = dynamic(
  () => import('opub-viz').then((mod) => mod.LeafletChoropleth),
  { ssr: false }
);
export const DistrictSelector = () => {
  const [search, setSearch] = React.useState('');
  const [districtList, setDistrictList] = React.useState(assamDistrictCategory);
  const router = usePRouter();
  const { data: mapFile, isLoading: mapLoading } = useFetch(
    `assam-mapFiles`,
    `/files/assam.json`
  );

  // using ref since state will cause re-render
  const districtNameRef = React.useRef<HTMLDivElement>(null);
  function handleMouseOver(e: any) {
    if (districtNameRef.current) {
      districtNameRef.current.innerHTML = e.feature.properties.district;
    }
  }

  function handleMouseOut() {
    if (districtNameRef.current) {
      districtNameRef.current.innerHTML = 'District';
    }
  }

  // filter districtList based on search
  React.useEffect(() => {
    if (search) {
      const filteredDistricts = filterDistricts(search.toLowerCase());
      setDistrictList(filteredDistricts);
    } else {
      setDistrictList(assamDistrictCategory);
    }
  }, [search]);

  const mapDataFn = (
    value: boolean,
    type: 'default' | 'hover' | 'selected' = 'default'
  ) => {
    return value
      ? `var(--mapareadistrict-${type})`
      : 'var(--mapareadistrict-disabled)';
  };

  return (
    <div className="mx-auto mt-10 flex gap-4 max-h-[682px]">
      <div className="relative w-full max-w-[1016px] p-6 rounded-05 bg-surfaceDefault shadow-basicMd hidden md:block">
        {!mapLoading && (
          <LeafletChoropleth
            features={mapFile.features}
            mapZoom={7.4}
            zoomOnClick={false}
            mapProperty="enabled"
            mapDataFn={mapDataFn}
            click={(e) => {
              const features = e.feature.properties;
              if (
                features.district &&
                availableDistricts.find(
                  (e) => e.slug === features.district.toLowerCase()
                )
              )
                router.push(`/${features.district.toLowerCase()}`);
            }}
            hideLayers
            fillOpacity={1}
            mouseover={handleMouseOver}
            mouseout={handleMouseOut}
          />
        )}
        <div
          ref={districtNameRef}
          className="py-2 px-4 bg-backgroundDefault absolute top-8 right-8 border-1 border-solid border-borderDefault rounded-1 z-max h-[40px]"
        >
          District
        </div>
      </div>
      <div className="rounded-05 shadow-basicMd bg-surfaceDefault grow p-4 overflow-y-scroll min-w-[328px]">
        <Text variant="headingLg" fontWeight="semibold">
          Districts
        </Text>
        <Text
          variant="bodyMd"
          fontWeight="regular"
          color="subdued"
          className="block mt-2"
        >
          Select district to view insights
        </Text>
        <Separator className="my-4" />
        <div className="flex flex-col gap-3">
          {availableDistricts.map((district) => (
            <Link
              key={district.slug}
              href={district.slug}
              className={cn(
                'flex items-center gap-2 cursor-pointer text-textInteractive hover:underline'
              )}
            >
              <Icon source={Icons.diamond} color="highlight" />
              <Text variant="bodyLg" fontWeight="medium" color="inherit">
                {district.name}
              </Text>
            </Link>
          ))}
        </div>
        <Separator className="my-4" />
        <Input
          name="district-search"
          placeholder="Search"
          label="Search District"
          labelHidden
          prefix={<Icon source={Icons.search} />}
          onChange={setSearch}
          value={search}
        />
        <div className="mt-8 flex flex-col gap-4">
          {Object.values(districtList).map((category) => (
            <div key={category.name}>
              <div className="flex items-center justify-between gap-1">
                <Text variant="headingSm" fontWeight="medium" color="subdued">
                  {category.name}
                </Text>
                {/* <div className="w-4 h-4 rounded-full bg-lightmodeVioletSolid8 opacity-30" /> */}
              </div>
              <Separator className="mt-2 mb-3" />
              <div className="flex flex-col gap-3">
                {category.districts.map((district) => (
                  <Text
                    key={district}
                    variant="bodyLg"
                    fontWeight="medium"
                    color="disabled"
                  >
                    {district}
                  </Text>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
