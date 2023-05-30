import { errorMsgContainer } from "./error-messages.js";

/**
* Fetch the json response
*/
function getJSONResponse() {
    const filePath = '../../json/code-test.json';

    fetch(filePath).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(errorMsgContainer.executionFailedMsg);
    }).then(data => {
        if(data.articles.length > 0){
            prepareHTML(data.articles);
        }
        else{
            alert(errorMsgContainer.emptyResponseMsg);
        }
    }).catch((error) => {
        alert(error);
    });
}

/**
 * Prepare a dynamic HTML
 * @param articleData the array to be looped
 */

function prepareHTML(articleData) {
    var div = document.querySelector('.main-container');
     // Loop through the articleArray and create a dynamic html
    articleData.forEach(element => {
        div.innerHTML += `<div class='container-element'>
                            <div class="inner-box">
                            <div class='text'>
                                <p class='category'>`+ element.primarySectionRouteName+ `</p>
                                <h1 class='headline'>`+element.headline+`</h1>
                                <p class='description'>`+ element.standfirst + `</p>
                            </div>
                            <div class='image'>
                                <img src='`+ element.thumbnail.src + `' title='`+element.thumbnail.title+`'>
                            </div>
                            </div>
                        </div>`;
    });
}

// calling the getJSONResponse function on load of the page
window.onload = getJSONResponse;