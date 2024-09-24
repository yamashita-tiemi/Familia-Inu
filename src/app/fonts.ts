import { Baloo_2, Inter, Rubik } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
})


export const fonts = {
  inter,
  rubik,
  baloo,
}