import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata = {
  title: "Orion Arquitetura",
  description: "Hub da Orion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
