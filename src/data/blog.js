// blogData.js

import seoImg from "../utils/seo.svg";
import webImg from "../utils/web_01.svg";
import app from "../utils/App_01.svg";
import social from "../utils/social-media.svg";

export const blogs = [
  {
    id: 1,
    title: "5 SEO Tips to Boost Your Website Ranking",
    slug: "seo-tips-to-boost-ranking",
    summary:
      "Discover effective SEO strategies to improve your visibility on search engines and drive     organic traffic.",
    content: `Search Engine Optimization (SEO) is essential in driving traffic and improving your site's visibility. Here's how you can optimize your site effectively:\n
1. **Keyword Research** – Find and use high-volume, low-competition keywords.\n
2. **On-Page Optimization** – Use your keywords in meta tags, headings, and content strategically.\n
3. **Speed Optimization** – Compress images and use caching to load your pages faster.\n
4. **Backlink Building** – Acquire backlinks from reputable websites.\n
5. **Quality Content** – Publish valuable, original content regularly.\n
Apply these techniques consistently and measure results through tools like Google Analytics and Search Console.`,
    date: "2025-06-10",
    author: "Abhishek Kumar",
    category: "SEO",
    image: seoImg,
    readingTime: "4 min read",
  },
  {
    id: 2,
    title: "Why Responsive Web Design Matters in 2025",
    slug: "responsive-web-design-2025",
    summary:
      "Learn why mobile-first and responsive design are essential for user experience and SEO.",
    content: `Responsive web design ensures that your website looks and functions well across all devices and screen sizes.\n
Here’s why it matters:\n
- **Mobile Usage**: Over 60% of web traffic now comes from mobile devices.\n
- **SEO Benefits**: Google prioritizes mobile-friendly sites in search rankings.\n
- **User Experience**: Responsive layouts reduce bounce rates and improve engagement.\n
- **Cost Efficiency**: One site for all devices is easier and cheaper to maintain.\n
Ensure your site uses flexible grids, media queries, and responsive images to stay ahead in 2025.`,
    date: "2025-06-01",
    author: "Ritika Sharma",
    category: "Web Design",
    image: webImg,
    readingTime: "3 min read",
  },
  {
    id: 3,
    title: "How to Create a Successful Social Media Strategy",
    slug: "social-media-strategy-guide",
    summary:
      "Build a strong brand presence across social platforms using targeted content and analytics.",
    content: `Creating a winning social media strategy involves more than just posting. Here's what you should do:\n
1. **Define Your Goals**: Brand awareness, traffic, leads, or sales.\n
2. **Know Your Audience**: Understand where your users spend time and what content resonates.\n
3. **Content Calendar**: Plan consistent, engaging posts with themes and promotions.\n
4. **Track KPIs**: Use metrics like reach, engagement, and conversion to evaluate success.\n
5. **Adjust & Optimize**: Analyze performance and tweak strategies as needed.\n
Use tools like Buffer, Hootsuite, or Meta Business Suite to schedule and manage content effectively.`,
    date: "2025-05-25",
    author: "Sameer Joshi",
    category: "Social Media",
    image: social,
    readingTime: "5 min read",
  },
];
