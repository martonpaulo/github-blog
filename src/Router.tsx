import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Homepage } from "@/pages/Homepage";
import { PostPage } from "@/pages/PostPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
