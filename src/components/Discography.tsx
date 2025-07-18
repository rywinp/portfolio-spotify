import { Stack, Typography, Box } from "@mui/material";
import Album from "./Album";
import useAlbums from "../hooks/useAlbums";

export default function Discography() {
    const albums = useAlbums();

    return (
        <Stack spacing={8}>
            <Typography variant="h2" sx={{ fontWeight: 550 }}>Discography</Typography>
            <Stack direction={"row"} gap={20} flexWrap={"wrap"}>
                {albums.map((album) => {
                    return <Album key={album.name} album={album} />
                })}
            </Stack>
        </Stack>
    );
}