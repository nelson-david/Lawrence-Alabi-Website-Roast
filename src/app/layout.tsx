import type { Metadata, Viewport } from "next";
import "aos/dist/aos.css";
import "./grid.scss";
import "./globals.scss";

export const metadata: Metadata = {
    metadataBase: new URL("https://thelawrenz.theurban.studio"),
    title: "Lawrence Alabi",
    description: "Lawrence Alabi by The Urban Studio",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    alternates: {
        canonical: "https://thelawrenz.theurban.studio",
        languages: {
            "en-NG": "/en-NG",
            "en-GH": "/de-GH",
        },
    },
    openGraph: {
        title: "Lawrence Alabi",
        description: "Lawrence Alabi by The Urban Studio",
        images: "https://i.postimg.cc/vHJ5wgNK/Twitter-post-1-3-min.png",
        url: "https://thelawrenz.theurban.studio",
        siteName: "Lawrence Alabi by The Urban Studio",
    },

    keywords: [
        "The Lawrenz",
        "Lawrence Alabi",
        "Alabi Lawrence",
        "Alabi",
        "The Urban Studio",
        "The Lawrenz by The Urban Studio",
        "David Chikabadu Ogwu-Nelson",
        "David Chika",
        "The Urban Dev",
    ],
    applicationName: "Lawrence Alabi by The Urban Studio",
};

export const viewport: Viewport = {
    themeColor: "#000000",
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
