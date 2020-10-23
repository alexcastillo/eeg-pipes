import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "dist/esm/index.js",
  output: {
    file: "dist/esm/eeg-pipes.mjs",
    format: "es",
    name: "EEGPipes"
  },
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: "node_modules/**"
    })
  ]
};
