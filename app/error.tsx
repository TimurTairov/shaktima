'use client' // Error boundaries must be Client Components

import { Container } from '@/components/Container'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className='w-full h-full flex flex-col justify-center items-center'>
      <h2 className='w-full text-center text-xl text-shadow-red-500'>Что-то пошло не так!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Попробуйте еще раз.
      </button>
    </Container>
  )
}