import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/contact')({ head: () => pageHead('contact'), component: () => <PomecPage page="contact" /> })
