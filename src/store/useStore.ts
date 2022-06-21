import React from 'react';
import create from 'zustand';
import { ComponentTab } from '../model/ComponentTab';

interface ComponentTabState {
  tabList: ComponentTab[];
  currentActiveTab: string;
  addTab: (label: string, component: React.FC) => void;
  removeTab: (label: string) => void;
}

export const useStore = create<ComponentTabState>((set) => ({
  tabList: [],
  currentActiveTab: '',
  addTab: (label, component) => {
    set((state) => ({
      ...state,
      currentActiveTab: label,
      tabList: [
        ...state.tabList,
        {
          label,
          component,
        } as ComponentTab,
      ],
    }));
  },
  removeTab: (label) => {
    set((state) => ({
      ...state,
      currentActiveTab: state.tabList[0].label,
      tabList: state.tabList.filter((tab) => tab.label !== label),
    }));
  },
}));
