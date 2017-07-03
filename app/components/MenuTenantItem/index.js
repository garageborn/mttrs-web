import React, { PropTypes } from 'react'
import styles from './styles.css'
import image from './assets/image.svg'

let urls = {
  mttrs_br: 'https://mttrs.com.br',
  mttrs_us: 'https://mtt.rs',
  mttrs_ar: 'https://argentina.mtt.rs',
  mttrs_cl: 'https://chile.mtt.rs',
  mttrs_mx: 'https://mexico.mtt.rs',
  mttrs_pt: 'https://portugal.mtt.rs',
  mttrs_us_es: 'https://estadosunidos.mtt.rs',
  mttrs_au: 'https://australia.mtt.rs'
}

const MenuTenantItem = ({ tenant, currentTenant, children }) => {
  const renderText = () => {
    if (tenant === currentTenant) {
      return (
        <p className={styles.text}>
          {children}
          <img className={styles.image} src={image} alt='' />
        </p>
      )
    } else {
      return <a href={urls[tenant]} className={styles.link}>{children}</a>
    }
  }

  return (
    <li className={styles.container}>
      {renderText()}
    </li>
  )
}

MenuTenantItem.propTypes = {
  tenant: PropTypes.string.isRequired,
  currentTenant: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default MenuTenantItem
