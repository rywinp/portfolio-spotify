import { Box, Typography } from "@mui/material";
import Lions from "../assets/Lions.jpg"

export default function Header() {
    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: { xs: 200, sm: 300, md: 350, lg: 450, xl: 575 },
            backgroundImage: `url(${Lions})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            borderRadius: 2
        }}>
            <Typography variant="h1" sx={{
                position: "absolute", bottom: 0, left: 0, padding: 2, fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "6rem",
                    xl: "7rem",
                },
                fontWeight: 600,
            }}>Rywin Patcharaput</Typography>
        </Box>
    );
}