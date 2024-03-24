import React from 'react'
import styles from '@/app/products/styles.module.sass'
import Tab from '@/components/layouts/tab'
import DataTable, { IColumn, IRow } from '@/components/layouts/datatable'
import Form, { IField } from '@/components/forms/form'

const columns: IColumn[] = [
    { label: 'Mã', key: 'id', type: 'number', isSearch: true, isSort: true },
    { label: 'Hình ảnh', key: 'image', type: 'image' },
    { label: 'Tên sản phẩm', key: 'name', type: 'string', isSearch: true, isSort: true },
    { label: 'Danh mục', key: 'category', type: 'string', isSearch: true },
    { label: 'Giá bán', key: 'selling_price', type: 'price', isSort: true },
    { label: 'Giá vốn', key: 'cost_price', type: 'price', isSort: true },
    { label: 'Tồn kho', key: 'stock', type: 'number', isSort: true },
    { label: 'Bảo hành', key: 'warranty', type: 'string' },
]

const rows: IRow[] = [
    { id: 1, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 2, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 3, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 4, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 5, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 6, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 7, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 8, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 9, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 10, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 11, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 12, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 13, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 14, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 15, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 16, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 17, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 18, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 19, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 20, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 21, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 22, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 23, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 24, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 25, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 26, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 27, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 28, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 29, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 30, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 31, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 32, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 33, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 34, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 35, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 36, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 37, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 38, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 39, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 40, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 41, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
    { id: 42, image: '/product-01.png', name: 'Xiaomi Redmi Note 8 Pro', category: 'Điện thoại', selling_price: 15990000, cost_price: 12900000, stock: 100, warranty: '12 tháng' },
]


const fields: IField[] = [
    { label: 'Mã', key: 'id', type: 'number', defaultValue: 1, placeholder: 'Tự động' },
    { label: 'Hình ảnh', key: 'image', type: 'image' },
    { label: 'Tên sản phẩm', key: 'name', type: 'string', placeholder: 'vd: I Phone 15 Pro Max' },
    { label: 'Danh mục', key: 'category', type: 'string', placeholder: 'vd: Điện thoại' },
    { label: 'Giá bán', key: 'selling_price', type: 'price', placeholder: 'vd: 10000000' },
    { label: 'Giá vốn', key: 'cost_price', type: 'price', placeholder: 'vd: 15000000' },
    { label: 'Tồn kho', key: 'stock', type: 'number', placeholder: 'vd: 100' },
    {
        label: 'Trạng thái', key: 'status', type: 'checkbox-group', required: true, checkBoxGroupOptions: [
            { key: 'pending', name: 'status', value: 'pending', label: 'Đang chờ' },
            { key: 'completed', name: 'status', value: 'completed', label: 'Hoàn thành' },
            { key: 'cancel', name: 'status', value: 'cancel', label: 'Đã hủy' },
        ]
    },
    {
        label: 'Giới tính', key: 'gender', type: 'radio-group', required: true, radioGroupOptions: [
            { key: 'male', name: 'gender', value: 'male', label: 'Nam' },
            { key: 'female', name: 'gender', value: 'female', label: 'Nữ' },
            { key: 'other', name: 'gender', value: 'other', label: 'Khác' },
        ]
    },
    {
        label: 'Địa chỉ', key: 'address', type: 'select-group', selectGroupOptions: [
            {
                required: true,
                options: [
                    { key: 'ward', label: 'Chọn xã / phường' },
                    { key: 'ward', label: 'Phường 1', value: 'Phường 1' },
                    { key: 'ward', label: 'Phường 2', value: 'Phường 2' },
                    { key: 'ward', label: 'Phường 3', value: 'Phường 3' },
                    { key: 'ward', label: 'Phường 4', value: 'Phường 4' },
                ],
            },
            {
                // required: true,
                options: [
                    { key: 'district', label: 'Chọn quận / huyện' },
                    { key: 'district', label: 'Quận 1', value: 'Quận 1' },
                    { key: 'district', label: 'Quận 2', value: 'Quận 2' },
                    { key: 'district', label: 'Quận 3', value: 'Quận 3' },
                    { key: 'district', label: 'Quận 4', value: 'Quận 4' },
                ],
            },
            {
                // required: true,
                options: [
                    { key: 'province', label: 'Chọn tỉnh / thành phố' },
                    { key: 'province', label: 'Tỉnh 1', value: 'Tỉnh 1' },
                    { key: 'province', label: 'Tỉnh 2', value: 'Tỉnh 2' },
                    { key: 'province', label: 'Tỉnh 3', value: 'Tỉnh 3' },
                    { key: 'province', label: 'Tỉnh 4', value: 'Tỉnh 4' },
                ],
            },
        ]
    },
    {
        label: 'Bảo hành', key: 'warranty', type: 'select', required: true, selectOptions: [
            { key: 'warranty', label: 'Chọn bảo hành' },
            { key: 'warranty', label: 'Không bảo hành', value: 'Không bảo hành' },
            { key: 'warranty', label: '3 tháng', value: '3 tháng' },
            { key: 'warranty', label: '6 tháng', value: '6 tháng' },
            { key: 'warranty', label: '12 tháng', value: '12 tháng' },
        ]
    },
    { label: 'Thời gian', key: 'time', type: 'time' },
    { label: 'Ngày bán', key: 'date', type: 'date' },
]

const Products: React.FC = () => {
    return (
        <div className={styles._container}>
            <Tab currentTab='products' />
            <div className={styles._content}>
                {/* <DataTable 
                columns={columns}
                rows={rows}
                rowsPerPage={10}
                // title='Quản lý sản phẩm'
                searchPlaceholder='Tìm kiếm sản phẩm (theo tên, mã)'
            /> */}
                <Form
                    fields={fields}
                />
            </div>
        </div>
    )
}

export default Products