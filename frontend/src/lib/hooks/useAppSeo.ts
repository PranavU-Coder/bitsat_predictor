import { useSeoMeta, useHead } from "@unhead/react";
import { useLocation } from "react-router-dom";

type SEOParams = {
  title?: string;
  description?: string;
  image?: string;
  isPrivate?: boolean;
};

const useAppSeo = ({ title, description, image, isPrivate = false }: SEOParams) => {
  const location = useLocation();

  const {
    VITE_WEBSITE_NAME,
    VITE_FRONTEND_URL,
    VITE_DEFAULT_DESCRIPTION,
    VITE_DEFAULT_OG_IMAGE,
    VITE_TWITTER_HANDLE,
    VITE_THEME_COLOR,
  } = import.meta.env;

  const defaultTitle = `${VITE_WEBSITE_NAME} - Bitsat-Predictor`;
  const fullTitle = title || defaultTitle;
  const frontendUrl =
  typeof VITE_FRONTEND_URL === "string" && VITE_FRONTEND_URL.trim() !== ""
    ? VITE_FRONTEND_URL.replace(/\/$/, "")
    : "https://bitsat-predictor.com";

  const cleanPath =
    location.pathname === "/"
      ? "/"
      : location.pathname.replace(/\/$/, "");
  const canonicalUrl = `${frontendUrl}${cleanPath}`;

  useSeoMeta({
    title: fullTitle,
    description: description || VITE_DEFAULT_DESCRIPTION,
    ...(isPrivate
      ? { robots: "noindex, nofollow" }
      : {
          robots: "index, follow",
          ogTitle: fullTitle,
          ogDescription: description || VITE_DEFAULT_DESCRIPTION,
          ogUrl: canonicalUrl,
          ogImage: image || VITE_DEFAULT_OG_IMAGE,
          ogSiteName: VITE_WEBSITE_NAME,
          ogLocale: "en_IN",
          ogType: "website",
          twitterCard: "summary_large_image",
          twitterTitle: fullTitle,
          twitterDescription: description || VITE_DEFAULT_DESCRIPTION,
          twitterImage: image || VITE_DEFAULT_OG_IMAGE,
          twitterSite: VITE_TWITTER_HANDLE,
          themeColor: VITE_THEME_COLOR,
        }),
  });

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
};

export default useAppSeo;