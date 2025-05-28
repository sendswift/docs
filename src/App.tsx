import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import { useEffect, useState } from "react";

const markdownFiles = import.meta.glob("./docs/*.md", { as: "raw" });

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/documentation" element={<Navigate to="/documentation/getting-started" replace />} />
        {markdownRoutes}
      </Routes>
    </>
  );
}


const markdownRoutes = Object.entries(markdownFiles).map(([path, loader]) => {
  const routePath = path
    .split("/")
    .pop()
    ?.replace(/\.md$/, "");

  const Component = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
      loader().then((data: string) => {
        setContent(data);
      });
    }, []);

    return (
      <Layout>
        <Docs markdown={content} />
      </Layout>
    );
  };

  return <Route key={routePath} path={`/documentation/${routePath}`} element={<Component />} />;
});

export default App;
