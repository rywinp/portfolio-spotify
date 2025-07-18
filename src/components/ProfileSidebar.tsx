import { Stack, Avatar, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language"; // for personal site
import useProfile from "../hooks/useProfile";

export default function ProfileSidebar() {
    const profile = useProfile();

    return (
        <Stack spacing={2} alignItems="center" display={"flex"} sx={{ backgroundColor: "black", width: 1000, p: 2 }}>
            <Avatar src={profile.avatar} sx={{ width: 120, height: 120 }} />
            <Typography variant="h6" fontWeight="bold">{profile.name}</Typography>
            <Typography variant="body2" color="text.secondary">
                {profile.followers} followers • {profile.following} following
            </Typography>
            <Typography variant="body2" textAlign="center">
                "{profile.bio}"
            </Typography>
            <Typography variant="caption" color="text.secondary">{profile.location}</Typography>
            <Stack direction="row" spacing={1}>
                <IconButton component="a" href={profile.links.github} target="_blank"><GitHubIcon /></IconButton>
                <IconButton component="a" href={profile.links.linkedin} target="_blank"><LinkedInIcon /></IconButton>
                <IconButton component="a" href={profile.links.twitter} target="_blank"><TwitterIcon /></IconButton>
                <IconButton component="a" href={profile.links.website} target="_blank"><LanguageIcon /></IconButton>
            </Stack>
        </Stack>
    );
}
