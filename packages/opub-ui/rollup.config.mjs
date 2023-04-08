import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { readFileSync } from 'fs';
import path from 'path';
import copy from 'rollup-plugin-copy';
import { externals } from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
// import { visualizer } from 'rollup-plugin-visualizer';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url).pathname)
);

const rollup = (_args) => {
  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  return {
    input: './src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    plugins: getPlugins(),
    external,
  };
};

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const getPlugins = () => {
  const typeScriptOptions = {
    tsconfig: './tsconfig.json',

    exclude: [
      'node_modules',
      'build',
      'dist',
      'scripts',
      '.storybook',
      '**/*.stories.tsx',
      '**/*.test.tsx',
    ],
    compilerOptions: {
      rootDir: 'src',
    },
  };

  return [
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
      extract: path.resolve('dist/assets/styles-bundled.css'),
    }),
    svgr(),
    nodeResolve({ extensions }),
    commonjs(),
    externals({ deps: true, packagePath: './package.json' }),
    copy({
      targets: [{ src: 'assets', dest: 'dist' }],
    }),
    typescript(typeScriptOptions),
    terser(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    // }),
  ];
};

export default rollup;
