import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import BlogLayout from "./layout/BlogLayout";
import Page from "./pages/page";
import BlogCard from "./pages/blogcard";
import BlogCard1 from "./pages/blogcard1";
import BlogCard2 from "./pages/blogcard2";
import BlogCard3 from "./pages/blogcard3";
import NoRout from './pages/noRout'
import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Page />} />
        
        <Route path="/blog" element={<BlogLayout />} />
          <Route path="blogcard/" element={<BlogCard />} />
          <Route path="blogcard1/" element={<BlogCard1 />} />
          <Route path="blogcard2/" element={<BlogCard2 />} />
          <Route path="blogcard3/" element={<BlogCard3 />} />

          <Route path="*" element={<NoRout />} />
        {/* </Route > */}
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>   
  )
}

export default App
