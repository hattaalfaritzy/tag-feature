import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { POPPINS, ROBOTO_MONO } from "@/config/fonts";
import { cn } from "@/utils/cn";
import "@/styles/index.css";
import { Providers } from "@/components/sections/providers";

export const metadata: Metadata = {
  title: "Code Test - Ezclass",
  description: "Code Test - Ezclass by hattaalfaritzy",
  authors: [
    {
      name: "Muhammad Hatta Alfaritzy",
      url: "https://www.linkedin.com/in/hattaalfaritzy/",
    },
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Code Test - Ezclass",
    description: "Code Test - Ezclass by hattaalfaritzy",
    images: "/images/logo.png",
    url: "https://github.com/hattaalfaritzy/tag-feature",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth bg-light", POPPINS.variable, ROBOTO_MONO.variable)}>
      <body className="flex flex-col items-center w-full h-full min-h-screen">
        <div className="flex justify-center items-center max-w-2xl w-full p-20">
          <Toaster />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
