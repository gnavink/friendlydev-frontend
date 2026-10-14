import type { Route } from "./+types/index";
import type { Project, StrapiPost, StrapiProject, StrapiResponse } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import FeaturedProjects from "~/components/FeaturedProjects";
import LatestPost from "~/components/LatestPosts";
import type { Post } from "~/types";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export async function loader({request}:Route.LoaderArgs):
    Promise<{projects:Project[]; posts:Post[]}>{
 

  const [projectRes, postRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured]
          [$eq]=true&populate=*`),
        fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`  
        )
  ])

  if(!projectRes.ok || !postRes.ok) {
    throw new Error('failed to fetch projects or posts')
  }


  const projectJson : StrapiResponse<StrapiProject> = await projectRes.json()
  const postJson: StrapiResponse<StrapiPost> = await postRes.json()

  const projects = projectJson.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        url: item.url,
        date: item.date,
        category: item.category,
        featured : item.featured,
  }))

  const posts = postJson.data.map((item) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        body: item.body,
        date : item.date,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }))

  return {projects , posts }
}

const  HomePage = ({loaderData}:Route.ComponentProps) => {  

  const {projects, posts} = loaderData  

  return <>
    <FeaturedProjects projects={projects} count={2}/>
    <AboutPreview />
    <LatestPost posts={posts} limit={5} />
  </>;
}

export default HomePage
