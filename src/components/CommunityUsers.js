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
            src={user?.img ? user.img : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg"}
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
