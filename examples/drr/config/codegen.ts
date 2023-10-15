import type { CodegenConfig } from '@graphql-codegen/cli';

import { gqlConfig } from './site';

const config: CodegenConfig = {
  schema: gqlConfig.analytics,
  documents: 'config/**/*.ts',
  ignoreNoDocuments: true,
  generates: {
    './gql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
