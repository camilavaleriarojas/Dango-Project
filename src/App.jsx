import Layout from "./Components/Layout";
import { TitleSizeProvider } from "./Components/TitleContext/index";

export default function App() {
  return (
    <TitleSizeProvider>
      <Layout />
    </TitleSizeProvider>
  );
}
