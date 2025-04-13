function returnBookCard(bookIndex, prefix){
    return `<div class="book-card">
                <h3>${books[bookIndex].name}</h3>
                <div class="book-img">
                    ${books[bookIndex].cover}
                </div>
                <div class="book-infos">
                    <div class="book-offer">
                        <b>${properPriceDisplay(bookIndex)}</b>
                        <div class="book-likes">
                            <span>${books[bookIndex].likes}</span>
                            <div id="heart-container">
                                ${renderHeartIcon(bookIndex)}
                            </div>
                        </div>
                    </div>
                    <div class="book-details">
                        <div class="detail-row">
                            <span>Autor:</span>
                            <span class="just-right">${books[bookIndex].author}</span>
                        </div>
                        <div class="detail-row">
                            <span>Erscheinungsjahr:</span>
                            <span class="just-right">${books[bookIndex].publishedYear}</span>
                        </div>
                        <div class="detail-row">
                            <span>Genre:</span>
                            <span class="just-right">${books[bookIndex].genre}</span>
                        </div>
                    </div>
                </div>
                <div id="comment-section">
                    <b>Kommentare:</b>
                    <div id="comments-container-${prefix}-${bookIndex}" class="comments-container"></div>
                </div>
                <div id="user-comment-area">
                    <input id="comment-input-${prefix}-${bookIndex}" type="text" placeholder="Schreibe einen Kommentar...">
                    <img src="./assets/icons/send.png" alt="send comment" id="send-comment-${prefix}-${bookIndex}" onclick="pushComment(${bookIndex}, '${prefix}')"> 
                </div>
            </div>`
}

function returnComments(booksIndex, commentsIndex){
    return `<div class="single-comment">
                <div class="comment-name">${books[booksIndex].comments[commentsIndex].name}</div>
                <div class="comment-comment">${books[booksIndex].comments[commentsIndex].comment}</div>
            </div>`
}