import clsx from "clsx";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navigation from "~/components/Navigation";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome, I'm Veloi.",
  description:
    "I'm a skilled React developer with expertise in TypeScript and React Native, dedicated to crafting delightful user experiences.",
  openGraph: {
    type: "website",
    title: "Welcome, I'm Veloi.",
    description:
      "I'm a skilled React developer with expertise in TypeScript and React Native, dedicated to crafting delightful user experiences.",
    siteName: "Veloi's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(manrope.variable, "font-sans", "bg-black")}>
        <div className="fixed inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="w-full bg-neutral-950 ring-neutral-300/20"></div>
          </div>
        </div>
        <div>
          <div className="max-w-7xl relative mx-auto">
            <p className="absolute px-4 lg:px-8 top-0 w-full z-30 py-2 bg-neutral-900 border-b-4 border-dashed border-b-rose-500 text-white text-lg text-center">
              This portfolio is being actively worked on...
            </p>
          </div>
          <div className="flex justify-center items-center">
            <nav className="bg-neutral-900 shadow-md mt-16 relative z-20 rounded-full border border-neutral-800">
              <Navigation />
            </nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
