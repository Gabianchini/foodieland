import { forwardRef } from 'react'
import './styles.scss'

const RecipeCategoryCard = ({ categoryName, cardColor, icon}, ref) => {
  return (
    <li ref={ref} className='recipeCategoryCard__container'>
      <button className={`recipeCategoryCard recipeCategoryCard--${cardColor}`}
        aria-label={`Select ${categoryName} category`}
      >
        <img className='recipeCategoryCard__img' src={icon} />
        <h3 className='recipeCategoryCard__title'>{categoryName}</h3>
      </button>
    </li>
  )
}

export default forwardRef(RecipeCategoryCard)