export const STORE_LINKS = {
  googlePlay: {
    name: "Google Play",
    platform: "Android",
    status: "Available" as const,
    url: "https://play.google.com/store/apps/details?id=com.raish_vakaliya.buildrate",
    cta: "Get it on Google Play",
    available: true,
  },
  indusAppstore: {
    name: "Indus Appstore",
    platform: "Android",
    status: "Available" as const,
    url: "https://www.indusappstore.com/apps/business/buildrate/com.raish_vakaliya.buildrate?page=details&id=com.raish_vakaliya.buildrate#",
    cta: "Get BuildRate",
    available: true,
  },
  ios: {
    name: "App Store",
    platform: "iOS",
    status: "Coming Soon" as const,
    url: null,
    cta: "Coming Soon",
    available: false,
  },
} as const;
