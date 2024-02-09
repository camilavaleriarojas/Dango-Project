import Layout from "./routes/Layout";
import { ContextProvider } from "./context/index";

export default function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}
