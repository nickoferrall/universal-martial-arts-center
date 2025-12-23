"use client"

import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const schedule = {
    Monday: [
      { time: "5:00 AM - 9:00 PM", class: "Fitness Center" },
      { time: "6:00 AM - 7:00 AM", class: "Group Fitness" },
      { time: "9:00 AM - 10:00 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Open Gym" },
      { time: "3:00 PM - 6:00 PM", class: "After School Care" },
      { time: "5:30 PM - 6:30 PM", class: "Group Fitness" },
    ],
    Tuesday: [
      { time: "5:00 AM - 9:00 PM", class: "Fitness Center" },
      { time: "6:00 AM - 7:00 AM", class: "Group Fitness" },
      { time: "9:30 AM - 10:30 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Open Gym" },
      { time: "3:00 PM - 6:00 PM", class: "After School Care" },
      { time: "5:30 PM - 6:30 PM", class: "Personal Training" },
    ],
    Wednesday: [
      { time: "5:00 AM - 9:00 PM", class: "Fitness Center" },
      { time: "6:00 AM - 7:00 AM", class: "Group Fitness" },
      { time: "9:00 AM - 10:00 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Open Gym" },
      { time: "3:00 PM - 6:00 PM", class: "After School Care" },
      { time: "5:30 PM - 6:30 PM", class: "Group Fitness" },
    ],
    Thursday: [
      { time: "5:00 AM - 9:00 PM", class: "Fitness Center" },
      { time: "6:00 AM - 7:00 AM", class: "Group Fitness" },
      { time: "9:30 AM - 10:30 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Open Gym" },
      { time: "3:00 PM - 6:00 PM", class: "After School Care" },
      { time: "5:30 PM - 6:30 PM", class: "Personal Training" },
    ],
    Friday: [
      { time: "5:00 AM - 9:00 PM", class: "Fitness Center" },
      { time: "6:00 AM - 7:00 AM", class: "Group Fitness" },
      { time: "9:00 AM - 10:00 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Open Gym" },
      { time: "3:00 PM - 6:00 PM", class: "After School Care" },
    ],
    Saturday: [
      { time: "7:00 AM - 6:00 PM", class: "Fitness Center" },
      { time: "9:00 AM - 10:00 AM", class: "Group Fitness" },
      { time: "10:00 AM - 12:00 PM", class: "Youth Sports" },
    ],
    Sunday: [
      { time: "12:00 PM - 6:00 PM", class: "Fitness Center" },
      { time: "1:00 PM - 3:00 PM", class: "Open Gym" },
    ],
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Facility Hours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View our weekly schedule and join us at Proehlific Park
          </p>
        </div>

        <div className="overflow-x-auto border-2 border-slate-300 rounded-xl shadow-xl">
          <table className="w-full border-collapse bg-white overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                {days.map((day) => (
                  <th key={day} className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wider border-r border-primary-foreground/20 last:border-r-0">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(...Object.values(schedule).map((s) => s.length)) }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-200 hover:bg-slate-50">
                  {days.map((day) => {
                    const daySchedule = schedule[day as keyof typeof schedule]
                    const slot = daySchedule[rowIndex]
                    return (
                      <td key={`${day}-${rowIndex}`} className="px-4 py-3 text-sm border-r border-slate-200 last:border-r-0">
                        {slot ? (
                          <div 
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer hover:bg-primary/10 -m-2 p-2 rounded transition-colors"
                          >
                            <div className="font-medium text-foreground">{slot.time}</div>
                            <div className="text-muted-foreground">{slot.class}</div>
                          </div>
                        ) : (
                          <div className="h-12"></div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Schedule subject to change. Contact us for the most up-to-date information.
        </p>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}
