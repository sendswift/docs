const nav = [
    {
        sectionName: "Introduction",
        sectionItems: [
            { name: "Getting Started", href: "/documentation/getting-started" }, // Default redirect from /documentation - configured in App.tsx
            { name: "Authorization", href: "/documentation/authorization" },
            { name: "API Reference", href: "/documentation/api-reference" },
        ],
    },
    {
        sectionName: "Events",
        sectionItems: [
            { name: "Subscribe", href: "/documentation/subscribe" },
            { name: "Unsubscribe", href: "/documentation/unsubscribe" },
        ],
    },
    {
        sectionName: "Actions",
        sectionItems: [
            { name: "Add Lead to Campaign", href: "/documentation/add-lead-to-campaign" },
            { name: "Add Lead to Blocklist", href: "/documentation/add-lead-to-blocklist" },
            { name: "Change Lead Status", href: "/documentation/change-lead-status" },
            { name: "Remove Lead from Campaign", href: "/documentation/remove-lead-from-campaign" },
        ],
    },
    {
        sectionName: "Retrieve",
        sectionItems: [
            { name: "Get Campaigns", href: "/documentation/get-campaigns" },
        ],
    },
];


export default nav;