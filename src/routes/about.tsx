import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/about')({ head: () => pageHead('about'), component: () => <PomecPage page="about" /> })
