/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    optimizeFonts: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wubpgjitwopvinjieqcq.supabase.co",
                pathname: "/storage/v1/object/public/cabin-images/**",
            },
            {
                protocol: "https",
                hostname: "media.vrbo.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;