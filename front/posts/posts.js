// Mock database data
const mockDB = [
  { id: 1, title: 'Post 1', content: 'This is the content of Post 1.' },
  { id: 2, title: 'Post 2', content: 'This is the content of Post 2.' },
  { id: 3, title: 'Post 3', content: 'This is the content of Post 3.' },
  { id: 4, title: 'Post 4', content: 'This is the content of Post 4.' },
  { id: 5, title: 'Post 5', content: 'This is the content of Post 5.' },
];

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDB);
    }, 2000);
  });
}

fetchPosts().then(posts => console.log(posts));
