import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from './postsSlice';
import { RootState, AppDispatch } from '../../app/store';
import PostItem from '../../components/PostItem';

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
