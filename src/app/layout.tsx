import type { Metadata } from "next";
import { gmarketSans, pretendard } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ko"
			className={`${gmarketSans.variable} ${pretendard.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
