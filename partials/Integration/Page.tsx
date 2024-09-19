"use client";

import { useIntegration } from 'context/Integration'
import React from 'react'
import IntegrationTabs from './Tabs';
import Card from './Card';




export default function IntegrationPage() {
    const inter = useIntegration();
    const { services, tabItems, activeTab, onChangeTab } = inter;

  return (
    <section className="section pt-0">
          <div className="container">
              <IntegrationTabs
                tabItems={tabItems}
                activeTab={activeTab}
                onChangeTab={(tab: string) => onChangeTab(tab)}
              />
              
              <div className="row mt-10 integration-tab-items">
                  {services?.map(service => {
                      return <Card key={service.id} {...service} />
                  })}
                  
              </div>
              
          </div>
          </section>
  )
}
