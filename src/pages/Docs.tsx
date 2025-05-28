import { Card } from "@/components/ui/card";
import nav from "@/docs/nav";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function Docs({ markdown }: { markdown?: string }) {

    return (
        <div className="min-h-[80vh]">
            <div className="p-12 bg-[#F6F7FF] mb-8">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Documentation</h1>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <Card className="p-4 bg-white shadow-md mt-8">
                        {nav.map((section: { sectionName: string, sectionItems: { name: string, href: string }[] }, index: number) => (
                            <div key={index}>
                                <h2 className="text-md font-semibold mb-4">{section.sectionName}</h2>
                                <ul className="space-y-2">
                                    {section.sectionItems.map((item, index: number) => (
                                        <li key={index}>
                                            <a href={item.href} className="text-blue-600 hover:underline">{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Card>
                </div>
                <div className="markdown-reset m-0 p-[1rem] col-span-3">
                    <ReactMarkdown components={{
                        table: ({ node, ...props }) => (
                            <table className="w-full border border-gray-300 rounded-lg" {...props} />
                        ),
                        thead: ({ node, ...props }) => (
                            <thead className="bg-gray-100 text-left" {...props} />
                        ),
                        th: ({ node, ...props }) => (
                            <th className="p-2 border font-semibold" {...props} />
                        ),
                        tbody: ({ node, ...props }) => (
                            <tbody className="p-2 border font-semibold" {...props} />
                        ),
                        td: ({ node, ...props }) => (
                            <td className="p-2 border" {...props} />
                        ),
                    }} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default Docs;