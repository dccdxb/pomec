import { createFileRoute } from '@tanstack/react-router'
import { PomecPage } from '../components/Pomec'
import { pageHead } from '../data/seo'
export const Route = createFileRoute('/blog')({ head: () => pageHead('blog'), component: () => <PomecPage page="blog" /> })
