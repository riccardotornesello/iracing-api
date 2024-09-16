import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iRacing API",
  description: "A wrapper for the iRacing API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/getting-started" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting started", link: "/getting-started" }],
      },
      {
        text: "API",
        items: [
          { text: "Car", link: "/api/car.md" },
          { text: "Carclass", link: "/api/carclass.md" },
          { text: "Constants", link: "/api/constants.md" },
          {
            text: "DriverStatsByCategory",
            link: "/api/driver_stats_by_category.md",
          },
          { text: "Hosted", link: "/api/hosted.md" },
          { text: "League", link: "/api/league.md" },
          { text: "Lookup", link: "/api/lookup.md" },
          { text: "Member", link: "/api/member.md" },
          { text: "Results", link: "/api/results.md" },
          { text: "Season", link: "/api/season.md" },
          { text: "Series", link: "/api/series.md" },
          { text: "Stats", link: "/api/stats.md" },
          { text: "Team", link: "/api/team.md" },
          { text: "TimeAttack", link: "/api/time_attack.md" },
          { text: "Track", link: "/api/track.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/riccardotornesello/iracing-data-api",
      },
    ],
  },
})
