import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.ts',
  external: ["moment"],
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyBundle',
    sourcemap: true,
    globals: {
      moment: 'moment', // Specify the global variable name for the moment module
    },
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    terser(),
  ],
};