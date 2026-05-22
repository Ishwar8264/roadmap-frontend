import React from "react";

type UserCardProps = {
  name: string;
  role: string;
};
class UserCard extends React.Component<UserCardProps> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.role}</p>
      </div>
    );
  }
}

export default UserCard;
