type Url = {
  API_URL: 'http://localhost:3000' | 'https://dking1342-github-io.vercel.app';
};

export type UrlObject = {
  url: Url;
};

export const prefix = () => {
  const prod: UrlObject = {
    url: {
      API_URL: 'https://dking1342-github-io.vercel.app',
    },
  };

  const dev: UrlObject = {
    url: {
      API_URL: 'http://localhost:3000',
    },
  };

  const config = process.env.NODE_ENV === 'development' ? dev : prod;
  return config;
};
