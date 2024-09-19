import { IntegrationTabsProps } from 'context/Integration'
import React from 'react'


export default function IntegrationTabs({ tabItems, activeTab, onChangeTab }: IntegrationTabsProps) {
    return (
        <div className="row justify-center">
            <div className="lg:col-10">
                <ul className="integration-tab filter-list justify-center">
                    {
                        tabItems.map((tab, index) => (
                            <li key={index} onClick={() => onChangeTab(tab)}>
                                <span className={`filter-btn btn btn-sm ${tab === activeTab ? 'filter-btn-active' : ''}`} data-group={tab} >{tab || 'All together'}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
