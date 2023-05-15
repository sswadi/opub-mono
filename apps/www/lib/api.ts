import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

import { GRAPHQL_URL } from '@/config/site';
import { getSdk } from '../graphql';

const gqlClient = new GraphQLClient(GRAPHQL_URL);
export const { getDatasets, getPolicy, create_dataset } = getSdk(gqlClient);

export const getQueryClient = React.cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
      },
    })
);
