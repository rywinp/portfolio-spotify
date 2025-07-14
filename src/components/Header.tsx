import { Box, Typography, Stack } from "@mui/material";
import Lions from "../assets/Lions.jpg"
import VerifiedIcon from '@mui/icons-material/Verified';

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
            <Stack direction={"column"} spacing={1} sx={{ position: "absolute", bottom: 0, left: 0, padding: 2, }}>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <VerifiedIcon sx={{ fontSize: { xs: "1rem", lg: "2.5rem" }, color: "#2da4eeff" }} />
                    <Typography variant="h5" sx={{ fontWeight: 550 }}>Verified Developer</Typography>
                </Stack>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 600
                    }}>
                    Rywin Patcharaput
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 550 }}>2,840 Coffee Cups Drank</Typography>
            </Stack>
        </Box >
    );
}