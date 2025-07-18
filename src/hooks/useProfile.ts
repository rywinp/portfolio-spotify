export default function useProfile() {
    const profile = {
        name: "Rywin Patcharaput",
        avatar: "https://i.pinimg.com/736x/20/e8/60/20e8605124a17ff4bc2268ae18523331.jpg", // Replace with your preferred image
        followers: 128,
        following: 57,
        bio: "Systems enthusiast. Code, coffee, and late-night playlists.",
        location: "Ann Arbor, MI",
        links: {
            github: "https://github.com/rywinp",
            linkedin: "https://linkedin.com/in/rywinp",
            twitter: "https://twitter.com/rywin_dev",
            website: "https://rywin.dev"
        }
    };

    return profile;
}