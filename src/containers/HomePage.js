import { connect } from 'react-redux'
import HomePageComponent from '../components/HomePage'
import { onHome } from '../actions'

const mapDispatchToProps = dispatch => ({
  onHome: () => {
    dispatch(onHome())
  }
})

export const HomePage = connect(
  state => ({
    homePage: state.homePage
  }),
  mapDispatchToProps
  )(HomePageComponent)
