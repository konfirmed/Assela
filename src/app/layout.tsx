import type { Metadata } from "next";
import { Crimson_Text } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'
import "./globals.css";

const crimson_text = Crimson_Text({
  weight: ["400","600","700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson_text',
})
const dm_serif_display = DM_Serif_Display({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_serif_display',
})

export const metadata: Metadata = {
  title: "Sewing By Assela",
  description: "Create your own looks together with me - Ottawa's best sewing instructor",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={crimson_text.variable + ' ' + dm_serif_display.variable}>
        {children}
      </body>
    </html>
  )
}
