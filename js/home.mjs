import axiosClient from './api/axiosClient';
import postApi from './api/postApi';

function createPostElement(post) {
  if (!post) return;
  try {
    const postTemplate = document.getElementById('postTemplate');
    if (!postTemplate) return;
    const liElement = postTemplate.content.firstElementChild.cloneNode(true);
    if (!liElement) return;

    const titleElement = liElement.querySelector('[data-id = "title"]');
    if (titleElement) titleElement.textContent = post.title;

    const descriptionElement = liElement.querySelector('[data-id = "description"]');
    if (descriptionElement) descriptionElement.textContent = post.description;
  } catch (error) {
    console.log('Faild to create post item', error);
  }
}

function renderPostList(postList) {
  console.log({ postList });
  if (!Array.isArray(postList) || postList.length === 0) return;
  const ulElement = document.getElementById('postList');
  if (!ulElement) return;
  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}

(async () => {
  try {
    const queryParams = {
      _page: 1,
      _litmit: 10,
    };
    const { data, pagination } = await postApi.getAll(queryParams);
    renderPostList(data);
  } catch (error) {}
})();
