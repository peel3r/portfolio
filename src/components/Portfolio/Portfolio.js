import { includes } from 'lodash'
import sty from './Portfolio.scss'
import { Link } from 'react-router'

// import escaperoomsa from '../../../src/'

export default function Portfolio ({portfolio}) {
  return (
    <div className={sty.container}>
      {renderContent(portfolio)}
    </div>
  )
}

function renderContent (portfolio) {
  return (
    <div className={sty.innerContainer}>
      {portfolio.map((item, index) =>
        <div className={sty.content} key={index}>
          <div className={sty[`image${index + 1}`]}>
            <div className={sty.imageHeader}>
              <span></span>
              <span></span>
            </div>
            <img src={item.image} alt={item.title}/>
          </div>
          <div className={sty.text}>
            <div className={sty.title}><h3>{item.title}</h3></div>
            <div className={sty.introText}><h4>{item.introText}</h4></div>
            <div className={sty.separator}>
              <div className={sty.lineSeparator}>∎</div>
            </div>
            <div className={sty.description}><strong>Projects: </strong><p>{item.description}</p></div>
            <div className={sty.technologies}><strong>Technologies: </strong><h5>{item.technologies}</h5></div>
            {renderLinks(item)}
          </div>
        </div>
      )}
    </div>
  )
}

function renderLinks (item) {
  // lesson: includes() es6 string method is awesome
  // test doesn't like includes so I'll implement lodash solution
  if (includes(item.link, 'http:')) {
    return (
      <a href={item.link} target='_blank' className={sty.link}> View</a>
    )
  } else {
    return (
      <Link
        to={`/${item.link}`}
        className={sty.link}
      >
        View Project
      </Link>
    )
  }
}

// lesson: remember if want to [] notation of accessing object for more complex query of dynamic properties
Portfolio.propTypes = {
  portfolio: React.PropTypes.array.isRequired
}
