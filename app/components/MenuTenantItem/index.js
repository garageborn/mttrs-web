import React, { PropTypes } from 'react'
import styles from './styles.css'
import image from './assets/image.svg'

let urls = {
  mttrs_br: 'https://mttrs.com.br',
  mttrs_us: 'https://mtt.rs',
  mttrs_ar: 'https://ar.mtt.rs',
  mttrs_cl: 'https://cl.mtt.rs',
  mttrs_mx: 'https://mx.mtt.rs',
  mttrs_pt: 'https://pt.mtt.rs'
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
