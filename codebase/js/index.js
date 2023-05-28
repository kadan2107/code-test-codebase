import { errorMsgContainer } from "./error-messages.js";

/**
* Fetch the json response
*/
function getJSONResponse() {
    const filePath = '../../json/code-test.json';

    fetch(filePath).then(response => {
        return response.json();
    }).then(data => {
        if(data.articles.length > 0){
            prepareHTML(data.articles);
        }
        else{
            alert(errorMsgContainer.emptyResponseMsg);
        }
    });
}

/**
 * Prepare a dynamic HTML
 * @param articleData the array to be looped
 */

function prepareHTML(articleData) {
    var div = document.getElementsByClassName('main-container')[0];
     // Loop through the articleArray and create a dynamic html
    articleData.forEach(element => {
        div.innerHTML += `<div class='container-element'>
                            <div class='text'>
                                <p class='category'>`+ element.primarySectionRouteName+ `</p>
                                <h1 class='headline'>`+element.headline+`</h1>
                                <p class='description'>`+ element.standfirst + `</p>
                               
                            </div>
                            <div class='image'>
                                <img src='`+ element.thumbnail.src + `' title='`+element.thumbnail.title+`'>
                            </div>
                        </div>`;
    });
}

// calling the getJSONResponse function on load of the page
window.onload = getJSONResponse;