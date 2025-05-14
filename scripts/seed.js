const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = process.env.MONGODB_URI || "mongodb+srv://ala:ala123@cluster0.tojwjkt.mongodb.net/ecommerce";

async function seedDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();

    // Clear existing collections
    await db.collection('users').deleteMany({});
    await db.collection('products').deleteMany({});
    await db.collection('categories').deleteMany({});

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.collection('users').insertOne({
      name: 'Admin User',
      email: 'admin@elegance.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Seed categories
    const categories = [
      {
        name: 'Clothing',
        description: 'Fashion and apparel',
        image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg',
        slug: 'clothing'
      },
      {
        name: 'Accessories',
        description: 'Fashion accessories',
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
        slug: 'accessories'
      },
      {
        name: 'Home',
        description: 'Home decor and furnishings',
        image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
        slug: 'home'
      }
    ];

    await db.collection('categories').insertMany(categories);

    // Seed products
    const products = [
      {
        name: 'Modern Leather Jacket',
        description: 'Premium quality leather jacket with modern design',
        price: 199.99,
        category: 'Clothing',
        brand: 'Elegance',
        images: [
          'https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg',
          'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg'
        ],
        stock: 50,
        isNew: true,
        isSale: false,
        rating: 4.5,
        reviews: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elegant Watch',
        description: 'Sophisticated timepiece for any occasion',
        price: 149.99,
        category: 'Accessories',
        brand: 'Elegance',
        images: [
          'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg'
        ],
        stock: 30,
        isNew: false,
        isSale: true,
        originalPrice: 199.99,
        rating: 4.8,
        reviews: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await db.collection('products').insertMany(products);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();