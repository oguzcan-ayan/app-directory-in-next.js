import { notFound } from "next/navigation";

export default function BlogPage({ searchParams }){
    if (searchParams.test === 'true'){
        notFound();
    }
    return <div>Blog Page</div>
}