import { FC } from 'react'
import styles from '@/app/page.module.sass'
import Tab from '@/components/layouts/tab'

const DashBoard: FC = () => {
  return (
    <main className={styles._container}>
      <Tab />
    </main>
  )
}

export default DashBoard