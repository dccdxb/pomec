import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/price')({ head: () => pageHead('price'), component: () => <PomecPage page="price" /> })
