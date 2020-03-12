import React from 'react';

const LikeButton = () => {
    let likes = 0;
    let text = (likes == 1) ? 'like' : 'likes';

    const handleClick = e => {
        e.preventDefault();
        likes++;
        console.log('The link was clicked.');
        // ['purple','blue','green','yellow','orange','red']
      }

    return (
        <button onClick={handleClick}>
            {likes} {text}
        </button>
    )
}

export default LikeButton;
