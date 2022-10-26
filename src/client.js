import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'vllo22bz',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skVZH46CvzGQGftPBaYSOc0TKc9FkfJWOp7TsIcjemvrWicxRiDtvV6kxGUx4jZMifPARbbU6ObTpJApEnnc3bHx3w58pTIGEOJy1izOdJJ9hKXaYy0zptWAbWYJPOZDTGXmpgirEg0CofdBxEnKBjaOR8Jb48FrxOmr87cL85wfKJXicBvD',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
