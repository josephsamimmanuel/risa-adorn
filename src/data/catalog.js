export const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const WA_NUMBER = '918778161826'
export const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const productEnquiryText = (item) =>
  `Hi Risa Adorn, I would like to enquire about ${item.title} priced at ${item.price}.`

export const enrollText = (item) =>
  `Hi Risa Adorn, I would like to enroll in ${item.title} (${item.price}).`

export const cartEnquiryText = (items) => {
  if (!items.length) {
    return 'Hi Risa Adorn, I would like to place an order. Please share the latest catalogue and prices.'
  }
  const lines = items.map((item) =>
    item.qty > 1
      ? `• ${item.title} x${item.qty} — ${item.price}`
      : `• ${item.title} — ${item.price}`
  )
  return `Hi Risa Adorn, I would like to place an order.\n\n${lines.join('\n')}`
}

export const PRODUCTS = [
  {
    category: 'bangles',
    bg: 'bg-pink',
    img: asset('flavor4.webp'),
    alt: 'Bridal maroon and gold silk-thread bangles',
    brand: 'Bridal Pre-Booking',
    title: 'Bridal Silk Thread Set',
    price: '₹1,499',
  },
  {
    category: 'bangles',
    bg: 'bg-rose',
    img: asset('product5.webp'),
    alt: 'Pink floral silk-thread bangles',
    brand: 'Everyday Festive',
    title: 'Pink Floral Kundan Stack',
    price: '₹899',
  },
  {
    category: 'bangles',
    bg: 'bg-peach',
    img: asset('product6.webp'),
    alt: 'Gold silk-thread bangles with pearls',
    brand: 'Champagne Silk',
    title: 'Gold Pearl Silk Bangles',
    price: '₹999',
  },
  {
    category: 'bangles',
    bg: 'bg-cream',
    img: asset('flavor1.webp'),
    alt: 'Colourful silk-thread bangle set',
    brand: 'Temple Colours',
    title: 'Traditional Multicolor Set',
    price: '₹799',
  },
  {
    category: 'accessories',
    bg: 'bg-pink',
    img: asset('flavor2.webp'),
    alt: 'Gold invisible-chain necklace with heart pendants',
    brand: 'Fine jewellery',
    title: 'Invisible Chain Necklace',
    price: '₹299',
  },
  {
    category: 'accessories',
    bg: 'bg-rose',
    img: asset('feature3.webp'),
    alt: 'Handmade floral hair clips on marble',
    brand: 'Handmade roses',
    title: 'Floral Hair Clip Set',
    price: '₹249',
  },
  {
    category: 'accessories',
    bg: 'bg-peach',
    img: asset('flavor3.webp'),
    alt: 'Kundan butterfly and bow hair accessories',
    brand: 'Party & bridal hair',
    title: 'Kundan Butterfly Barrette',
    price: '₹349',
  },
  {
    category: 'accessories',
    bg: 'bg-cream',
    img: asset('product5.webp'),
    alt: 'Pink floral silk-thread inspired custom accessory',
    brand: 'Made to match',
    title: 'Custom Hair Accessory',
    price: '₹199',
  },
]

export const COURSES = [
  {
    category: 'courses',
    bg: 'bg-pink',
    img: asset('course-bangles.webp'),
    alt: 'Hands wrapping colourful silk thread onto a bangle',
    brand: 'Registration fees only',
    title: 'Professional Bangle Making',
    price: '₹799',
    audience: 'Only for women — school students to housewives. No age limit, no qualification required.',
    blurb:
      'Pre-recorded videos, practice sessions, and a WhatsApp doubt-clearance group. Record your work, learn in your free time, and get a video collab for your first order.',
    inclusions: [
      'Lifetime access',
      'WhatsApp doubt clearance',
      'Practice + record your work',
      'Learn at your own pace',
      'Video collab for first order',
      'Govt. certificate (extra)',
    ],
  },
  {
    category: 'courses',
    bg: 'bg-rose',
    img: asset('course-chain.webp'),
    alt: 'Fine gold invisible-chain necklace being assembled',
    brand: 'Master course',
    title: 'Invisible Chain Master',
    price: '₹299',
    audience: 'Beginner-friendly fine jewellery — learn from home at your own pace.',
    blurb:
      'Pre-recorded lessons for invisible-chain necklaces with crystal and heart pendants. Practice, record your work, and join the WhatsApp group for doubts.',
    inclusions: [
      'Lifetime access',
      'WhatsApp group support',
      'Practice + record your work',
      'Free-time learning',
      'Useful for wear & gifting',
      'Govt. certificate (extra)',
    ],
  },
  {
    category: 'courses',
    bg: 'bg-peach',
    img: asset('course-hair.webp'),
    alt: 'Handmade floral hair clips, bows, and kundan barrettes',
    brand: 'Bows, clips & florals',
    title: 'Hair Accessories Course',
    price: '₹149',
    audience: 'Start a home skill with bows, floral clips, and kundan barrettes.',
    blurb:
      'The same from-home model as our jewellery courses — recorded lessons, practice, and WhatsApp support. Skill today, success tomorrow.',
    inclusions: [
      'Lifetime access',
      'WhatsApp doubt clearance',
      'Bows, clips & florals',
      'Learn at your own pace',
      'Personal wear & gifting',
      'Govt. certificate (extra)',
    ],
  },
  {
    category: 'courses',
    bg: 'bg-cream',
    img: asset('course-demo.webp'),
    alt: 'Instructor demonstrating silk-thread bangle making to a small group',
    brand: '1-hour beginner intro',
    title: 'Live Demo Class',
    price: '₹29',
    audience: 'Try a live 1-hour intro before joining a full course.',
    blurb:
      'A beginner-friendly live session to see the craft, ask questions, and decide if the academy is right for you. Dates are confirmed on WhatsApp.',
    inclusions: [
      '1-hour live intro',
      'Beginner friendly',
      'See the making process',
      'Ask questions live',
      'No qualification needed',
      'Then enrol in a full course',
    ],
  },
]

export const PAGE_TITLES = {
  '/': 'Risa Adorn — Silk Thread Bangles & Courses in Tenkasi',
  '/products': 'Shop Silk-Thread Bangles — Risa Adorn',
  '/courses': 'From-Home Courses — Risa Adorn',
}
