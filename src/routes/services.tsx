import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/services')({ head: () => pageHead('services'), component: () => <PomecPage page="services" /> })
