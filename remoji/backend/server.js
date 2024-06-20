import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const routes = express();
routes.use(bodyParser.json());
routes.use(cors());

const MAX_LIMIT = 100;
const emojis = [
    { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa97.png?v8', name: 'accordeon' },
    { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f948.png?v8', name: 'accept' },
    { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png?v8', name: 'art' }
];

const bookmarks = ['accept'];

async function fetchGithubEmojis() {
    try {
        const res = await fetch('https://api.github.com/emojis');
        emojis = await res.json();
    } catch (e) {
        emojis = [];
        console.error('Github API failed...', e);
    }
}

routes.get('/', (req, res) => {
    res.send('Remoji api available !');
});

routes.get('/emojis', (req, res) => {
    const limit = req.query.limit;
    if (!limit || limit > MAX_LIMIT) limit = MAX_LIMIT;
    res.send(emojis.slice(0, limit));
});

routes.get('/bookmarks', (req, res) => {
    res.send(bookmarks);
});

routes.get('/emojis/search', (req, res) => {
    const query = req.query?.q;
    if (!query) res.send(emojis.slice(0, MAX_LIMIT));
    else res.send(emojis.filter((e) => e.name.includes(query)).slice(0, MAX_LIMIT));
});

routes.post('/bookmarks/add', (req, res) => {
    const bookmark = req.body?.name;
    if (!bookmark) {
        res.send({ message: 'Error, bookmark name is null !' + bookmark });
        return;
    }
    if (bookmarks.includes(bookmark)) res.send({ message: 'Error, already bookmarked !' });
    else {
        bookmarks.push(bookmark);
        res.send(bookmarks);
        res.status(201);
    }
});

routes.post('/bookmarks/remove', (req, res) => {
    const bookmark = req.body?.name;
    if (!bookmark) {
        res.send({ message: 'Error, bookmark name is null !' });
        return;
    }
    if (!bookmarks.includes(bookmark)) res.send({ message: 'Error, it has not been bookmarked !' });
    else {
        bookmarks = bookmarks.sort((b) => b != bookmark);
        res.status(204);
        res.send(bookmarks);
    }
});

routes.listen(8080, () => {
    console.log('Remoji backend started !');
});
