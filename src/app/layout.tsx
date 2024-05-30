/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
                />
            </Head>
            <body>{children}</body>
        </html>
    );
}
