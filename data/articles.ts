export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categoryColor: string
  iconName: string
  image: string
  featured: boolean
  date?: string
  createdAt: string
  comments: number
}

export const articlesData: Article[] = [
  {
    id: "art-1",
    slug: "cpace-san-beda-partnership",
    title: "CPACE Philippines and San Beda University Manila Forge Partnership to Expand Microcredential Opportunities for Students",
    excerpt: "With this collaboration, CPACE Philippines and San Beda University Manila reaffirm their dedication to empowering students with globally competitive credentials…",
    content: `<p>CPACE Philippines and San Beda University have officially formalized a strategic partnership through the signing of a Memorandum of Agreement (MOA), marking a significant step toward strengthening industry-academe collaboration.</p>
<p>The partnership aims to provide San Beda students with enhanced access to globally aligned certification programs and microcredential opportunities. Through this initiative, students will be able to complement their academic degrees with industry-relevant certifications, equipping them with practical skills and competencies demanded in today’s evolving workforce.</p>
<p>This collaboration underscores both institutions’ shared commitment to bridging the gap between academic learning and real-world application. By integrating CPACE’s professional certification programs into the university ecosystem, students are expected to gain a competitive edge as they prepare to enter their respective industries.</p>
<p>San Beda University, known for its strong academic foundation and commitment to holistic student development, continues to expand its industry linkages to ensure that graduates are future-ready. Meanwhile, CPACE Philippines continues to broaden its reach across educational institutions, reinforcing its mission to elevate professional standards through accessible and high-quality certification programs.</p>
<p>The partnership reflects a growing trend among higher education institutions to align closely with industry leaders—ensuring that graduates are not only academically prepared but also equipped with globally competitive credentials.</p>
<p>With this collaboration, CPACE Philippines and San Beda University Manila reaffirm their dedication to empowering the next generation of professionals through innovation, excellence, and meaningful partnerships.</p>`,
    category: "Partnership",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconName: "users",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    date: "March 18, 2026",
    createdAt: "2026-03-18T08:00:00.000Z",
    comments: 12,
  },
  {
    id: "art-2",
    slug: "beyond-job-titles",
    title: "Beyond Job Titles: Orchestrating People, Tech, and Purpose",
    excerpt: "We're living in a liminal hour where titles matter less than capability. This piece explores how modern organizations orchestrate human talent and tech…",
    content: `<p>We're living in a liminal hour where titles matter less than capability. Modern organizations must focus on orchestrating people, technology, and purpose as a single ecosystem rather than working in isolated silos.</p>
<p>To build future-proof teams, organizations need to move away from static job descriptions and embrace dynamic, skill-based architectures. Aligning people's innate talent with technology empowers them to achieve higher productivity and organizational goals.</p>
<p>Ultimately, purpose remains the ultimate compass. A strong, shared vision unites teams and ensures technology acts as an enabler rather than a disruptor.</p>`,
    category: "Industry Insights",
    categoryColor: "bg-blue-100 text-blue-700 border-blue-200",
    iconName: "trending-up",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "February 6, 2026",
    createdAt: "2026-02-06T08:00:00.000Z",
    comments: 8,
  },
  {
    id: "art-3",
    slug: "fintech-revolution-summit-2026",
    title: "Fintech Revolution Summit – Philippines 2026",
    excerpt: "The Fintech Revolution Summit is set to return to Manila on April 30, 2026, bringing together innovators, leaders, and regulators…",
    content: `<p>The Fintech Revolution Summit is set to return to Manila on April 30, 2026, bringing together industry leaders, innovators, and policymakers from across the region.</p>
<p>The summit will focus on the rapid growth of digital banking, decentralized finance, and blockchain integrations within the Philippine financial sector. Key speakers will address the challenges of cybersecurity, financial inclusion, and the regulatory frameworks required to sustain digital transformation.</p>
<p>Attendees can expect deep-dive panels, networking opportunities, and showcase exhibitions of the latest fintech solutions poised to redefine banking and commerce.</p>`,
    category: "Events",
    categoryColor: "bg-violet-100 text-violet-700 border-violet-200",
    iconName: "zap",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "January 26, 2026",
    createdAt: "2026-01-26T08:00:00.000Z",
    comments: 15,
  },
  {
    id: "art-4",
    slug: "chro-philippines-2026",
    title: "CHRO Philippines 2026: Navigating the Future of HR in the Philippines",
    excerpt: "The conference highlights the critical role of human resource leaders in shaping agile, remote-friendly organizational cultures…",
    content: `<p>CHRO Philippines 2026 highlights the critical role of human resource leaders in shaping agile and remote-friendly organizational cultures.</p>
<p>Topics include modern talent acquisition strategies, mental health and wellness in the workplace, and leveraging AI for HR analytics. As the hybrid work model becomes a permanent fixture in the country, HR professionals must acquire new competencies to keep their workforce motivated, collaborative, and highly engaged.</p>
<p>Join senior executives and industry pioneers to discuss strategies, build networks, and share insights.</p>`,
    category: "Events",
    categoryColor: "bg-violet-100 text-violet-700 border-violet-200",
    iconName: "zap",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "January 15, 2026",
    createdAt: "2026-01-15T08:00:00.000Z",
    comments: 6,
  },
  {
    id: "art-5",
    slug: "cpace-gordon-college-cfms",
    title: "CPACE Philippines, Gordon College host CFMS exam among graduating students",
    excerpt: "CPACE Philippines has partnered with Gordon College to host the CFMS exam among graduating students, facilitating direct access to credentials…",
    content: `<p>CPACE Philippines has partnered with Gordon College to host the CFMS exam among graduating students, facilitating direct access to professional credentials.</p>
<p>This initiative bridges the gap between traditional academic curricula and modern business requirements. By enabling graduating seniors to earn the Certificate in Financial Management Services (CFMS) alongside their college degree, the program ensures they enter the job market with validated, high-demand skills.</p>
<p>Representatives from both Gordon College and CPACE expressed high expectations for the program's success and its long-term benefits to student employment rates.</p>`,
    category: "Partnership",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconName: "users",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "December 20, 2025",
    createdAt: "2025-12-20T08:00:00.000Z",
    comments: 9,
  },
  {
    id: "art-6",
    slug: "batstateu-cpace-accord",
    title: "BatStateU, CPACE Philippines seal accord to expand students' career growth",
    excerpt: "CPACE Philippines has signed an accord with BatStateU to expand students' career growth opportunities through globally aligned credentials…",
    content: `<p>CPACE Philippines has signed an accord with BatStateU to expand students' career growth opportunities through globally aligned credentials.</p>
<p>Under this agreement, BatStateU will integrate CPACE certification pathways into their business and technology departments. Students will gain first-hand access to specialized materials and exam seats, facilitating credentials that are highly valued by corporate recruiters.</p>
<p>This partnership reinforces BatStateU's dedication to quality education and future-ready career readiness for all its students.</p>`,
    category: "Partnership",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconName: "users",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "December 14, 2025",
    createdAt: "2025-12-14T08:00:00.000Z",
    comments: 11,
  },
  {
    id: "art-7",
    slug: "nemsu-tagbina-cpace-collab",
    title: "NEMSU Tagbina in Mindanao to collab with CPACE Philippines after fruitful first CFMS® exam",
    excerpt: "A fruitful first CFMS® exam paves the way for a lasting collaboration between NEMSU Tagbina and CPACE Philippines…",
    content: `<p>A fruitful first CFMS® exam paves the way for a lasting collaboration between NEMSU Tagbina and CPACE Philippines, extending professional education to Mindanao.</p>
<p>Following the outstanding performance of NEMSU Tagbina students in the recent CFMS exam, both organizations have agreed to establish a continuous framework for certification hosting and training.</p>
<p>This milestone represents a major step forward in making premium professional training accessible to students and instructors in regional educational hubs.</p>`,
    category: "Partnership",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconName: "users",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "November 28, 2025",
    createdAt: "2025-11-28T08:00:00.000Z",
    comments: 4,
  },
  {
    id: "art-8",
    slug: "stop-forwarding-emails",
    title: "Stop Forwarding Emails: How cloudHQ Gmail Label Sharing Syncs Your Entire Team",
    excerpt: "In the modern workplace, email remains a cornerstone of communication. Discover how label sharing eliminates forwarding confusion…",
    content: `<p>In the modern workplace, email remains a cornerstone of communication, but forwarding threads can quickly lead to version confusion and lost context. cloudHQ's Gmail Label Sharing changes the game by synchronizing entire labels between team members in real-time.</p>
<p>By sharing a Gmail label, any email sorted into that label automatically appears in your team's folders. This eliminates redundant forwards, speeds up client communication, and ensures all team members have access to up-to-date communication logs without leaving their preferred email client.</p>
<p>Discover how this tech can streamline collaboration and save hours of administrative overhead every week.</p>`,
    category: "Technology",
    categoryColor: "bg-orange-100 text-orange-700 border-orange-200",
    iconName: "globe",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "November 12, 2025",
    createdAt: "2025-11-12T08:00:00.000Z",
    comments: 7,
  },
  {
    id: "art-9",
    slug: "cpace-wlc-partnership",
    title: "CPACE Philippines, WLC Partner to Future-Proof Financial Mgmt Curriculum",
    excerpt: "CPACE Philippines has officially signed a partnership with WLC to future-proof the Financial Management curriculum with industry skills…",
    content: `<p>CPACE Philippines has officially signed a partnership with WLC to future-proof the Financial Management curriculum with industry-relevant skills.</p>
<p>The collaboration introduces certified course modules that align with current international practices in corporate finance, budgeting, and risk analysis. By blending theory with practice, WLC students will graduate with the practical tools and credentials needed to excel in competitive finance sectors.</p>
<p>Both institutions aim to raise the bar for financial education and support local businesses with highly competent finance professionals.</p>`,
    category: "Partnership",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconName: "users",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    date: "October 30, 2025",
    createdAt: "2025-10-30T08:00:00.000Z",
    comments: 5,
  },
]

export function getAllArticles(): Article[] {
  return articlesData
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug)
}
