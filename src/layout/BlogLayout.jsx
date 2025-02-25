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
            <NavLink to={"/blogcard"}> <img src="https://locktheload.com/static/media/blog1.074d108a63334d97deca.png" alt="" /></NavLink>
          </div>
          <div className="blog_card">
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <h4>Celebrating top performing Licensing photos of 2023</h4>
            
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard"}> <button>Keep Reading </button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <NavLink to={"/blogcard1"}> <img src="https://locktheload.com/static/media/blog2.105ab9944683da28453b.png" alt="" /></NavLink>
          </div>
          <div className="blog_card">
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <h4>We asked AI about the future of trucking industry</h4>
            
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard1"}> <button>Keep Reading </button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <NavLink to={"/blogcard2"}> <img src="https://locktheload.com/static/media/blog3.fc384c39c15e7263fc85.png" alt="" /></NavLink>
          </div>
          <div className="blog_card">
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <h4>Best of 2014: Top 10 Commercial Photos</h4>
            
            <p>
              As 2023 comes to a close, it is time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors.
            </p>
            <h3>
              <NavLink to={"/blogcard2"}> <button>Keep Reading </button></NavLink>
            </h3>
          </div>
        </div>
        <div className="blog-cards">
          <div className="blog_img">
            <NavLink to={"/blogcard3"}> <img src="https://locktheload.com/static/media/blog4.4af232bd9bc734cc6a29.png" alt="" /></NavLink>
          </div>
          <div className="blog_card">
            <h6>in LockTheLoad Blog • 1 month ago </h6>
            <h4>How to take jaw-dropping travel images</h4>
            
            <p>
              Travel is the perfect chance to capture new and unique places, so don not miss the opportunity to pull out your camera and take captivating photos.
            </p>
            <nav>
              <h3>
                <NavLink to={"/blogcard3"}> <button>Keep Reading </button></NavLink>
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
