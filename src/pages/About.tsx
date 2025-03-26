import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back to home */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center text-foreground/70 hover:text-foreground transition"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">About Gojan Academy</h1>

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Vision & Mission</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg mb-6">
              At Gojan Academy, we strive to create a nurturing environment where students can excel academically and personally.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-foreground/80">
                  To be a leading institution that empowers students with knowledge, skills, and values necessary for success in the global community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-foreground/80">
                  To provide quality education through innovative teaching methods, modern facilities, and a supportive learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
          <div className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-foreground/80">
                  Striving for the highest standards in education and personal development.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-foreground/80">
                  Embracing new ideas and technologies to enhance learning experiences.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-foreground/80">
                  Maintaining high ethical standards and professional conduct.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Facilities</h2>
          <div className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Facilities</h3>
                <ul className="space-y-3 list-disc list-inside text-foreground/80">
                  <li>Modern classrooms with smart boards</li>
                  <li>Well-equipped laboratories</li>
                  <li>Digital library with extensive resources</li>
                  <li>Computer labs with latest technology</li>
                  <li>Research centers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Student Amenities</h3>
                <ul className="space-y-3 list-disc list-inside text-foreground/80">
                  <li>Sports complex and fitness center</li>
                  <li>Student recreation areas</li>
                  <li>Cafeteria with healthy food options</li>
                  <li>Medical center</li>
                  <li>Career guidance center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-foreground/80">
                  123 Education Street<br />
                  Academic District<br />
                  City, State 12345
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: info@gojanacademy.edu</li>
                  <li>Working Hours: Monday - Friday, 8:00 AM - 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;