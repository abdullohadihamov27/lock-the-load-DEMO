import { Box } from "@mui/material"
import "./blogcard.css"

export default function noRout() {
    return (
        <>
            <h1>.</h1><br /><br /><br /><br />
            <Box sx={{
                padding: 0,
                width: 1500,
                margin: 0,
                borderRadius: 0
            }}>
                <img src="https://www.locktheload.com/static/media/404.7aa7232b097b6892ec36.png" className="no-rout" alt="" /><br />
                <a href="/">    <button className="home-btn">Go Home Page</button></a>
            </Box>
        </>

    )
}
