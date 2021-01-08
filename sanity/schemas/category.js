import React from 'react';
import { FaHashtag as icon } from 'react-icons/fa';
import { GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi';

export default {
  name: 'category',
  title: 'Категории',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      description: '(Название категории)',
    },
    {
      name: 'europe',
      title: 'Europe',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'usa',
      title: 'United States',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'title',
      europe: 'europe',
    },
    prepare: ({ name, europe }) => ({
      title: `${name}`,
      media: (
        <span
          style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
        >
          {europe ? <GiEuropeanFlag /> : <GiUsaFlag />}
        </span>
      ),
    }),
  },
};
