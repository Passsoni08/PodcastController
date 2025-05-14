# Podcast Manager

### Description

A Netflix-style app, where it's possible to centralize different podcast episodes separated by category

### Domain

Podcasts made with videos.

### Features

- List podcast episodes in category sections:
  - [health, fitness, mindsel, humor]
- Filter episodes by podcast name

## How

### Features

    List podcast episodes in each category sections

## How to implement

GET: return episodes list

response:

```js
[
    {
        podcastName: "Flow",
        episodio: "CBUM - Flow #319",
        videoId:"pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["health", "fitness"]
    },

    {
        podcastName: "Flow",
        episodio: "JULIO BALESTRIN + BITELO - Flow #401",
        videoId: "FuEYZNneS9Q",
        cover: "https://i.ytimg.com/vi/FuEYZNneS9Q/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=FuEYZNneS9Q",
        categories: ["health", "fitness"]
    },
     {
        podcastName: "Flow",
        episodio: "Renato Cariani",
        videoId: "xxxxxx",
        cover: "https://i.ytimg.com/vi/FuEYZNneS9Q/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=FuEYZNneS9Q",
        categories: ["health", "fitness"]
    },
]

```

GET: return episodes list based on a parameter send by the podcast's name of the client
