export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

 
  return (
    <html lang="en">
      <body>

        {children}

        {/* THEME TOGGLE */}
      </body>
    </html>
  );
}
