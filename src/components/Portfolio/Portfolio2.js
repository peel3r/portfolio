import { includes } from 'lodash'
import sty from './Portfolio.scss'
import { Link } from 'react-router'

// import escaperoomsa from '../../../src/'

export default function Portfolio2 ({portfolio2}) {
  return (
    <div className={sty.container}>
      {renderContent(portfolio2)}
    </div>
  )
}

function renderContent (portfolio2) {
  return (
    <div className={sty.innerContainer}>
      {portfolio2.map((item, index) =>
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
            <div className={sty.description}><p>{item.description}</p></div>
            <div className={sty.technologies}><strong>Technologies: </strong><h4>{item.technologies}</h4></div>

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
Portfolio2.propTypes = {
  portfolio2: React.PropTypes.array.isRequired
}
