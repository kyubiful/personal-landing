import './burgerMenu.css'

export const BurgerMenu = ({ menuState }) => {
  return (
    <div className={ menuState === false ? 'menu-btn' : 'menu-btn open' }>
      <div className='menu-btn__burger'></div>
    </div>
  )
}
