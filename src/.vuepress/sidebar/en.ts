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
  "/products/zilla": [
    {
      text: "Generated AsyncAPI Specs",
      link: "/products/zilla/generated-asyncapi-specs",
    },
    {
      text: "Endpoint Calls Example",
      link: "/products/zilla/endpoint-calls",
    },
    {
      text: "Zilla Service Configurations",
      link: "/products/zilla/manage-configurations",
    },
    {
      text: "References",
      children: [
        {
          text: "AsyncAPI API",
          link: "/api/api-reference.html#tag/asyncapis",
        },
        {
          text: "Config API",
          link: "/api/api-reference.html#tag/config",
        },
      ],
    },
  ],
  "/products/table": [
    {
      text: "Defining Table",
      link: "/products/table/defining-table",
    },
    {
      text: "Initializing Database with Seeder",
      link: "/products/table/seeding-database",
    },
  ],
  "/products/view": [
    {
      text: "Defining View",
      link: "/products/view/defining-view",
    },
    {
      text: "Defining Materialized View",
      link: "/products/view/defining-materialized-view",
    },
  ],
  "/products/stream": [
    {
      text: "Defining Stream",
      link: "/products/stream/defining-stream",
    },
  ],
  "/products/function": [
    {
      text: "User Defined Function (UDF)",
      link: "/products/function/user-defined-function",
    },
    {
      text: "Defining Function",
      link: "/products/function/defining-function",
    },
    {
      text: "Embedded UDF",
      link: "/products/function/embedded-udf",
    },
    {
      text: "External UDF in Java",
      link: "/products/function/external-udf-java",
    },
    {
      text: "External UDF in Python",
      link: "/products/function/external-udf-python",
    },
  ],
  "/products/authentication": [
    {
      text: "Authentication in Zillabase",
      link: "/products/authentication/concepts",
    },
    {
      text: "Authentication Configuration",
      link: "/products/authentication/configuration",
    },
    {
      text: "Obtaining Authenticated User",
      link: "/products/authentication/obtain-user",
    },
    {
      text: "Managing Single Sign On (SSO)",
      link: "/products/authentication/managing-sso",
    },
    {
      text: "References",
      children: [
        {
          text: "Authentication API",
          link: "/api/api-reference.html#tag/auth",
        },
      ],
    },
  ],
  "/products/storage": [
    {
      text: "Storage in Zillabase",
      link: "/products/storage/concepts",
    },
    {
      text: "Managing Bucket",
      link: "/products/storage/bucket",
    },
    {
      text: "Managing Object",
      link: "/products/storage/object",
    },
    {
      text: "References",
      children: [
        {
          text: "Storage API",
          link: "/api/api-reference.html#tag/storage",
        },
      ],
    },
  ],
  "/": [
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
      text: "Products",
      children: [
        {
          text: "Zilla",
          link: "/products/zilla/generated-asyncapi-specs",
        },
        {
          text: "Table",
          link: "/products/table/defining-table",
        },
        {
          text: "View",
          link: "/products/view/defining-view",
        },
        {
          text: "Stream",
          link: "/products/stream/defining-stream",
        },
        {
          text: "Function",
          link: "/products/function/user-defined-function",
        },
        {
          text: "Authentication",
          link: "/products/authentication/concepts",
        },
        // {
        //   text: "Storage",
        //   link: "/products/storage/concepts",
        // },
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
