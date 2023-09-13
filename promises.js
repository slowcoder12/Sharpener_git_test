const posts = [];
let lastActivity;

function updateLastUserActivity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivity = new Date().toLocaleTimeString();
      console.log( lastActivity);
      resolve();
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      console.log( post);
      resolve();
    });
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      if (deletedPost) {
        console.log(deletedPost);
        resolve();
      } else {
        reject('empty.');
      }
    });
  });
}

function updateLastUserActivityTime() {
  return Promise.all([createPost('hello'), updateLastUserActivity()])
    .then(() => deletePost())
    .then(() => {
      console.log(posts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

updateLastUserActivityTime();
