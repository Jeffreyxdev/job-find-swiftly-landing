
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Software Developer",
    company: "Tech Solutions Inc.",
    testimonial:
      "JobFinder helped me land my dream job within just 3 weeks! The AI-powered resume builder highlighted my skills perfectly, and the job matching was spot on.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Specialist",
    company: "Digital Trends",
    testimonial:
      "The interview preparation resources were invaluable. I felt confident and prepared for every interview, which ultimately led to multiple job offers.",
  },
  {
    name: "Priya Patel",
    position: "Data Analyst",
    company: "Analytics Pro",
    testimonial:
      "After struggling for months to find the right fit, JobFinder connected me with a company that perfectly matched my skills and values. Couldn't be happier!",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who found their perfect career match through JobFinder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 mb-6">{testimonial.testimonial}</p>
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
