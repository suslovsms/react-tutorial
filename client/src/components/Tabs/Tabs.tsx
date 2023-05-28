import React, { FC, Key, useEffect, useRef } from 'react';
import cn from 'clsx';
import s from './Tabs.sass';

export type TabsItem = {
  key: Key;
  content: React.ReactNode;
};

export type TabsProps = {
  className?: string;
  activeKey?: Key;
  onTab: (key: Key) => void;
  tabs: TabsItem[];
};

export const Tabs: FC<TabsProps> = ({ className, tabs, activeKey, onTab }) => {
  const root = useRef<HTMLDivElement>();
  const runner = useRef<HTMLDivElement>();
  useEffect(() => {
    const activeElem = root.current.querySelector('button[data-active="true"]');
    if (activeElem) {
      const rootRect = root.current.getBoundingClientRect();
      const activeRect = activeElem.getBoundingClientRect();
      const y = activeRect.y - rootRect.y;
      const x = activeRect.x - rootRect.x;
      runner.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [activeKey]);
  return (
    <div ref={root} className={cn(s.root, className)}>
      <div ref={runner} className={s.runner} />
      {tabs.map((tab) => (
        <button
          data-active={activeKey === tab.key}
          className={s.tab}
          type="button"
          key={tab.key}
          onClick={() => onTab(tab.key)}
        >
          {tab.content}
        </button>
      ))}
    </div>
  );
};