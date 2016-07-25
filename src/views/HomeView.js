import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import sty from './HomeView.scss'
import { actions as homeViewActions } from '../redux/modules/homeView.js'
import Header from 'components/Header/Header'
import Portfolio from 'components/Portfolio/Portfolio'
import Portfolio2 from 'components/Portfolio/Portfolio2'
import Portfolio3 from 'components/Portfolio/Portfolio3'
import Footer from 'components/Footer/Footer'

const mapStateToProps = (state) => ({
  headerImage: state.homeView.headerImage,
  headerText: state.homeView.headerText,
  headerParagraph: state.homeView.headerParagraph,
  portfolio: state.homeView.portfolio,
  portfolio2: state.homeView.portfolio2,
  portfolio3: state.homeView.portfolio3
})

export class HomeView extends Component {
  static propTypes = {
    headerImage: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    headerParagraph: PropTypes.string.isRequired,
    portfolio: PropTypes.array.isRequired,
    portfolio2: PropTypes.array.isRequired,
    portfolio3: PropTypes.array.isRequired
  };

  render() {
    const { headerImage, headerText, headerParagraph, portfolio, portfolio2, portfolio3 } = this.props
    const separator = false
    return (
      <div className={sty.container}>
        <Header
          headerText={headerText}
          headerImage={headerImage}
          headerParagraph={headerParagraph}
          separator={separator}
        />
        <Portfolio
          portfolio={portfolio}
        />
        <Portfolio2
          portfolio2={portfolio2}
        />
        <Portfolio3
          portfolio3={portfolio3}
        />
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, homeViewActions)(HomeView)
