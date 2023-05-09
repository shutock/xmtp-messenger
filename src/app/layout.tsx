import { fonts } from "@/lib";
import { Providers } from "@/modules";

import type { IComponent } from "@/lib";

import "@/sass/globals.scss";

export const metadata = {
  title: "frenly messenger",
  description: "get in touch with your frens onchain",
};

const Layout: IComponent = ({ children }) => {
  return (
    <Providers>
      <html lang="en" className={fonts.rounded.className}>
        <body className="light">{children}</body>
      </html>
    </Providers>
  );
};

export default Layout;
