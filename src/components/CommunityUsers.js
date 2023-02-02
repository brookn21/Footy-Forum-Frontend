import React from "react";
import { List, Image } from "semantic-ui-react";

function CommunityUsers(props) {
  const { user } = props;
  return (
    <div>
      <List divided vertical size="massive">
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
          />
          <List.Content>
            <List.Header>{user.username}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default CommunityUsers;
