import Layout from "./layouts/Layout";
import ThemeLoader from "./components/ThemeLoader";
import Subscription from "./page/Subscription";
function App() {
  return (
    <ThemeLoader>
      <Layout>
        <Subscription />
      </Layout>
    </ThemeLoader>
  );
}

export default App;
