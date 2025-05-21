import { createContext, useContext, useState, ReactNode } from 'react'

// 타입 정의
type TabType = 'advertiser' | 'reviewer'

interface TabContextProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

// 기본값 (null 대신 오류 방지용 더미 함수 포함)
const TabContext = createContext<TabContextProps | undefined>(undefined)

// Provider 컴포넌트
export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>('advertiser')

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

// custom hook
export function useTab() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTab must be used within a TabProvider')
  }
  return context
}
