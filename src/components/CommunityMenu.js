import React from "react";
import { Link } from "react-router-dom"

function CommunityMenu(){
    return(
        <div>
        <h3>Communities</h3>
        <div class="ui vertical menu">
  <Link to={`/community/` + 1} class="item">Epl</Link>
  <Link to={`/community/` + 2} class="item">Ligue 1</Link>
  <Link to={`/community/` + 5} class="item">La Liga</Link>
  <Link to={`/community/` + 4}class="item">Serie A</Link>
  <Link to={`/community/` + 3} class="item">Bundesliga</Link>
</div>
</div>
    )
}

export default CommunityMenu;