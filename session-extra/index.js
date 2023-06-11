// 1. Write code to get array of names from giver array of users
// 2. Get back only active users

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
  },
];

function getActiveUsers(users) {
  return users.filter((user) => user.isActive).map((user) => user.name);
}

console.log(getActiveUsers(users));
