import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage); // вычисляем количество страниц

    const onChangeCallback = (event: any, newPage: number) => {
        onChange(newPage, itemsCountForPage);
    }

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCount = Number(e.target.value);
        onChange(1, newCount);
    }



    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    width: '80%', // уменьшим ширину до 80% от её текущего значения
                    height: '80%', // уменьшим высоту до 80% от её текущего значения
                    '& .MuiPaginationItem-root': { // это для стилизации индивидуальных кнопок пагинации
                        width: '80%',
                        height: '80%',
                        margin: '0.1rem', // уменьшить отступ между элементами пагинации
                        fontSize: '0.8rem' // уменьшить размер шрифта элементов пагинации
                    }
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
