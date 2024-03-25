import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(props) {
  const { post } = props;

  return (
    <Link href={`/mover/${post.slug}`}>
      <div className="shadow-2xl rounded-xl py-14 px-10">
        <Image
          height={650}
          width={340}
          src={post.socialImage}
          alt={post.title}
        />
        <h3 className="text-2xl font-bold my-3">{post.title}</h3>
        <p>{post.metaDesc}</p>
        <p className="text-sm font-semibold italic my-3">{post.date}</p>
      </div>
    </Link>
  );
}
