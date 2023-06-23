import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import { Inter, Roboto } from "next/font/google";
// import "./globals.css";

// const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "Adriana Mihailescu",
//   description: "Frontend Developer ",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
