import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

defineConfig({
    plugins: [react()]
});

export default defineConfig;
