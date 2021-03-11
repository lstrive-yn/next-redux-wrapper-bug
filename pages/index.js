import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../store'
import { loadData, startClock, tickClock } from '../actions'
import Page from '../components/page'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  // if (!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  // }
  await store.sagaTask.toPromise()
})

export default Index
