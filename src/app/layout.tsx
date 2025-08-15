import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Star Wars App",
  description: "Prueba técnica Frontend",
  icons: {
    icon: '/starWarsIcon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className={` antialiased  bg-primary-dark pb-2`}>
        <section className="w-full flex mt-2 justify-center">
          <Link href="/">
            <Image
              src="/starWarsIcon.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </section>
        <section className="">{children}</section>
      </body>
    </html>
  );
}
