import { StyledComponentsRegistry } from "@/lib/styledComponents/StyledComponentsRegistry";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (     
    <StyledComponentsRegistry>
            {children}
    </StyledComponentsRegistry>
  );
}
