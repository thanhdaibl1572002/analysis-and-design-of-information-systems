import React from 'react'
import styles from '@/components/layouts/tab/tab.module.sass'
import Link from 'next/link'
import { PiArchiveBox, PiBuildings, PiChartBar, PiClipboardText, PiDevices, PiGridFour, PiSealCheck, PiUsers } from 'react-icons/pi'
import { mainGradientColor, whiteColor } from '@/variables/variables'

interface ITabProps {
    currentTab?: 'statistics' | 'products' | 'customers' | 'suppliers' | 'imports' | 'bills' | 'warranties'
}


const tabs: { id: string, label: string, icon: React.ReactNode }[] = [
    { id: 'statistics', label: 'Thống kê', icon: <PiChartBar /> },
    { id: 'products', label: 'Sản phẩm', icon: <PiDevices /> },
    { id: 'categories', label: 'Danh mục', icon: <PiGridFour /> },
    { id: 'customers', label: 'Khách hàng', icon: <PiUsers /> },
    { id: 'suppliers', label: 'Nhà cung cấp', icon: <PiBuildings /> },
    { id: 'imports', label: 'Nhập hàng', icon: <PiArchiveBox /> },
    { id: 'bills', label: 'Hóa đơn', icon: <PiClipboardText /> },
    { id: 'warranties', label: 'Bảo hành', icon: <PiSealCheck /> },
]

const Tab: React.FC<ITabProps> = ({ currentTab = 'statistics' }) => {
    const activeStyles = {
        background: mainGradientColor,
        color: whiteColor
    }

    return (
        <div className={styles._container}>
            <div className={styles._header}></div>
            <div className={styles._menu}>
                <ul>
                    {tabs.map(tab => (
                        <li key={tab.id} style={currentTab === tab.id ? activeStyles : undefined}>
                            <Link href={'#'}>
                                {tab.icon}
                                {tab.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles._footer}></div>
        </div>
    )
}

export default Tab