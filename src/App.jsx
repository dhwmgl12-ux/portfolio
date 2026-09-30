import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ZooleafPage from "./pages/ZooleafPage";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    document.title =
      pathname === "/"
        ? "박형우 | Frontend Developer"
        : pathname === "/projects/zooleaf"
          ? "ZooLeaf | 박형우 포트폴리오"
          : "페이지를 찾을 수 없습니다 | 박형우";
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/zooleaf" element={<ZooleafPage />} />

      <Route
        path="*"
        element={
          <main>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <Link to="/">홈으로 돌아가기</Link>
          </main>
        }
      />
    </Routes>
  );
}
