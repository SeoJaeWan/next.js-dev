import { Metadata } from "next";

const client = process.env.NEXT_PUBLIC_CLIENT;

const createMeta = ({
  title = "",
  description,
}: {
  title?: string;
  description: string;
}): Metadata => ({
  title: `${title}`,
  description,
  keywords: "",
  verification: {
    // google: "",
    // other: {
    //   "naver-site-verification": "",
    // },
  },
  openGraph: {
    title: `${title}`,
    description,
    type: "website",
    images: { url: `${client}/assets/common/ogimage.png` },
  },
  twitter: {
    title: `${title}`,
    description,
    card: "summary_large_image",
    images: { url: `${client}/assets/common/ogimage.png` },
  },

  applicationName: "",
  appleWebApp: {
    capable: true,
    title: ``,
    statusBarStyle: "default",
  },
});

export default createMeta;
