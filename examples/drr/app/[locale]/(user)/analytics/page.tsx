// 'use client';

import { Content } from './components/analytics-layout';
import React from 'react';
import { INDICATORS_QUERY } from '@/config/graphql/queries';
import { GraphQL, getQueryClient } from '@/lib/api';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export default async function Home(){


  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([`indicators`], () =>
    GraphQL('analytics', INDICATORS_QUERY)
  );

  console.log(queryClient);
  const dehydratedState = dehydrate(queryClient);

  return <Content />;
}



