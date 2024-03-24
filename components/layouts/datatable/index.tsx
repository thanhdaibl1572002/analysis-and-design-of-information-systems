/* eslint-disable @next/next/no-img-element */
'use client'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from '@/components/layouts/datatable/datatable.module.sass'
import { PiArrowClockwise, PiArrowLeft, PiArrowRight, PiArrowsDownUp, PiFileXls, PiMagnifyingGlass, PiPlus, PiTrash } from 'react-icons/pi'
import { blackGradientColor, blueGradientColor, greenGradientColor, mainGradientColor, redGradientColor, yellowGradientColor } from '@/variables/variables'
import Button from '@/components/forms/button'
import CheckBox from '@/components/forms/checkbox'
import SelectGroup, { ISelectGroupOptions } from '@/components/forms/select-group'

export interface IColumn {
    label: string
    key: string
    type: 'string' | 'number' | 'price' | 'image'
    isSort?: boolean
    isSearch?: boolean
    isFilter?: boolean
}

export type IRow = Record<IColumn['key'], any>

const groupOptions: ISelectGroupOptions[] = [
    {
      required: true,
      options:[
        { key: 'category', label: 'Danh mục sản phẩm' },
        { key: 'category', label: 'Điện thoại', value: 'Điện thoại' },
        { key: 'category', label: 'Máy tính bảng', value: 'Máy tính bảng' },
        { key: 'category', label: 'Laptop', value: 'Laptop' },
        { key: 'category', label: 'Phụ kiện', value: 'Phụ kiện' },
      ],
    },
    {
      required: true,
      options:[
        { key: 'warranty', label: 'Thời gian bảo hành' },
        { key: 'warranty', label: '2 tháng', value: '2 tháng' },
        { key: 'warranty', label: '3 tháng', value: '3 tháng' },
        { key: 'warranty', label: '6 tháng', value: '6 tháng' },
        { key: 'warranty', label: '12 tháng', value: '12 tháng' },
      ],
    },
  ]

interface IDataTableProps {
    title?: string
    isTool?: boolean
    isCreate?: boolean
    isExport?: boolean
    isReload?: boolean
    isDelete?: boolean
    isDeleteAll?: string,
    isSearch?: boolean
    isFilter?: boolean
    searchPlaceholder?: string
    columns: IColumn[]
    rows: IRow[]
    rowsPerPage?: number
}

const DataTable: React.FC<IDataTableProps> = ({
    title,
    isTool = true,
    isCreate = true,
    isExport = true,
    isReload = true,
    isDelete = true,
    isDeleteAll = true,
    isSearch = true,
    isFilter = true,
    searchPlaceholder = 'Tìm kiếm',
    columns,
    rows,
    rowsPerPage = 6
}) => {

    const [sortConfig, setSortConfig] = useState<{
        key: IColumn['key'],
        direction: 1 | -1
    }>({
        key: 'id',
        direction: 1
    })

    const handleSort = (key: IColumn['key']) => {
        setSortConfig(
            prevSortConfig => prevSortConfig.key === key
                ? { ...prevSortConfig, direction: prevSortConfig.direction === 1 ? -1 : 1 }
                : { key: key, direction: 1 }
        )
    }

    const sortedRows = [...rows].sort((a, b) => {
        const multiplier = sortConfig.direction
        if (a[sortConfig.key] > b[sortConfig.key])
            return 1 * multiplier
        else if (a[sortConfig.key] < b[sortConfig.key])
            return -1 * multiplier
        else
            return 0
    })

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [paginationInputValue, setpaginationInputValue] = useState<number>(1)

    const indexOfLastItem = currentPage * rowsPerPage
    const indexOfFirstItem = indexOfLastItem - rowsPerPage
    const currentRows = sortedRows.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(rows.length / rowsPerPage)

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
        setpaginationInputValue(currentPage - 1)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
        setpaginationInputValue(currentPage + 1)
    }

    const handleInputPage = (event: ChangeEvent<HTMLInputElement>) => {
        setpaginationInputValue(parseInt(event.target.value))
    }

    const handleEnterPage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement
            const value = parseInt(target.value)
            setCurrentPage(value)
            setpaginationInputValue(value)
        }
    }


    return (
        <div className={styles._container}>
            {isTool && (
                <div className={styles._tool}>
                    {title && (
                        <div className={styles._tool__top}>
                            <h2>{title}</h2>
                        </div>
                    )}
                    <div className={styles._tool__center}>
                        <div className={styles._tool__center__left}>

                            {isSearch && (
                                <div className={styles._tool__center__left__search}>
                                    <input type='text' placeholder={searchPlaceholder} />
                                    <PiMagnifyingGlass />
                                </div>
                            )}

                        </div>
                        <div className={styles._tool__center__right}>
                            {isDelete && (
                                <Button
                                    text='Xóa'
                                    height={40}
                                    textSize={15}
                                    textWeight={400}
                                    icon={<PiTrash />}
                                    iconPosition='left'
                                    iconSize={18}
                                    background={redGradientColor}
                                    animateDuration={400}
                                />
                            )}

                            {isCreate && (
                                <Button
                                    text='Thêm Mới'
                                    height={40}
                                    textSize={15}
                                    textWeight={400}
                                    icon={<PiPlus />}
                                    iconPosition='left'
                                    iconSize={15}
                                    background={greenGradientColor}
                                />
                            )}

                            {isReload && (
                                <Button
                                    text='Tải Lại'
                                    height={40}
                                    textSize={15}
                                    textWeight={400}
                                    icon={<PiArrowClockwise />}
                                    iconPosition='left'
                                    iconSize={18}
                                    background={blackGradientColor}
                                    animateDuration={400}
                                />
                            )}

                            {isExport && (
                                <Button
                                    text='Xuất Excel'
                                    height={40}
                                    textSize={15}
                                    textWeight={400}
                                    icon={<PiFileXls />}
                                    iconPosition='left'
                                    iconSize={20}
                                    background={blueGradientColor}
                                />
                            )}
                        </div>
                    </div>
                    {isFilter && (
                        <div className={styles._tool__bottom}>
                            <SelectGroup 
                                groupOptions={groupOptions}
                                groupWidth='100%'
                                // groupItemPerRow={3}
                                groupBorder='none'
                                groupPadding={0}
                                groupItemRowSpacing={15}
                                groupItemColSpacing={10}
                                itemSelectedMinWidth={200}
                                onChange={options => console.log(options)}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className={styles._table}>
                <table>
                    <thead>
                        <tr>
                            {isDelete && (
                                <th>
                                    {isDeleteAll && (
                                        <CheckBox
                                            name=''
                                            value=''
                                            checkBoxSize={13.5}
                                            checkBoxBorderRadius={2}
                                        />
                                    )}
                                </th>
                            )}
                            {columns && columns.length > 0 && columns.map((column, columnIndex) => (
                                column.isSort ? (
                                    <th
                                        key={columnIndex}
                                        className={styles._is__sort}
                                        onClick={() => column.isSort && handleSort(column.key)}
                                    >
                                        <span title={`Sắp xếp theo ${column.label}`}>{column.label}{<PiArrowsDownUp />}</span>
                                    </th>
                                ) : (
                                    <th key={columnIndex}>{column.label}</th>
                                )
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows && rows.length > 0 && currentRows && currentRows.length > 0 ? currentRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {isDelete && (
                                    <td>
                                        <CheckBox
                                            name=''
                                            value=''
                                            checkBoxSize={13.5}
                                            checkBoxBorderRadius={2}
                                        />
                                    </td>
                                )}
                                {columns.map((column, columnIndex) => {
                                    switch (column.type) {
                                        case 'string':
                                            return <td key={columnIndex}>{row[column.key]}</td>
                                        case 'number':
                                            return <td key={columnIndex}>{row[column.key]}</td>
                                        case 'price':
                                            return <td key={columnIndex}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row[column.key])}</td>
                                        case 'image':
                                            return <td key={columnIndex}>
                                                <span>
                                                    <img src={row[column.key]} alt='' />
                                                </span>
                                            </td>
                                        default:
                                            return null
                                    }
                                })}
                            </tr>
                        )) :
                            <tr>
                                <td
                                    className={styles._not__found}
                                    colSpan={isDelete ? columns.length + 1 : columns.length}
                                >
                                    Không tìm thấy dữ liệu phù hợp
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles._pagination}>
                <div className={styles._pagination__left}>
                    {currentRows.length > 0 && (
                        <>
                            Hiển thị
                            <b>{indexOfFirstItem + 1} - {Math.min(indexOfLastItem, rows.length)}</b>
                            / Tổng số
                            <b>{rows.length}</b>
                        </>
                    )}
                </div>
                <div className={styles._pagination__right}>
                    <Button
                        width={30}
                        height={30}
                        icon={<PiArrowLeft />}
                        iconSize={18}
                        animateDuration={300}
                        background={blueGradientColor}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    />
                    <div className={styles._pagination__current}>
                        <input
                            type='number'
                            value={paginationInputValue}
                            onChange={handleInputPage}
                            onKeyDown={handleEnterPage}
                        />
                        / {totalPages}
                    </div>
                    <Button
                        width={30}
                        height={30}
                        icon={<PiArrowRight />}
                        iconSize={18}
                        animateDuration={300}
                        background={blueGradientColor}
                        onClick={handleNextPage}
                        disabled={indexOfLastItem >= rows.length}
                    />
                </div>
            </div>
        </div>
    )
}

export default DataTable