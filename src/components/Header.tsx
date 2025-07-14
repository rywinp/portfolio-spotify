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
            <Stack direction={"column"} sx={{ position: "absolute", bottom: 0, left: 0, padding: 2, }}>
                <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{ position: "absolute", bottom: { xs: 76, sm: 80, lg: 160 } }}>
                    <VerifiedIcon sx={{ fontSize: { xs: "1rem", lg: "3rem" }, color: "#2da4eeff" }} />
                    <Typography variant="h5" sx={{ fontWeight: 550 }}>Verified Developer</Typography>
                </Stack>
                <Typography
                    sx={{
                        fontSize: { xs: "3rem", lg: "7rem" },
                        fontWeight: 600
                    }}>Rywin Patcharaput</Typography>
            </Stack>
        </Box >
    );
}