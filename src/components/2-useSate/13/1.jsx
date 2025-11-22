import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(100);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <div>
      <button onClick={toggleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>{likesCount} likes</p>
    </div>
  );
}

export default LikeButton;
