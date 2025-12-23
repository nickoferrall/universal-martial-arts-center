"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const programs = [
  {
    title: "Fitness",
    description:
      "Access our fully equipped gym with state-of-the-art weight lifting equipment, cardio machines, locker rooms, saunas, and showers. All memberships include a free one-hour fitness consultation.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/fitness-main-212393.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our state-of-the-art fitness facility offers everything you need to achieve your goals. With your membership, you'll have access to our facility any time during open hours.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Included Amenities:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Weight Room:</strong> Complete lifting equipment for strength training</li>
            <li><strong>Cardio Machines:</strong> Treadmills, ellipticals, stationary bikes, and more</li>
            <li><strong>Locker Rooms:</strong> Private facilities with saunas and showers</li>
            <li><strong>Free WiFi:</strong> Stay connected during your workout</li>
            <li><strong>Personal Training:</strong> Optional one-on-one coaching available</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Group Exercise",
    description:
      "Join our group exercise classes designed to keep you interested and motivated. From cycling to fitness classes, we have something for everyone looking to lose weight and have fun.",
    image: "https://res.cloudinary.com/display97/image/upload/7466/pick-up-56-213370.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our highly trained instructors guide you through varied workouts in a supportive group environment. Group classes are a great way to stay motivated and meet new people.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Class Options:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Cycle Studio:</strong> High-energy cycling workouts with trained instructors</li>
            <li><strong>Group Fitness:</strong> Various formats to keep you challenged</li>
            <li><strong>Personal Training:</strong> One-on-one attention for faster results</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Sports",
    description:
      "Get moving with our youth and adult sports leagues and drop-in games! We offer Basketball, Baseball, Football, Soccer, Lacrosse, and more. There's never a wrong time to get started!",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/sports-main-212395.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Proehlific Park offers comprehensive sports programming for athletes of all ages and skill levels. Join a league or come for drop-in games.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Sports We Offer:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Basketball:</strong> Youth and adult leagues plus open gym</li>
            <li><strong>Baseball:</strong> Training and league play</li>
            <li><strong>Football:</strong> Skills training and team sports</li>
            <li><strong>Soccer:</strong> Indoor and outdoor programs</li>
            <li><strong>Lacrosse:</strong> Growing program for all skill levels</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Youth Programs",
    description:
      "When school is out, come on in! We offer After School Care, Summer Camps, and child care on teacher workdays, holidays, and inclement weather closings. Kids love sports, games, and arts & crafts!",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/youth-main-212394.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our youth programs are designed to keep kids active, engaged, and having fun. Our dedicated staff creates a safe, nurturing environment for children of all ages.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Programs Include:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>After School Care:</strong> Safe, fun environment after school hours</li>
            <li><strong>Summer Blast Camp:</strong> Full summer programming with activities</li>
            <li><strong>Holiday Care:</strong> Coverage during school breaks and closings</li>
            <li><strong>Sports & Games:</strong> Dodgeball, arts and crafts, and more</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "PSP Training",
    description:
      "Our Proehlific Sports Performance program offers elite training for serious athletes looking to take their game to the next level with professional coaching and facilities.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7466/psp-main-212328.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          PSP (Proehlific Sports Performance) is our elite training program designed for athletes who want to maximize their potential. Work with experienced coaches in a professional setting.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Includes:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Strength & Conditioning:</strong> Build power and endurance</li>
            <li><strong>Speed & Agility:</strong> Improve quickness and reaction time</li>
            <li><strong>Sport-Specific Training:</strong> Tailored to your sport</li>
            <li><strong>Professional Coaching:</strong> Learn from experienced trainers</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Facility Rentals",
    description:
      "Host your event, birthday party, or team practice at Proehlific Park. Our versatile facility spaces are available for rental with full amenities and support staff.",
    image: "https://res.cloudinary.com/display97/image/upload/7466/summer-blast-41-255680.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Looking for a venue for your next event? Proehlific Park offers flexible rental options for parties, team events, corporate gatherings, and more.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Rental Options:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Birthday Parties:</strong> Make their day special</li>
            <li><strong>Team Events:</strong> Practice and game space</li>
            <li><strong>Corporate Events:</strong> Team building and meetings</li>
            <li><strong>Private Events:</strong> Custom arrangements available</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fitness to youth sports, we have programs designed to help the whole family achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: program.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-auto cursor-pointer"
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100 p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              Take a Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Proehlific Park</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Please stop by and take a tour! We would love to meet you and show you our awesome facility. Become a member of the Park and together we can enjoy the P.O.W.E.R. of Play!
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                Request More Info
              </Button>
              <p className="text-sm text-muted-foreground">Programs for all ages • Family-friendly facility</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-auto"
                poster="https://res.cloudinary.com/display97/video/upload/so_0/dawynyrmvdjvs7xlinsy.jpg"
              >
                <source src="https://res.cloudinary.com/display97/video/upload/vc_auto/dawynyrmvdjvs7xlinsy.mp4" type="video/mp4" />
                <source src="https://res.cloudinary.com/display97/video/upload/vc_auto/dawynyrmvdjvs7xlinsy.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProgram?.title}</DialogTitle>
            <div className="text-base leading-relaxed pt-4">{selectedProgram?.fullDescription}</div>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => {
                setSelectedProgram(null)
                scrollToForm()
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Get Started
            </Button>
            <Button onClick={() => setSelectedProgram(null)} variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
