/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                {/* <title>Family Movie Guide</title> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
