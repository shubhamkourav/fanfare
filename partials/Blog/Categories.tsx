"use client"
import React, { useMemo, useState } from 'react'
import blog from '@config/pages/blogs/base.json'

type CategoryProps = {
    name: string,
    link: string,
    isActive?: boolean,
    onActive: () => void,
}
const Category: React.FC<CategoryProps> = ({ name, link, isActive = false, onActive }) => {
    return <li onClick={onActive}>
        <span className={`filter-btn btn btn-sm ${isActive ? 'filter-btn-active' : ''}`} >{name}</span>
    </li>
}
export default function Categories() {
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const { categories } = blog
    return useMemo(() => {
        return <div className="category-filter mb-10 mt-3 rounded-2xl bg-[#EEEEEE] px-4">
            <ul className="filter-list">
                {
                    categories.map((category, index) => {
                        return <Category key={index} onActive={() => setActiveCategory(index)} name={category.name} link={category.link} isActive={activeCategory === index} />
                    })}
            </ul>
        </div>

    }, [categories, activeCategory])
}
