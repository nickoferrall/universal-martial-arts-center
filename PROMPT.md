# Update This Website for Universal Martial Arts Center,

## Target Website
Visit and analyze: https://umacchinohills.com/

## Your Tasks

1. **Browse the website thoroughly**
   - Understand their services, pricing, and unique selling points
   - Find instructor/staff information if available
   - Look for class schedules, membership options, and contact info
   - Note their location, hours, and any special programs

2. **Download/reference their images**
   - Logo and branding assets (also use logo for favicon in /app/favicon.ico)
   - Facility photos
   - Instructor/staff photos
   - Any other relevant imagery

3. **Update all content in this template**
   - Replace placeholder text with real gym information
   - Update the about page with their story/mission
   - Add their actual classes, services, and pricing
   - Include instructor bios if available
   - Update contact information and location
   - Keep the template's existing styling (don't copy their old site's fonts/colors)
   - **Update the favicon** with the gym's logo (save to /app/favicon.ico)
   - **Update social media links** - carefully find their ACTUAL social links from their website:
     - Look in footer, header, or contact page for Facebook, Instagram, Twitter/X, YouTube links
     - Make sure these are their real profiles, not placeholder links
     - Remove any social links they don't have

4. **Optimize for SEO**
   - Update page titles to include gym name and location (e.g., "Universal Martial Arts Center, | Gym in [City]")
   - Add proper meta descriptions for each page (150-160 chars, include keywords)
   - Use semantic HTML headings (H1, H2, H3) with relevant keywords
   - Add alt text to all images describing what's shown
   - Include structured data/schema markup for local business
   - Ensure the sitemap includes all pages
   - Add OpenGraph and Twitter meta tags for social sharing

5. **Configure redirects properly (IMPORTANT)**
   - Case-sensitive redirects (e.g., /Contact → /contact) MUST go in `vercel.json`, NOT `next.config.ts`
   - This prevents redirect loops when Vercel has www ↔ non-www domain redirects
   - Add to `vercel.json`:
   ```json
   {
     "redirects": [
       { "source": "/Contact", "destination": "/contact", "permanent": true },
       { "source": "/About", "destination": "/about", "permanent": true },
       { "source": "/Classes", "destination": "/classes", "permanent": true },
       { "source": "/Schedule", "destination": "/schedule", "permanent": true },
       { "source": "/Reviews", "destination": "/reviews", "permanent": true },
       { "source": "/FAQ", "destination": "/faq", "permanent": true },
       { "source": "/Faq", "destination": "/faq", "permanent": true }
     ]
   }
   ```
   - Path-based redirects (different paths, not just case) can stay in `next.config.ts`

6. **Test and commit**
   - Make sure all pages render correctly
   - Verify links work
   - Check meta tags are properly set
   - Test uppercase URL paths work (e.g., /Contact should redirect to /contact)
   - Commit and push when done

## Environment Variables (Already Configured)
- `NEXT_PUBLIC_ORG_ID` - Connected to Fitlo AI
- `NEXT_PUBLIC_PHONE_NUMBER` - AI phone line

## Important Notes
- Keep the existing component structure and template styling
- The AI integration is already set up via the org ID
- Focus on content updates and SEO optimization
- Don't copy fonts/colors from their existing website - keep the modern template design
- **CRITICAL**: Case-sensitive redirects go in vercel.json to avoid redirect loops!
