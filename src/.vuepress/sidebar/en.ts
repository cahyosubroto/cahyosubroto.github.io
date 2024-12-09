import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/cli/": [
    {
      text: "Overview",
      link: "/cli/overview",
    },
    {
      text: "Help",
      link: "/cli/help",
    },
    {
      text: "Init",
      link: "/cli/init",
    },
    {
      text: "Start",
      link: "/cli/start",
    },
    {
      text: "Stop",
      link: "/cli/stop",
    },
    {
      text: "AsyncAPI",
      link: "/cli/asyncapi",
    },
    {
      text: "Config",
      link: "/cli/config",
    },
    {
      text: "Migration",
      link: "/cli/migration",
    },
    {
      text: "SSO",
      link: "/cli/sso",
    },
  ],
  "/": [
    {
      icon: "/assets/icons/doc.svg",
      text: " Documentation",
      link: "/",
    },
    {
      icon: "/assets/icons/cli ref.svg",
      text: " CLI Documentation",
      link: "/cli/overview",
    },
    {
      icon: "/assets/icons/api ref.svg",
      text: " API Reference",
      link: "/api/api-reference",
    },
    {
      text: "Getting Started",
      children: [
        {
          text: "Overview",
          link: "/getting-started/overview.md",
        },
        {
          text: "Quickstart",
          link: "/getting-started/quickstart.md",
        },
      ],
    },
    {
      text: "Guides",
      children: [
        {
          text: "Generated AsyncAPI Specs",
          link: "/guides/generated-asyncapi-specs",
        },
        {
          text: "Zilla Service Configurations",
          link: "/guides/manage-configurations",
        },
        {
          text: "Migrations",
          link: "/guides/manage-migrations",
        },
        {
          text: "Authentication",
          link: "/guides/manage-authentication",
        },
        {
          text: "User-Defined Function",
          link: "/guides/user-defined-function",
        },
      ],
    },
    // {
    //   text: "Sample Application",
    //   children: [
    //     {
    //       text: "StreamPay",
    //       link: "/sample-app/streampay",
    //     },
    //     {
    //       text: "PetStore",
    //       link: "/sample-app/petstore",
    //     },
    //   ],
    // },
    // {
    //   text: "Support",
    //   children: [
    //     {
    //       text: "Troubleshooting",
    //       link: "/support/troubleshooting",
    //     },
    //     {
    //       text: "FAQs",
    //       link: "/support/faqs",
    //     },
    //     {
    //       text: "Community Support",
    //       link: "/support/community-support",
    //     },
    //   ],
    // },
  ],
});
