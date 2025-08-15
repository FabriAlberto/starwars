import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Star Wars App",
  description: "Prueba técnica Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className={` antialiased  bg-primary-dark px-5`}>
        <ThemeToggle />
        <section className="w-full flex mt-2 justify-center">
          <Image src="starWarsIcon.svg" alt="Logo" width={100} height={100} />
        </section>
        <section className="">{children}</section>
      </body>
    </html>
  );
}
