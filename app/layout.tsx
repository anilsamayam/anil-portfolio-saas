
import "../styles/globals.css";

export const metadata = {
  title: "Anil Samayam | AI Engineer & Integration Architect",
  description: "AI Engineer and Integration Architect portfolio of Anil Samayam",
  openGraph: {
    title: "Anil Samayam | AI Engineer",
    description: "AI Engineer & Integration Architect portfolio",
    images: ["/images/hero.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
