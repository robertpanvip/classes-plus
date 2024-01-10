import { defineConfig } from "es-pkg";

export default defineConfig({
    "entry": "./classes/index.ts",
    "src": "./classes",
    "es": "./es",
    "lib": "./lib",
    "publishDir": "../classes-plus-npm"
})