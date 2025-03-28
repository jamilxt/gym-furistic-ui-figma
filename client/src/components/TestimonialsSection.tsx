import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  author: string;
  role: string;
  rating: number;
  avatarColor: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#FF6B6B" // Red
    },
    {
      id: 2,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#FFBC42" // Yellow
    },
    {
      id: 3,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#4ECDC4" // Teal
    },
    {
      id: 4,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#FF78A9" // Pink
    },
    {
      id: 5,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#41B3FF" // Blue
    },
    {
      id: 6,
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      role: "Ceo Of Miko",
      rating: 4.5,
      avatarColor: "#FF9E4F" // Orange
    }
  ];

  // Function to render stars based on rating
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fillOpacity=".5" />
          <path d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-xs text-gray-400">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100 relative">
      <div className="absolute top-0 right-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          <path fill="#FE552B" d="M42.8,-45.3C54.9,-34.3,63.8,-17.1,64.1,0.3C64.5,17.8,56.4,35.5,44.1,51.2C31.9,66.9,15.9,80.4,-2.4,82.8C-20.7,85.2,-41.5,76.4,-55.8,60.7C-70.1,45,-77.9,22.5,-76.8,1.1C-75.6,-20.3,-65.4,-40.6,-50.4,-51.6C-35.4,-62.7,-17.7,-64.5,-0.1,-64.4C17.6,-64.3,30.7,-56.3,42.8,-45.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          <path fill="#FE552B" d="M33.3,-56.1C41.9,-48.1,47.1,-35.8,54.5,-23.4C61.9,-11,71.5,1.5,70.8,13C70.1,24.4,59.1,34.8,47.8,44.9C36.5,55,24.8,65,10.7,68.8C-3.4,72.6,-20,70.3,-31.1,62.1C-42.2,53.8,-47.8,39.5,-51.7,26.4C-55.6,13.2,-57.9,1.1,-56.7,-10.6C-55.6,-22.3,-50.9,-33.7,-42.4,-41.9C-33.9,-50.2,-22.5,-55.3,-10.1,-57.8C2.3,-60.3,24.7,-64.1,33.3,-56.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-tilt text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What Our Clients Are Saying
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Real Stories, Real Results — Hear From Our Athletes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-black rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-tilt text-white mb-3">{testimonial.title}</h3>
                <p className="text-white text-opacity-80 text-sm mb-4">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-white text-opacity-60 text-xs">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    {renderRatingStars(testimonial.rating)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}