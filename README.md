# Next.js test project

this project was build while following this [youtube tutorial ](https://www.youtube.com/watch?v=IkOVe40Sy0U&t=370s)

## Documentation

[https://nextjs.org/learn/basics/create-nextjs-app](https://nextjs.org/learn/basics/create-nextjs-app)

[https://nextjs.org/docs](https://nextjs.org/docs)

## github from tut

[https://github.com/bradtraversy/bitzprice](https://github.com/bradtraversy/bitzprice)

## Manual install

1: start npm project

```bash
npm init -y
```

2: Install packages

```bash
npm install next react react-dom
```

3: Add scripts

```bash
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

4: create a pages folder

```bash
mkdir pages
```

5: make index.js

```bash
touch pages/index.js
```

6: add content to index.js

```jsx
export default () => <div>Hello next.js</div>;
```

7: run next dev server

```bash
npm run dev
```

example of jsx styling

```bash
 <style jsx>
        {`
          ul {
            background: #333;
            color: #fff;
            list-style: none;
            display: flex;
          }

          ul li {
            font-size: 18px;
            margin-right: 20px;
          }

          ul li a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
```

bitcoin endpoint

```bash
https://api.coindesk.com/v1/bpi/currentprice.json
```

install isomorphic-unfetch

```bash
npm install isomorphic-unfetch
```
