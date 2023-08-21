import { notFound } from 'next/navigation';

import { ckan } from '@/config/site';
import { getData } from '@/lib/api';
import { Content } from './components/scheme-layout';

export default async function Home({
  params,
}: {
  params: { scheme: string; department: string; district: string };
}) {
  const data = await getData(ckan.overview);
  const tableData = await getData(ckan.table);
  const rawTableData = await getData(ckan.rawTable);
  const chartData = await getData(ckan.chart);

  function getSchemeObject(obj: any) {
    return obj['depts'][params.department]['schemes'][params.scheme];
  }

  const districtObj = data[params.district];

  // If district or department is not found, return 404
  if (
    !districtObj ||
    !districtObj['depts'][params.department] ||
    !getSchemeObject(districtObj)
  ) {
    return notFound();
  }

  const meta = {
    ...params,
    districtName: districtObj.distTitle,
    departmentName: districtObj['depts'][params.department].deptTitle,
    schemeData: getSchemeObject(districtObj),
    tableData: getSchemeObject(tableData[params.district]).table_data,
    rawTableData: getSchemeObject(rawTableData[params.district]).table_data,
    chartData: getSchemeObject(chartData[params.district]).indicators,
  };

  return (
    <main className="container py-1 lg:py-2">
      <Content data={meta} />
    </main>
  );
}
