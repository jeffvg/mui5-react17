import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageCollage() {
  return (
    <ImageList
      sx={{ width: 620, height: 320, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/login.49d4ef07.png',
    title: 'Auth',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/illustration-dark-theme.9b797bbe.svg',
    title: 'Illustrations',
  },
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/internationalization.4debf12e.svg',
    title: 'Internationalization',
  },
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/website-design.afc0da52.jpg',
    title: 'Web',
    cols: 2,
  },
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/image-app-bar.a6af0323.png',
    title: 'Project-Identity',
    cols: 2,
  },
  {
    img: 'https://brightlayer-ui-dev.github.io/static/media/variation-button.7f80b67c.png',
    title: 'Buttons',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://blog.logrocket.com/wp-content/uploads/2021/08/react-native-svg-tutorial-examples.png',
    title: 'React',
  },
  {
    img: 'https://blog.logrocket.com/wp-content/uploads/2020/07/data-visualization-angular-d3.png',
    title: 'Angular',
  },
  {
    img: 'https://www.pngkit.com/png/detail/222-2224799_react-native-development-react-native-logo-png.png',
    title: 'RN',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://blog.anoff.io/assets/github-npm/title.png',
    title: 'Git-NPM',
    cols: 2,
  },
];