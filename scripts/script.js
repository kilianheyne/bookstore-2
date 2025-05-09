const books = [
    {
        name: "Die Geheimnisse des Ozeans",
        cover: `<img src="./assets/imgs/die-geheimnisse-des-ozeans-cover.png" alt='Buchcover von "Die Geheimnisse des Ozeans"'>`,
        author: "Clara Meer",
        likes: 1250,
        liked: true,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "Bookworm84",
                comment:
                    "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
            },
            {
                name: "FantasyFanatic",
                comment:
                    "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
            },
            {
                name: "SciFiGuru",
                comment:
                    "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
            },
            {
                name: "NovelLover",
                comment:
                    "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
            },
        ],
    },
    {
        name: "Der vergessene Pfad",
        cover: `<img src="./assets/imgs/der-vergessene-pfad-cover.png" alt='Buchcover'>`,
        author: "Maximilian Schwarz",
        likes: 980,
        liked: false,
        price: 14.5,
        publishedYear: 2021,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Die Farben des Himmels",
        cover: `<img src="./assets/imgs/die-farben-des-himmels-cover.png" alt='Buchcover'>`,
        author: "Laura Blau",
        likes: 1520,
        liked: true,
        price: 22.95,
        publishedYear: 2019,
        genre: "Romantik",
        comments: [
            {
                name: "LeserPeter",
                comment:
                    "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
            },
            {
                name: "BookLover21",
                comment:
                    "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
            },
            {
                name: "FantasyNerd",
                comment:
                    "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
            },
            {
                name: "SciFiEnthusiast",
                comment:
                    "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
            },
            {
                name: "ReadingAddict",
                comment:
                    "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
            },
        ],
    },
    {
        name: "Das Rätsel der Zeit",
        cover: `<img src="./assets/imgs/das-raetsel-der-zeit-cover.png" alt='Buchcover'>`,
        author: "Alexander Weiss",
        likes: 750,
        liked: false,
        price: 18.0,
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BuchKenner",
                comment:
                    "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
            },
            {
                name: "LeseWurm",
                comment:
                    "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
            },
        ],
    },
    {
        name: "Der letzte Wächter",
        cover: `<img src="./assets/imgs/der-letzte-waechter-cover.png" alt='Buchcover'>`,
        author: "Sabine Grün",
        likes: 1300,
        liked: true,
        price: 16.75,
        publishedYear: 2017,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Im Schatten des Mondes",
        cover: `<img src="./assets/imgs/im-schatten-des-mondes-cover-s.png" alt='Buchcover'>`,
        author: "Philipp Silber",
        likes: 890,
        liked: false,
        price: 12.3,
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BücherLiebhaber",
                comment:
                    "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
            },
            {
                name: "Leseratte",
                comment:
                    "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
            },
        ],
    },
    {
        name: "Jenseits der Sterne",
        cover: `<img src="./assets/imgs/jenseits-der-sterne-cover.png" alt='Buchcover'>`,
        author: "Oliver Schwarz",
        likes: 1450,
        liked: true,
        price: 21.0,
        publishedYear: 2015,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
            },
        ],
    },
    {
        name: "Das verborgene Königreich",
        cover: `<img src="./assets/imgs/das-verborgene-koenigreich-cover.png" alt='Buchcover'>`,
        author: "Elena Gold",
        likes: 920,
        liked: false,
        price: 17.5,
        publishedYear: 2020,
        genre: "Fantasy",
        comments: [
            {
                name: "Bookworm92",
                comment:
                    "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
            },
        ],
    },
    {
        name: "Liebe in Zeiten des Krieges",
        cover: `<img src="./assets/imgs/liebe-in-zeiten-des-krieges-cover.png" alt='Buchcover'>`,
        author: "Emilia Rot",
        likes: 1800,
        liked: true,
        price: 19.99,
        publishedYear: 2016,
        genre: "Romantik",
        comments: [
            {
                name: "Bibliophile23",
                comment:
                    "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
            },
            {
                name: "StorySeeker",
                comment:
                    "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
            },
            {
                name: "SciFiExplorer",
                comment:
                    "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
            },
        ],
    },
];

const favBooks = [];

function renderBooks(){
    const containerRef = document.getElementById('books-container');
    containerRef.innerHTML ="";

    for (let i = 0; i < books.length; i++){
        containerRef.innerHTML += returnBookCard(i, 'notfav');

        renderComments(i);
    }
}

function renderComments(commentsIndex){
    const commentsRef = document.getElementById('comments-container-notfav-' + commentsIndex);
        if (books[commentsIndex].comments.length === 0) {
            commentsRef.innerHTML = returnEmptyCommentSection();
        } else {
            for (let j = 0; j < books[commentsIndex].comments.length; j++){
                commentsRef.innerHTML += returnComments(commentsIndex, j);
            }
        }
}

function properPriceDisplay(priceIndex){
    const price = books[priceIndex].price;
    const finalPrice = price.toFixed(2);
    return finalPrice.replace(".", ",") + " " + "€";
}

function renderHeartIcon(heartIndex, heartPrefix){
    const heartRef = books[heartIndex].liked;

    if (heartRef === true) {
        return `<img src="./assets/icons/heart-circle-regular-120.png" alt="like" onclick="toggleLike(${heartIndex}, '${heartPrefix}')">`;
    } else {
        return `<img src="./assets/icons/heart-circle-solid-120.png" alt="not liked" onclick="toggleLike(${heartIndex}, '${heartPrefix}')">`;
    }
}

function pushToFavBooks(favIndex){
    const favRef = books[favIndex].liked;

    if (favRef == true ) {
        favBooks.push(books[favIndex]);
    }
}

function renderFavBooks(){
    const favContainerRef = document.getElementById('fav-container');
    favContainerRef.innerHTML ="";
    
    for (let f = 0; f < books.length; f++){
        if (books[f].liked === true){
            favContainerRef.innerHTML += returnBookCard(f, 'fav');
        
            renderFavComments(f);
        }
    }
}

function renderFavComments(favComIndex){
    const commentsRef = document.getElementById('comments-container-fav-' + favComIndex);
            
            if (books[favComIndex].comments.length === 0) {
                commentsRef.innerHTML = returnEmptyCommentSection();
            } else {
                for (let g = 0; g < books[favComIndex].comments.length; g++){
                    commentsRef.innerHTML += returnComments(favComIndex, g);
                }
            }
}

function pushComment(commentID, prefix){
    const inputRef = document.getElementById('comment-input-'+ prefix + '-' + commentID);
    const inputValueRef = inputRef.value;
    books[commentID].comments.push({name: 'Lese-Maus', comment: inputValueRef});
    renderBooks();
    renderFavBooks();
    inputRef.value = "";
}

function toggleLike(x, togglePrefix){
    books[x].liked = !books[x].liked;

    likeCounter(x);
    toggleHeart(x, togglePrefix);
    renderFavBooks();
}

function likeCounter(likeIndex){
    const likesRefNotFav = document.getElementById(`likes-span-notfav-${likeIndex}`);
    const likesRefFav = document.getElementById(`likes-span-fav-${likeIndex}`);

    if (books[likeIndex].liked == true){
        books[likeIndex].likes += 1;
        likesRefNotFav.innerHTML = books[likeIndex].likes;
        if (likesRefFav != null){
            likesRefFav.innerHTML = books[likeIndex].likes;
        }
    } else {
        books[likeIndex].likes -= 1;
        likesRefNotFav.innerHTML = books[likeIndex].likes;
        if (likesRefFav != null){
            likesRefFav.innerHTML = books[likeIndex].likes;
        }
    }
}

function toggleHeart(heartIndex, heartPrefix){
    const heartRefNotFav = document.getElementById(`heart-container-notfav-${heartIndex}`);
    const heartRefFav = document.getElementById(`heart-container-fav-${heartIndex}`);

    heartRefNotFav.innerHTML = renderHeartIcon(heartIndex, heartPrefix);
    if (heartRefFav != null){
        heartRefFav.innerHTML = renderHeartIcon(heartIndex, heartPrefix);
    }
}