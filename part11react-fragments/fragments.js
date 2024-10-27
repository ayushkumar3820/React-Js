import React from 'react';

const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
};

// import React from 'react';

// const MyComponent = () => {
//   return (
//     <>
//       <h1>Hello, World!</h1>
//       <p>This is a paragraph.</p>
//     </>
//   );
// };
import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <React.Fragment>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <UserList />
    </div>
  );
};

export default App;
