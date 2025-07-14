import { Box, Typography } from "@mui/material";
import Lions from "../assets/Lions.jpg"

export default function Header() {
    return (
        <Box sx={{position: "relative", width: "100%", height: { xs: 200, xl: 500 }, backgroundImage: `url(${Lions})`, backgroundSize: "cover", backgroundPosition: "top", borderRadius: 2 }}>
            <Typography variant="h1" sx={{position: "absolute", bottom: 0, left: 0, padding: 2}}>Rywin Patcharaput</Typography>
        </Box>
    );
}