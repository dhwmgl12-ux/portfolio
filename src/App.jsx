import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ZooleafPage from "./pages/ZooleafPage";
import NotFoundPage from "./pages/NotFoundPage";

const pageTitles = {
  "/": "박형우 | Frontend Developer",
  "/projects": "프로젝트 | 박형우 포트폴리오",
  "/projects/zooleaf": "ZooLeaf | 박형우 포트폴리오",
};

export default function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[pathname] ?? "페이지를 찾을 수 없습니다 | 박형우";

    const frameId = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;

      if (target) {
        target.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash, key]);

  return (
    <>
      <Header key={pathname} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/zooleaf" element={<ZooleafPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
