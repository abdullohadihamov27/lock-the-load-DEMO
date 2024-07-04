import { NavLink, Outlet } from "react-router-dom"
import "./RootLayout.css"
import { Box } from "@mui/material"

export default function BlogLayout() {
  return (
    <>
      <h4>.</h4>
      <Box sx={{
        padding: 0,
        width: 1500,
        margin: 0,
        borderRadius: 0
      }}>
        <h2 className="blog-title">Blog: Posts</h2>
        <div className="blog-cards">
          <div className="blog_img">
            <img src="https://www.locktheload.com/static/media/blog1.850fb07b0876bf298ec1.png" alt="" />
          </div>
          <div className="blog_card">
            <h4>Celebrating top performing Licensing photos of 2023</h4>
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard"}> <button>Keep Reading</button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <img src="https://www.locktheload.com/static/media/blog2.86f07b419d139d23682a.png" alt="" />
          </div>
          <div className="blog_card">
            <h4>We asked AI about the future of trucking industry</h4>
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard1"}> <button>Keep Reading</button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <img src="https://www.locktheload.com/static/media/blog3.d9198d23d6f0b362310a.png" alt="" />
          </div>
          <div className="blog_card">
            <h4>Best of 2014: Top 10 Commercial Photos</h4>
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard2"}> <button>Keep Reading</button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <img src="https://www.locktheload.com/static/media/blog4.c9dca219f4ea629e372b.png" alt="" />
          </div>
          <div className="blog_card">
            <h4>How to take jaw-dropping travel images</h4>
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <p>
              Travel is the perfect chance to capture new and unique places, so don not miss the opportunity to pull out your camera and take captivating photos.
            </p>
            <nav>
              <h3>
                <NavLink to={"/blogcard3"}> <button>Keep Reading</button></NavLink>
              </h3>
            </nav>
          </div>
        </div>
      </Box>
      <div className="clearFix"></div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
