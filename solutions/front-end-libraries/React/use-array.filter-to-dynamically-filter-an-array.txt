class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(users => users.online == true); // change code here
    const renderOnline = usersOnline.map(
      userOnline =>
        <li
          key={userOnline.username.toString()}>
          {userOnline.username}
        </li>
    ); // change code here
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>
          {renderOnline}
        </ul>
      </div>
    );
  }
};
