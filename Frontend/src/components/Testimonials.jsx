import { Star } from "lucide-react";
import Line from "./Line";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      initial: "P",
      name: "Priya Sharma",
      role: "Computer Science Student",
      testimonial:
        "The AI career guidance helped me discover UX design as a perfect fit for my skills. I landed an internship at a startup within weeks of optimizing my resume!",
      rating: 5,
    },
    {
      initial: "R",
      name: "Rahul Patel",
      role: "Business Graduate",
      testimonial:
        "StudentX's resume builder helped me stand out in a competitive job market. The AI suggestions improved my resume dramatically, and I got 3 interview calls in my first week!",
      rating: 5,
    },
    {
      initial: "A",
      name: "Aisha Khan",
      role: "Engineering Student",
      testimonial:
        "Finding accommodation was always a struggle until I used StudentX. The roommate compatibility feature helped me find not just a place to stay, but friends who share my interests!",
      rating: 5,
    },
  ];

  return (
    <div>
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-white font-bold mb-4">
              What <span className="text-yellow-500">Students</span> Say
            </h2>
            <p className="text-lg mt-2 text-gray-300">
              Hear from students who've transformed their career journey with
              StudentX
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex justify-between items-center flex-col bg-white/10 border-2 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-lg hover:shadow-yellow-500 transition-shadow duration-300 w-80"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-500">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 font-serif mb-4">
                  {testimonial.testimonial}
                </p>

                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Line />
      </div>
    </div>
  );
}
