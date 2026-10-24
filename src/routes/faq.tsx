import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/faq')({ head: () => pageHead('faq'), component: () => <PomecPage page="faq" /> })
