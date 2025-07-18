import { Card, CardMedia, CardContent, Typography, IconButton, Stack } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Album({ album }) {
    return (
        <Card
            sx={{
                width: 450,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#1e1e1e",
                color: "white",
                overflow: "hidden",
            }}
        >
            <CardMedia
                component="img"
                height="300"
                image={album.cover}
                alt={album.name}
                sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <div>
                        <Typography variant="subtitle1" fontWeight="bold" noWrap>
                            {album.name}
                        </Typography>
                        <Typography variant="body2" color="gray" noWrap>
                            {album.name}
                        </Typography>
                    </div>
                    <IconButton
                        sx={{
                            color: "white",
                            bgcolor: "#1db954",
                            "&:hover": { bgcolor: "#1ed760" },
                            width: 36,
                            height: 36,
                        }}
                    >
                        <PlayArrowIcon />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
}