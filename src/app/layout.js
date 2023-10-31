import "./globals.css";

export const metadata = {
  title: "Manideep.dev | Portfolio",
  description: "Manideep vaddepalli portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
