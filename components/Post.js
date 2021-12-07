import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function Post({ id, username, userImg, postImg, caption }) {
  const { data: session } = useSession();

  return (
    <article className="bg-white my-7 border rounded-sm">
      <PostHeader username={username} userImg={userImg} />
      <PostImage postImg={postImg} />
      {session && <PostActions />}
      <PostCaption username={username} caption={caption} />
      {session && <PostCommentInput />}
    </article>
  );
}

function PostHeader({ username, userImg }) {
  return (
    <header className="flex items-center p-5">
      <img
        className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
        src={userImg}
        alt="User avatar image"
      />
      <p className="flex-1 font-bold">{username}</p>
      <DotsHorizontalIcon className="h-5" />
    </header>
  );
}

function PostImage({ postImg }) {
  return <img src={postImg} alt="" className="object-cover w-full" />;
}

function PostActions() {
  return (
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        <HeartIcon className="postBtn" />
        <ChatIcon className="postBtn" />
        <PaperAirplaneIcon className="postBtn relative bottom-[3px] rotate-45" />
      </div>

      <BookmarkIcon className="postBtn" />
    </div>
  );
}

function PostCaption({ username, caption }) {
  return (
    <p className="p-5 truncate">
      <span className="font-bold mr-1">{username}</span>
      {caption}
    </p>
  );
}

function PostCommentInput() {
  return (
    <form className="flex items-center p-4 space-x-4">
      <EmojiHappyIcon className="postBtn" />
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 focus:ring-0 outline-none border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 focus:border-gray-600 transition-colors"
      />
      <button className="font-semibold text-blue-400">Post</button>
    </form>
  );
}

export default Post;
