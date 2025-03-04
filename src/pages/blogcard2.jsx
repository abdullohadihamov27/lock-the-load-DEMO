import { Box } from "@mui/material"
import "./blogcard.css"
export default function blogcard2() {
  return (
    <>
      <h2>.</h2>
      <Box sx={{
        padding: 0,
        width: 1500,
        margin: 0,
        borderRadius: 0
      }}>
        <div className="blog-card1">
          <div className="card2-img">
            <img src="https://locktheload.com/static/media/blog3.fc384c39c15e7263fc85.png" alt="" />
          </div>
          <div className="blog1-section">
            <div className="blog_logo"><img src="https://locktheload.com/static/media/logo.efb5f14179bd8c3b538f.png" alt="" />
              <b>BLOG</b>
            </div>
            <h1>Best of 2014: Top 10 Commercial Photos</h1>
            <p>Published by LockTheLoad Blog • 1 month ago </p>
          </div>
          <div className="blog1-p">
            <p>As 2023 comes to a close, iti s time to showcase and celebrate some of the top-performing photos by outstanding 500px contributors. These are photos that stood out to content buyers throughout the year. Some were new and submitted to Licensing in 2023, while others have had repeated successful sales over the <br /> years.</p>
            <p>The secret to the saleability of these photos is how well they can connect to  a variety of commercial themes and abstract concepts. Brands are often looking  to license photos that can work well with their messaging, while being abstract  enough to resonate with a variety of demographics and locations.</p>
            <p>Popular themes throughout 2023 included technology, connection, support, culture, community, family, health, wellness, workplaces, and travel. To be a successful  commercial photographer, it is essential to stay on top of the trends and use those  concepts to your advantage when keywording and titling Licensing photos, allowing  them to surface better when searched.</p>
            <p>Popular themes throughout 2023 included technology, connection, support, culture, community, family, health, wellness, workplaces, and travel. To be a successful  commercial photographer, it is essential to stay on top of the trends and use those  concepts to your advantage when keywording and titling Licensing photos, allowing  them to surface better when searched.</p>
          </div>
        </div>

        <p className="releated-posts">Related Posts</p>
        <div className="bottom_blogs">
          <a href="/blogcard" className="bottom_blog">
            <div className="bottom_blog_item">
              <img src="https://locktheload.com/static/media/blog1.074d108a63334d97deca.png" alt="" />
              <p>6 common issues to correct before <br />  submitting your photos to Licensing</p>
            </div>
          </a>
          <a href="/blogcard1" className="bottom_blog">
            <div className="bottom_blog_item">
              <img src="https://locktheload.com/static/media/blog2.105ab9944683da28453b.png" alt="" />
              <p>We asked AI about the future of <br /> trucking industry</p>
            </div>
          </a>
          <a href="/blogcard3" className="bottom_blog">
            <div className="bottom_blog_item">
              <img src="https://locktheload.com/static/media/blog4.4af232bd9bc734cc6a29.png" alt="" />
              <p>Best of 2014: Top 10 Truck Prime <br /> Photos</p>
            </div>
          </a>
        </div>
      </Box>
      <div className="clearfix"></div>
    </>
  )
}
