
import "../styles/globals.css";

export const metadata = {
  title: "Anil Samayam | AI Engineer & Integration Architect",
  description: "AI Engineer & Integration Architect with 11+ years of enterprise experience"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
