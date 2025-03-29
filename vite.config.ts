import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "cruise-tagger"; // Updated from lovable-tagger to cruise-tagger

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 3000, // Changed from default 5173 to 3000
  },
  // plugins: [
    // react(),
    // mode === 'development' 
    //componentTagger(),
  //]
  // .filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
