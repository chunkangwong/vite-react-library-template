import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: [path.resolve(__dirname, "src/useCounter.ts")],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/useCounter.ts"),
      name: "useCounter",
      fileName: (format) => `useCounter.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
