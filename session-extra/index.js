// 1. Write code to get array of names from giver array of users
// 2. Get back only active users

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 30,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 19,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 25,
  },
];

function getActiveUsers(users) {
  return users.filter((user) => user.isActive).map((user) => user.name);
}

// 1. Write code to get array of names from giver array of users
// 2. Get back only active users
// 3. Sort users by age descending

function sortActiveUsersByAge(users) {
  const names = users
    .sort((user1, user2) => user2.age - user1.age)
    .filter((user) => user.isActive)
    .map((user) => user.name);

  return names;
}

console.log(sortActiveUsersByAge(users));
