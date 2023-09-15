export default function getDomain() {

    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";

    const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000" || "127.0.0.1:3000";

    return `${protocol}://${domain}`

};