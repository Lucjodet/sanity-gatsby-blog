export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bcf8c81028a3501fb03eb1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bdbdcghx",
                  apiId: "f9bcddfb-43f6-47d4-ac81-622545d4dd84",
                },
                {
                  buildHookId: "60bcf8c8d4b3f6e62549c0b4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-79fopci2",
                  apiId: "97b9d5f3-9bed-47ac-b0f4-610919e333a4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Lucjodet/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-79fopci2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
