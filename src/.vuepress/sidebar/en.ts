import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "/assets/icons/doc.svg",
      text: " Documentation",
      link: "/",
    },
    {
      icon: "/assets/icons/cli ref.svg",
      text: " CLI Documentation",
      link: "/cli",
    },
    {
      icon: "/assets/icons/api ref.svg",
      text: " API Documentation",
      link: "/api",
    },
    {
      text: "Documentation",
      children: [
        {
          text: "Introduction",
          link: "/introduction.md",
        },
      ],
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
          text: "Manage Configurations",
          link: "/guides/manage-migrations",
        },
        {
          text: "Manage Migrations",
          link: "/guides/manage-migrations",
        },
        {
          text: "Manage Authentication",
          link: "/guides/manage-authentication",
        },
        {
          text: "User-Defined Functions",
          link: "/guides/user-defined-function",
        },
      ],
    },
    {
      text: "Sample Application",
      children: [
        {
          text: "StreamPay",
          link: "/sample-app/streampay",
        },
        {
          text: "PetStore",
          link: "/sample-app/petstore",
        },
      ],
    },
    {
      text: "Support",
      children: [
        {
          text: "Troubleshooting",
          link: "/support/troubleshooting",
        },
        {
          text: "FAQs",
          link: "/support/faqs",
        },
        {
          text: "Community Support",
          link: "/support/community-support",
        },
      ],
    },
    // "",
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
  ],
});
