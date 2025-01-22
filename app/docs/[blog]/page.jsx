export default function BlogPage({ searchParams }){
    if(searchParams.error === 'true'){
        throw new Error("This is an error");
    }

    return (
        <div>
            <h2>Blog Page</h2>
        </div>
    )
}