import glsl from 'vite-plugin-glsl';
import million from 'million/compiler';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [glsl(), million.vite({ auto: true }), react()]
});
