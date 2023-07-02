import {
  FlowerDemo,
  FlowerSizeDemo,
  FlowerSizeImageDemo,
} from '../types/flowers';

export const initialStateFlower: FlowerDemo = {
  bouquetDetails: {
    bloom: [''],
    color: [''],
    name: '',
    isBouquet: true,
  },
  description: '',
  promoImg: '',
  isAvailable: {
    isSoldOut: false,
    isLimited: false,
    isFull: true,
  },
  sale: {
    isSale: false,
    discount: 0,
  },
  delivery: {
    method: '',
    date: 1,
  },
  occasion: [''],
  sizes: [
    {
      name: '',
      quantity: 0,
      price: 0,
      height: 0,
      width: 0,
      images: [
        {
          hero: '',
          thumbnail: '',
        },
      ],
    },
  ],
};

export const deliveryMethodChoices = [
  'florist-to-door',
  'farm-to-door',
  'shipped in a box',
];

export const sizesNameChoices = ['standard', 'premium', 'deluxe', 'exquisite'];

export const availabilityChoices = [
  { id: 1, name: 'avail', value: 'isSoldOut', text: 'sold out' },
  { id: 2, name: 'avail', value: 'isLimited', text: 'limited' },
  { id: 3, name: 'avail', value: 'isFull', text: 'full' },
];

export const sizesImagesInitialState: FlowerSizeImageDemo = {
  hero: '',
  thumbnail: '',
};

export const sizesInitialState: FlowerSizeDemo = {
  name: '',
  quantity: 1,
  price: 0,
  height: 0,
  width: 0,
  images: [sizesImagesInitialState],
};

export const flowers: FlowerDemo[] = [
  {
    bouquetDetails: {
      bloom: ['rose'],
      color: ['red'],
      name: 'long stem red rose',
      isBouquet: true,
    },
    description:
      'You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say "I love you" directly from a local florist to their home or office.',
    promoImg:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59D_LOL_preset_ftd-mx-tile-wide-sv-new.jpeg?v=1681273335&width=768',
    isAvailable: {
      isSoldOut: false,
      isLimited: false,
      isFull: true,
    },
    sale: {
      isSale: false,
      discount: 0,
    },
    delivery: {
      method: 'farm-to-door',
      date: 2,
    },
    occasion: ['birthday', 'congratulations', 'get well'],
    sizes: [
      {
        name: 'standard',
        quantity: 12,
        price: 75,
        height: 24,
        width: 16,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59S_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1648246668',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59S_LOL_preset_ftd-carousel-thumb.jpeg?v=1648246668',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59S_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1647483400',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59S_TOP_preset_ftd-carousel-thumb.jpeg?v=1647483400',
          },
        ],
      },
      {
        name: 'deluxe',
        quantity: 18,
        price: 105,
        height: 24,
        width: 18,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59D_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1681273335',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59D_LOL_preset_ftd-carousel-thumb.jpeg?v=1681273335',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59D_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1655221808',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59D_TOP_preset_ftd-carousel-thumb.jpeg?v=1655221808',
          },
        ],
      },
      {
        name: 'premium',
        quantity: 24,
        price: 135,
        height: 24,
        width: 18,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59P_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1681273699',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59P_LOL_preset_ftd-carousel-thumb.jpeg?v=1681273699',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59P_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1655222084',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59P_TOP_preset_ftd-carousel-thumb.jpeg?v=1655222084',
          },
        ],
      },
      {
        name: 'exquisite',
        quantity: 36,
        price: 200,
        height: 25,
        width: 21,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59E_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1681297929',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59E_LOL_preset_ftd-carousel-thumb.jpeg?v=1681297929',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59E_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1647449848',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/B59E_TOP_preset_ftd-carousel-thumb.jpeg?v=1647449848',
          },
        ],
      },
    ],
  },
  {
    bouquetDetails: {
      bloom: ['hydrangea', 'rose'],
      color: ['blue', 'white'],
      name: 'sky blue delight',
      isBouquet: true,
    },
    description:
      "These ivory roses and sky–blue blooms will brighten anyone's day.",
    promoImg:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_LOL_preset_ftd-mx-tile-wide-sv-new.jpeg?v=1673562174&width=768',
    isAvailable: {
      isSoldOut: true,
      isLimited: false,
      isFull: false,
    },
    sale: {
      isSale: true,
      discount: 0.1,
    },
    delivery: {
      method: 'florist-to-door',
      date: 3,
    },
    occasion: ['birthday', 'wedding'],
    sizes: [
      {
        name: 'standard',
        quantity: 1,
        price: 52,
        height: 9,
        width: 9,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1673562174',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_LOL_preset_ftd-carousel-thumb.jpeg?v=1673562174',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1673571470',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_TOP_preset_ftd-carousel-thumb.jpeg?v=1673571470',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_SCALE_preset_ftd-mx-hero-lv-new.jpeg?v=1673573963',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_SCALE_preset_ftd-carousel-thumb.jpeg?v=1673573963',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_ALT_V1_preset_ftd-mx-hero-lv-alt.jpeg?v=1683629830',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FLLS_ALT_V1_preset_ftd-carousel-thumb.jpeg?v=1683629830',
          },
        ],
      },
    ],
  },
  {
    bouquetDetails: {
      bloom: ['carnation', 'lily', 'rose'],
      color: ['orange', 'green', 'red', 'lavender', 'pink'],
      name: 'light of my life',
      isBouquet: true,
    },
    description:
      'The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes.',
    promoImg:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_LOL_preset_ftd-mx-tile-wide-sv-new.jpeg?v=1686765196&width=768',
    isAvailable: {
      isSoldOut: false,
      isLimited: false,
      isFull: true,
    },
    sale: {
      isSale: false,
      discount: 0,
    },
    delivery: {
      method: 'florist-to-door',
      date: 0,
    },
    occasion: ['get well', 'birthday'],
    sizes: [
      {
        name: 'standard',
        quantity: 1,
        price: 50,
        height: 15,
        width: 13,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1686766337',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_LOL_preset_ftd-carousel-thumb.jpeg?v=1686766337',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_ALT_V4_preset_ftd-mx-hero-lv-alt.jpeg?v=1614205593',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_ALT_V4_preset_ftd-carousel-thumb.jpeg?v=1614205593',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_ALT_V3_preset_ftd-mx-hero-lv-alt.jpeg?v=1607986953',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375S_ALT_V3_preset_ftd-carousel-thumb.jpeg?v=1607986953',
          },
        ],
      },
      {
        name: 'deluxe',
        quantity: 1,
        price: 65,
        height: 18,
        width: 16,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1686765196',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_LOL_preset_ftd-carousel-thumb.jpeg?v=1686765196',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_ALT_V4_preset_ftd-mx-hero-lv-alt.jpeg?v=1612275067',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_ALT_V4_preset_ftd-carousel-thumb.jpeg?v=1612275067',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_ALT_V3_preset_ftd-mx-hero-lv-alt.jpeg?v=1607986954',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375D_ALT_V3_preset_ftd-carousel-thumb.jpeg?v=1607986954',
          },
        ],
      },
      {
        name: 'premium',
        quantity: 1,
        price: 80,
        height: 19,
        width: 17,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1686765892',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_LOL_preset_ftd-carousel-thumb.jpeg?v=1686765892',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_ALT_V4_preset_ftd-mx-hero-lv-alt.jpeg?v=1614205550',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_ALT_V4_preset_ftd-carousel-thumb.jpeg?v=1614205550',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_ALT_V3_preset_ftd-mx-hero-lv-alt.jpeg?v=1607986954',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375P_ALT_V3_preset_ftd-carousel-thumb.jpeg?v=1607986954',
          },
        ],
      },
      {
        name: 'exquisite',
        quantity: 1,
        price: 105,
        height: 22,
        width: 20,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1686765746',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_LOL_preset_ftd-carousel-thumb.jpeg?v=1686765746',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1686765791',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_TOP_preset_ftd-carousel-thumb.jpeg?v=1686765791',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375_SCALE_preset_ftd-mx-hero-lv-new.jpeg?v=1686761754',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375_SCALE_preset_ftd-carousel-thumb.jpeg?v=1686761754',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_ALT_V1_preset_ftd-mx-hero-lv-alt.jpeg?v=1669662795',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5375E_ALT_V1_preset_ftd-carousel-thumb.jpeg?v=1669662795',
          },
        ],
      },
    ],
  },
  {
    bouquetDetails: {
      bloom: ['azalea'],
      color: ['pink'],
      name: 'pink petals rosalea',
      isBouquet: false,
    },
    description:
      "This Rosalea plant is sure to leave a lasting impression. With petals that resemble blooming roses, this lush plant may arrive as buds , but they'll unfurl beautifully in a short time.",
    promoImg:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/P2173_LOL_preset_ftd-mx-tile-wide-sv-new.jpeg?v=1608662876&width=768',
    isAvailable: {
      isSoldOut: false,
      isLimited: false,
      isFull: true,
    },
    sale: {
      isSale: false,
      discount: 0,
    },
    delivery: {
      method: 'shipped in a box',
      date: 4,
    },
    occasion: ['get well'],
    sizes: [
      {
        name: 'standard',
        quantity: 1,
        price: 35,
        height: 10,
        width: 5,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/P2173_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1608662876',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/P2173_LOL_preset_ftd-carousel-thumb.jpeg?v=1608662876',
          },
        ],
      },
    ],
  },
  {
    bouquetDetails: {
      bloom: ['rose'],
      color: ['yellow', 'orange', 'purple'],
      name: 'marmalade skies',
      isBouquet: true,
    },
    description:
      'Flowers of yellow and green, and pops of orange and purple. Full of color and texture, all you need is love and our Marmalade Skies Bouquet.',
    promoImg:
      'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_LOL_preset_ftd-mx-tile-wide-sv-new.jpeg?v=1647416080&width=768',
    isAvailable: {
      isSoldOut: false,
      isLimited: true,
      isFull: false,
    },
    sale: {
      isSale: false,
      discount: 0,
    },
    delivery: {
      method: 'florist-to-door',
      date: 2,
    },
    occasion: ['funeral', 'get well', 'birthday'],
    sizes: [
      {
        name: 'standard',
        quantity: 1,
        price: 50,
        height: 16,
        width: 14,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1647436166',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_LOL_preset_ftd-carousel-thumb.jpeg?v=1647436166',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1633083065',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_TOP_preset_ftd-carousel-thumb.jpeg?v=1633083065',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_ALT_V2_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384941',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_ALT_V2_preset_ftd-carousel-thumb.jpeg?v=1612384941',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_ALT_V1_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384948',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374S_ALT_V1_preset_ftd-carousel-thumb.jpeg?v=1612384948',
          },
        ],
      },
      {
        name: 'deluxe',
        quantity: 1,
        price: 65,
        height: 17,
        width: 16,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1647416080',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_LOL_preset_ftd-carousel-thumb.jpeg?v=1647416080',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1633085765',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_TOP_preset_ftd-carousel-thumb.jpeg?v=1633085765',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_ALT_V2_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384838',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_ALT_V2_preset_ftd-carousel-thumb.jpeg?v=1612384838',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_ALT_V1_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384836',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374D_ALT_V1_preset_ftd-carousel-thumb.jpeg?v=1612384836',
          },
        ],
      },
      {
        name: 'premium',
        quantity: 1,
        price: 75,
        height: 17,
        width: 17,
        images: [
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_LOL_preset_ftd-mx-hero-lv-new.jpeg?v=1647441507',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_LOL_preset_ftd-carousel-thumb.jpeg?v=1647441507',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_TOP_preset_ftd-mx-hero-lv-new.jpeg?v=1633094117',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_TOP_preset_ftd-carousel-thumb.jpeg?v=1633094117',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_ALT_V2_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384919',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_ALT_V2_preset_ftd-carousel-thumb.jpeg?v=1612384919',
          },
          {
            hero: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_ALT_V1_preset_ftd-mx-hero-lv-alt.jpeg?v=1612384977',
            thumbnail:
              'https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C5374P_ALT_V1_preset_ftd-carousel-thumb.jpeg?v=1612384977',
          },
        ],
      },
    ],
  },
];
