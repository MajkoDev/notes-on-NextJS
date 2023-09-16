import React from "react";
import Link from "next/link";

const NavWithLinks = () => {
    
  // list of blog posts
  const postsList = [
    {
      title: "First Post",
      slug: "first-post",
      id: 1,
    },
  ];

  // linking to dynamic segments
  const listOfPosts = [
    <ul>
      {postsList.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>,
  ];

  return (
    <>
      <nav className="flex flex-row justify-center gap-5 font-semibold text-lg">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="mt-10 flex flex-col font-light text-center">
        {listOfPosts}
      </div>
    </>
  );
};

export default NavWithLinks;

//* you can also add later:
// - active links
// - scrolling to id
