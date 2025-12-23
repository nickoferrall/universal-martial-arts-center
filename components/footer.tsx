import { Facebook, Instagram, Twitter, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Universal Martial Arts Center</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The best martial arts center in Chino Hills and the Inland Empire. Respect All. Fear None.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/UMACfit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/umacchinohills/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/umacchinohills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Universal+Martial+Arts+Centers/@33.988378,-117.716065,15z/data=!4m5!3m4!1s0x0:0x145657538f78d87!8m2!3d33.988378!4d-117.716065"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">CONTACT INFO</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>14610 Pipeline Ave</li>
              <li>Chino, CA 91710</li>
              <li>
                <a href="tel:9095971710" className="hover:text-primary transition-colors">
                  (909) 597-1710
                </a>
              </li>
              <li>
                <a href="mailto:info@umacchinohills.com" className="hover:text-primary transition-colors">
                  info@umacchinohills.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">HOURS</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} Universal Martial Arts Center. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://fitlo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Fitlo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
