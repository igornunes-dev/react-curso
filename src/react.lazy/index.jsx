import React, { Suspense, useState } from 'react'

const LazyComponent = React.lazy(() => import('./lazy-component'))

const Index = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <p><button onClick={() => setShow(s => !s)}>Show</button></p>
      <Suspense fallback={<p>Carregando...</p>}>
      {show && <LazyComponent />}
      </Suspense>
    </div>
  )
}

export default Index