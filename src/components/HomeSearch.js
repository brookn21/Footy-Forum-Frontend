import React from "react";


function HomeSearch(){
    return(
        <div>
            <div class="ui category search">
                <div class="ui icon input">
                    <input class="prompt" type="text" />
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        </div>
    )
}

export default HomeSearch;