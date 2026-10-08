const vendors = [
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'far-1',
        name: 'Nasi Lemak Ayam',
        description: 'Coconut rice, crispy fried chicken, sambal, boiled egg and peanuts',
        price: 7.5,
        category: 'Rice',
        available: true,
      },
      {
        id: 'far-2',
        name: 'Mee Goreng Mamak',
        description: 'Yellow noodles stir-fried with tofu, vegetables, and spicy sauce',
        price: 6.0,
        category: 'Noodles',
        available: true,
      },
      {
        id: 'far-3',
        name: 'Teh Tarik Kaw',
        description: 'Traditional Malaysian pulled milk tea with froth',
        price: 2.5,
        category: 'Drinks',
        available: false,
      },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'ami-1',
        name: 'Nasi Ayam Penyet',
        description: 'Smashed fried chicken with sambal and rice',
        price: 9.0,
        category: 'Rice',
        available: true,
      },
      {
        id: 'ami-2',
        name: 'Air Bandung',
        description: 'Rose syrup with evaporated milk',
        price: 3.0,
        category: 'Drinks',
        available: true,
      },
    ],
  },
]

export default vendors
