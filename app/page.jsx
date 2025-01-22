export const metadata = {
  title: 'RootHead',
  description: 'homepage',
}

import { notFound } from "next/navigation";

export default function HomePage({ searchParams }){
  if (searchParams.test === 'true'){
      notFound();
  }
  return <div>Home Page</div>
}
