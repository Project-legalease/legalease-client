

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>This is the contacyoutt header la</p>
      {children}
    </>
  );
}
