// Sample product images from Unsplash
export const productImages = [
  'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581122584612-713f89daa8eb?w=500&auto=format&fit=crop',
];

// Sample gym interior images
export const gymInteriorImages = [
  'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop',
];

// Sample workout action images
export const workoutImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&auto=format&fit=crop',
];

export const generateProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Dumbbells Set",
      description: "Professional grade steel dumbbells with ergonomic grip",
      price: 199.99,
      image: productImages[0],
      category: "Weights",
      isNew: true
    },
    {
      id: 2,
      name: "Exercise Bike",
      description: "Interactive smart bike with digital resistance control",
      price: 649.99,
      image: productImages[1],
      category: "Cardio Equipment"
    },
    {
      id: 3,
      name: "Suspension Trainer",
      description: "Professional TRX system for full-body workouts",
      price: 119.99,
      image: productImages[2],
      category: "Training Gear",
      isSale: true
    },
    {
      id: 4,
      name: "Adjustable Bench",
      description: "Multi-position workout bench for versatile training",
      price: 249.99,
      image: productImages[3],
      category: "Weights"
    },
    {
      id: 5,
      name: "Foam Roller",
      description: "High-density foam roller for muscle recovery",
      price: 34.99,
      image: productImages[4],
      category: "Recovery"
    },
    {
      id: 6,
      name: "Kettlebell Set",
      description: "Cast iron kettlebells with vinyl coating for home workouts",
      price: 179.99,
      image: productImages[5],
      category: "Weights",
      isNew: true
    }
  ];
  
  return products;
};

export const generateLocations = () => {
  return [
    {
      id: 1,
      name: "Downtown Fitness Center",
      address: "123 Main Street, New York, NY 10001",
      rating: 4.8,
      reviewCount: 120,
      hours: "Open 24/7",
      amenities: ["Group Classes", "Personal Training", "Swimming Pool"],
      lat: 40.7128,
      lng: -74.0060
    },
    {
      id: 2,
      name: "Uptown Fitness Studio",
      address: "456 Park Avenue, New York, NY 10022",
      rating: 4.7,
      reviewCount: 98,
      hours: "5:00 AM - 11:00 PM",
      amenities: ["CrossFit", "Yoga Studio", "Sauna"],
      lat: 40.7614,
      lng: -73.9776
    },
    {
      id: 3,
      name: "Brooklyn Power Gym",
      address: "789 Bedford Ave, Brooklyn, NY 11205",
      rating: 4.9,
      reviewCount: 85,
      hours: "6:00 AM - 10:00 PM",
      amenities: ["Powerlifting", "Boxing Ring", "Massage"],
      lat: 40.6782,
      lng: -73.9442
    }
  ];
};

export const generatePrograms = () => {
  return [
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle and increase your strength",
      image: workoutImages[0]
    },
    {
      id: 2,
      title: "Cardio Fitness",
      description: "Improve your endurance and heart health",
      image: workoutImages[1]
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      description: "Enhance your mobility and mindfulness",
      image: workoutImages[2]
    }
  ];
};
