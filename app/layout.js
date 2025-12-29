
import "../styles/globals.css";

export const metadata = {
  title: "Anil Samayam | AI Engineer & Integration Architect",
  description: "AI Engineer and Integration Architect portfolio of Anil Samayam"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
