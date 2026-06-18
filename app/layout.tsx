import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import PendoInitializer from './components/PendoInitializer'
// Page metadata lives in /config/siteConfig.ts under `siteConfig.seo`.
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // The Geist variables are declared on <html> and the font-sans default
    // is set via the body rule in globals.css — no need to duplicate a className here.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track','trackAgent'];for(w=0,x=v.length;w<x;++w)(function(m){
    o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
    y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
    z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('0298876b-0ac6-4525-8526-4f09d478a314');
` }} />
      </head>
      <body>
        {/* `reducedMotion="user"` silences Framer Motion animations for users
            with prefers-reduced-motion enabled, in one place, for the whole tree. */}
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
        <PendoInitializer />
        <Analytics />
      </body>
    </html>
  )
}
