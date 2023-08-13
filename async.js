// TASK ASYNC AWAIT WITH DELIVERABLES
// new promise of  getCold Drinks   

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('colddrink'), 3000);
  })

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  let colddrink = await getColdDrinks;
  console.log(`bought ${colddrink}`);

  console.log(`Husband:Anything else darling`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');











// posts converted to async and await/

const posts = [];
let lastActivity;

function updateLastUserActivity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivity = new Date().toLocaleTimeString();
      console.log(lastActivity);
      resolve();
    }, 1000);
  });
}

async function createPost(post) {
  await new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      console.log(post);
      resolve();
    });
  });
}

async function deletePost() {
  await new Promise((resolve, reject) => {
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

async function updateLastUserActivityTime() {
  try {
    await Promise.all([createPost('hello'), updateLastUserActivity()]);
    await deletePost();
    console.log(posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

updateLastUserActivityTime();
