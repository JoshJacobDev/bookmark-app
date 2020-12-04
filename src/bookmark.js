/* eslint-disable no-unused-vars */
import $ from 'jquery';
import store from './store';
import api from './api';
import cuid from 'cuid';

const generageBookmarkPage = function(){
    $('#main').html(`
            <div class="container">
                <button class="js-add-button">Add Bookmark</button>
                <select name="filter" id="filter">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            <div class="add-container">

            </div>
            <ul class="bookmark-article">

            </ul>
    </div>
    `)
}

const AddBookmarkPage = function(){
    if(store.adding === true){
    $('.add-container').html(`<form id="add-bookmark">
    <label for="title">Title : </label>
    <input type="text" id="title" name="title" placeholder="type title" required>
    <label for="url">URL : </label>
    <input type="text" id="url" name="url" placeholder="type url" required>
    <br>
    <label for="description">Description of Bookmark</label>   
    <br> 
    <textarea name="description" id="desc" cols="30" rows="3"></textarea>
    <select name="rate" id="rate">
        <option class="rate" value="1">1</option>
        <option class="rate" value="2">2</option>
        <option class="rate" value="3">3</option>
        <option class="rate" value="4">4</option>
        <option class="rate" value="5">5</option>
    </select>
    <button type='submit' class="add-submit-button">submit</button>
</form>
    `)}
    else{
        $('.add-container').addClass('hidden');
    }
    render();
}

const clickAddBookmark = function(){
    $('#main').on('click' , '.js-add-button' ,e =>{
        console.log('click');
    })
}


const generateError = function(error){
    return `
    <div class="error-message">
        <button id="cancel-error">Cancel</button>
        <p>${error}</p>
    </div>
    `;
}

const renderError = function(){
    if(store.error){
        const emessage = generateError(store.error)
    }
}

const render = function(){
    renderError();
$('.main').html(generageBookmarkPage());
}
const bindEventListener = function(){
    generageBookmarkPage,
    clickAddBookmark
}

export default {
    bindEventListener,
    render
}

/*
const generageBookmarkElement = function(item){
    return `<li class="bookmark-container" data-item-id="${item.id}"> 
    <h3>${item.title}</h3>
    <p class="rate">${item.rate}</p>
    <p class="${item.expanded ? '' : "article-expanded"}">${item.desc}</p>
    <p class="${item.expanded ? '' : "article-expanded"}"><a href="${item.url}" calss="link">Link</a></p>   
    <button class="detail-bookmark-button">Detail</button>
    <button class="delete-bookmark-button">Delete</button>
</li>`
};

const generateBookmarkString = function(item){
    const bookmarks = item.map((item)=> generageBookmarkElement(item));
    return bookmarks.join("");
};

const getItemIdFromElement = function(item){
    return $(item)
            .closest('li')
            .data('item-id');
};

const render = function(){
    console.log('render ran');
    const bookmarkString = generateBookmarkString(Bookmark);
    $('.bookmark-article').html(bookmarkString);
};


const addBookmarkSubmit = function(){
    $('.add-container').on('click', '.add-submit-button' ,function(event){
        event.preventDefault(); 
        var formElement = $(event.target).parent();
        var title = formElement.find("#title").val();
        var url = formElement.find('#url').val();
        var desc = formElement.find('#desc').val();
        var rate = formElement.find('#rate').val();
        
        let bookmarkValues = {
            title : title,
            url : url,
            desc : desc,
            rate: rate,
            expanded: false
        }
        
        Bookmark.push(bookmarkValues);
        render();
    });
};

const addMarkPage = function(){
    $('.add-container').html(`<form id="add-bookmark">
    <label for="title">Title : </label>
    <input type="text" id="title" name="title" placeholder="type title" required>
    <label for="url">URL : </label>
    <input type="text" id="url" name="url" placeholder="type url" required>
    <br>
    <label for="description">Description of Bookmark</label>   
    <br> 
    <textarea name="description" id="desc" cols="30" rows="3"></textarea>
    <select name="rate" id="rate">
        <option class="rate" value="1">1</option>
        <option class="rate" value="2">2</option>
        <option class="rate" value="3">3</option>
        <option class="rate" value="4">4</option>
        <option class="rate" value="5">5</option>
    </select>
    <button type='submit' class="add-submit-button">submit</button>
</form>`);
}

const addBookmarkClick = function(){
    return $('.add-bookmark-button').on('click', event=>{
        event.preventDefault();
        $('.hidden').removeClass('hidden');
        addMarkPage();
})
};

const detailBookmarkView = function(detail){
    let id = detail.parent().data('itemId');
    const item = Bookmark.find(item => item.id === id);
    item.expanded = !item.expanded;
}

const detailBookmarkClicked = function(){
    $('.bookmark-article').on('click', '.detail-bookmark-button' ,  event=>{
        const detail = $(event.target);
        detailBookmarkView(detail);
        render();
    });
}

const deleteBookmarkList = function(itemId){
    let id = itemId.parent().data('itemId')
    const item = Bookmark.find(item => item.id = id);
     Bookmark.splice(item, 1);
}


const deleteBookmarkClick = function(){
    $('.bookmark-article').on('click', '.delete-bookmark-button' , event=>{
        const itemId = $(event.currenttarget);
        deleteBookmarkList(itemId);
        render();
    })
}
*/