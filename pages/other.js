import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from '../store'
import { END } from 'redux-saga'
import { startClock, tickClock, loadOther } from '../actions'
import Page from '../components/page'

const Other = () => {
  console.log(41243214231);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  console.log(useSelector(state => state));

  return <div>other</div>
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(loadOther())
  store.dispatch(END)
  await store.sagaTask.toPromise()
})

export default Other
