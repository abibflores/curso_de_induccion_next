import { Suspense } from 'react'
import { Locations } from '@/components/trece/Locations/Locations'
import { Persons } from '@/components/trece/Persons/Persons'
import { SkeletonLocations } from '@/components/trece/SkeletonLocations/SkeletonLocations'
import { SkeletonPersons } from '@/components/trece/SkeletonPersons/SkeletonPersons'
 // streaming
 // https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 // verificar codigo fuente
 // https://search.google.com/test/rich-results
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<SkeletonLocations />}>
        <Locations />
      </Suspense>
      <Suspense fallback={<SkeletonPersons />}>
        <Persons />
      </Suspense>
    </section>
  )
}