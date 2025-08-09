<<<<<<< HEAD
# React-tasks
🚀 React Tasks Project This repository contains multiple React tasks, each deployed separately using GitHub Pages. Each task is organized into its own branch for easy management and deployment. 📌 Features: ✅ Multiple React tasks in separate branches ✅ GitHub Pages deployment for each task ✅ Organized project structure for easy navigation
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 222b882 (Initial commit)





props:
------
in react, props stands for properties which are used to pass from one component(parent) to other component(child) for reusing the component.

we can access props in two ways:

1.directly using props keyword as a parameter
2.children props.-- this can be pass as a nested elements b/w the open tagged comp and closing tagged component.



state:
------
in react, state is an oject which stores the dynamic variables.
they can be userinputs/api response/calculations.
whenver a data changes in a state, then state can be update and then component can be re-render.




---

## 🔎 Overview (what your code does)

* `MovieList` fetches a list of products (you’re treating them like movies) from `https://fakestoreapi.com/products` and renders a list of links (`/movies/:id`) — each link is the product title.
* Clicking a link navigates to `MovieDetails`.
* `MovieDetails` reads the `id` from the URL, finds the matching item in the previously fetched array, and renders a `ProfileCard` with the image and title.
* While the data is loading, a `Spinner` is shown.

---

## 📚 Step-by-step explanation — `MovieList`

```jsx
const [movies, setMovies] = useState([]);
useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then((res) =>
     setMovies(res.data))
}, []);
```

1. `useState([])` initializes `movies` as an empty array.
2. `useEffect(..., [])` runs once on mount. It fetches the products.
3. `axios.get(...).then(res => setMovies(res.data))` saves the fetched array in `movies`.

```jsx
return (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
    {movies.length > 0 ? (
      movies.map((a, b) => (
        <ul key={a.id}>
          <li>
            <Link to={`/movies/${a.id}`}>{a.title}</Link>
          </li>
        </ul>
      ))
    ) : (<Spinner />)}
  </div>
);
```

4. If `movies` is nonempty, it maps each item to a `Link` with `to={`/movies/\${a.id}`}`. Otherwise it shows a `<Spinner/>`.
5. `Link` creates client-side navigation to `/movies/<id>`.

**Notes / improvements**

* You put one `<ul>` per item; normally you want a single `<ul>` wrapping multiple `<li>`s.
* `key` is on `<ul>` but is better placed on the element generated by `.map()` (e.g., `<li key={a.id}>`).
* `Link` target `/movies/${a.id}` is correct (do not put `:` in the URL).

---

## 📚 Step-by-step explanation — `MovieDetails`

```jsx
const [movies,setMovies]=useState([])
useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then((res) =>
     setMovies(res.data))
}, []);
```

1. `MovieDetails` also fetches the entire product list (same endpoint). It stores it in local `movies` state.

```jsx
const { id } = useParams();
const movie = movies.find((a,b) => String(a.id) === id);
if (!movie) { return (<Spinner/>); }
```

2. `useParams()` extracts the `id` string from the route (e.g. `"3"`).
3. `.find(...)` locates the item whose `id` (converted to string) matches the URL id.
4. If `movie` is `undefined` (because data not yet loaded or no match), you return a `Spinner`.

```jsx
return (
  <div style={{display:"flex",justifyContent:"center"}}>
    <ProfileCard img={movie.image} title={movie.movie}/>
  </div>
);
```

5. You render `ProfileCard` passing `img` and `title`. **But** note: your API object uses `title` (not `movie`) for name — so `movie.movie` will be `undefined`. Use `movie.title`.

---

## ⚠️ Problems & edge cases found

1. **Field mismatch** — fakestore returns objects with `title` and `image`. In `MovieDetails` you use `movie.movie` instead of `movie.title`. That causes empty title.
2. **Race condition / UX** — both components fetch the same list independently. If `MovieDetails` mounts and data is not yet fetched, it shows spinner; after fetch it shows movie. That's okay but better UX uses a `loading` flag and shows a friendly "not found" if the fetch finished but no movie matches the id.
3. **IDs type mismatch** — sometimes items had number ids, sometimes strings. You already used `String(a.id) === id` which is correct.
4. **Markup** — using multiple `<ul>` elements is not ideal. Use one `<ul>` with many `<li>`.
5. **Unused imports** — you imported `useParams` in MovieList but didn't use it (in your earlier code you had display import unused). Clean unused imports.

---

## ✅ Better, robust versions (copy/paste ready)

### `MovieList.jsx` — improved

```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        if (!canceled) setMovies(res.data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => { if (!canceled) setLoading(false); });

    return () => { canceled = true; };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Movies / Products</h2>
      <ul style={{ listStyle: "none", padding: 0, width: "100%", maxWidth: 800 }}>
        {movies.map((m) => (
          <li key={m.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### `MovieDetails.jsx` — improved

```jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../profile/profileCard";
import { Spinner, Button } from "react-bootstrap";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let canceled = false;
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        if (canceled) return;
        const found = res.data.find(item => String(item.id) === id);
        if (found) {
          setMovie(found);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .catch(err => {
        console.error(err);
        setNotFound(true);
      })
      .finally(() => { if (!canceled) setLoading(false); });

    return () => { canceled = true; };
  }, [id]);

  if (loading) return <Spinner />;

  if (notFound) return <h2>Movie not found</h2>;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <div>
        <ProfileCard img={movie.image} title={movie.title} desc={movie.description} />
        <div style={{ marginTop: 12 }}>
          <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </div>
  );
}
```

---

## 🗺 Example route setup (`App.jsx`)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./movies/MovieList";
import MovieDetails from "./movies/MovieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
```

---

## ✅ Summary / Cheat-sheet (for notes)

* Use `<Link to={`/movies/\${id}`}>` to navigate to a dynamic route.
* Define route with placeholder `/movies/:id` (in `Route` path).
* `useParams()` returns route params as strings.
* Use `String(item.id) === id` to compare safely.
* Add `loading` and `notFound` states for good UX.
* Prefer one `<ul>` with multiple `<li>`s rather than many `<ul>`s.
* Use `navigate(-1)` to go back in history, or `navigate('/home')` for fixed home.

---


