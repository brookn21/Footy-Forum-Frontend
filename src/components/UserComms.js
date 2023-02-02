import React from "react";
import { List, Image } from "semantic-ui-react";

function UserComms(props) {
    const { community } = props
  return (
    <div>
      <List divided horizontal size="massive">
        <List.Item>
          <Image
            avatar
            src={community.img}
          />
          <List.Content>
            <List.Header>{community.name}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default UserComms;
