import type { Metadata, Viewport } from "next";
import {
  NextStudio,
  type NextStudioProps,
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Albore Accountants CMS Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  ...studioViewport,
};

export default function StudioPage() {
  return (
    <NextStudio
      config={config as unknown as NextStudioProps["config"]}
    />
  );
}

