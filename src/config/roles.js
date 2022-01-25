const allRoles = {
  user: ['getUsers', 'updateUsers', 'postMotels'],
  admin: ['getUsers', 'manageUsers', 'updateMotels'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
