"use client";

import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

export interface IntegrationTabsProps {
    tabItems: string[];
    activeTab: string;
    onChangeTab: (tab: string) => void;
}

interface Detail {
    title: string;
    description: string;
}
export interface IServices {
    id: string;
    name: string;
    description: string;
    url: string;
    type: string;
    icon: string;
    details: Detail[];
}
interface IntegrationContextType {
    activeTab: string;
    tabItems: string[];
    onChangeTab: (tab: string) => void;
    services: IServices[] | undefined;
    // updateServices: (services: IServices[] | undefined) => void;
  }
const IntegrationContext = createContext<IntegrationContextType | undefined>(undefined);


export const IntegrationContextProvider = ({ children, services }: Readonly<{
    children: ReactNode;
    services: IServices[] | undefined;
}>) => {
    const [activeTab, setActiveTab] = useState('');
    const [tabItems, setTabItems] = useState<string[]>([]);
    const [filteredServices, setFilteredServices] = useState<IServices[] | undefined>();


    useEffect(() => {
        let tabs = services ?Array.from(new Set(services?.map(service => service.type as string))): [];
        tabs.unshift('')
        setTabItems(tabs)
        setActiveTab('');
        setFilteredServices(services)
    }, [services]);

    const onChangeTab = useCallback((tab: string) => {
        setActiveTab(tab);
        setFilteredServices(tab==='' ? services :services?.filter(service => service.type === tab))
    },[services])



    // const services = useMemo(()=>{},[])



    return (
        <IntegrationContext.Provider value={{ activeTab, services: filteredServices, onChangeTab, tabItems }}>
            {children}
        </IntegrationContext.Provider>
    )
}
// Custom hook to use the context
export const useIntegration = () => {
    const context = useContext(IntegrationContext);
    if (!context) {
      throw new Error('useIntegration must be used within a IntegrationContextProvider');
    }
    return context;
  };
// Provider component
