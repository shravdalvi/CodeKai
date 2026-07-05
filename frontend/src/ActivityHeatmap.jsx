import React, { useState, useEffect, useMemo } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Info, ChevronDown } from 'lucide-react';

export default function ActivityHeatmap({ userProfile, theme }) {
  const [activityMap, setActivityMap] = useState({});
  const [selectedYear, setSelectedYear] = useState('Current');
  const [availableYears, setAvailableYears] = useState(['Current']);

  useEffect(() => {
    if (!userProfile?.uid) return;
    
    const userRef = doc(db, 'users', userProfile.uid);
    const unsubscribe = onSnapshot(userRef, (userSnap) => {
      let map = {};
      if (userSnap.exists()) {
        map = userSnap.data().activityMap || {};
      }
      setActivityMap(map);

      const years = new Set(['Current']);
      const currentYear = new Date().getFullYear();
      years.add(currentYear.toString());
      
      Object.keys(map).forEach(dateStr => {
        const y = dateStr.split('-')[0];
        if (y) years.add(y);
      });
      
      const sortedYears = ['Current', ...Array.from(years).filter(y => y !== 'Current').sort((a, b) => b - a)];
      setAvailableYears(sortedYears);

    }, (error) => {
      console.error('Error fetching activity:', error);
    });

    return () => unsubscribe();
  }, [userProfile]);

  const { calendarData, totalSubmissions, activeDays, maxStreak } = useMemo(() => {
    const data = [];
    let total = 0;
    let active = 0;
    
    let startDate, endDate;
    const today = new Date();
    
    if (selectedYear === 'Current') {
      endDate = today;
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 364); // past 365 days
    } else {
      const y = parseInt(selectedYear, 10);
      startDate = new Date(y, 0, 1);
      endDate = new Date(y, 11, 31);
      // Don't cap the endDate to today if it's the current year, 
      // LeetCode shows the full year grid even for future dates.
    }

    const current = new Date(startDate);
    while (current <= endDate) {
      const dateStr = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
      const count = activityMap[dateStr] || 0;
      data.push({
        date: dateStr,
        count: count,
        level: count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4
      });
      if (count > 0) {
        total += count;
        active++;
      }
      current.setDate(current.getDate() + 1);
    }
    
    // Calculate Max Streak within the selected period
    let currentStreak = 0;
    let maxStrk = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].count > 0) {
        currentStreak++;
        if (currentStreak > maxStrk) maxStrk = currentStreak;
      } else {
        currentStreak = 0;
      }
    }

    return { calendarData: data, totalSubmissions: total, activeDays: active, maxStreak: maxStrk };
  }, [activityMap, selectedYear]);

  const codeKaiTheme = {
    dark: ['var(--bg-main)', 'rgba(44, 187, 93, 0.3)', 'rgba(44, 187, 93, 0.6)', 'rgba(44, 187, 93, 0.8)', 'var(--accent-color)'],
    light: ['#ebedf0', 'rgba(44, 187, 93, 0.3)', 'rgba(44, 187, 93, 0.6)', 'rgba(44, 187, 93, 0.8)', 'var(--accent-color)']
  };

  return (
    <div className="view-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem' }}>
      <div className="heatmap-card" style={{ 
        width: '100%', 
        maxWidth: '900px',
        background: 'var(--bg-panel)', 
        border: '1px solid var(--border-color)', 
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '2rem'
      }}>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem', 
          fontSize: '0.85rem', 
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
              {totalSubmissions} submissions in the {selectedYear === 'Current' ? 'past one year' : selectedYear}
            </span>
            <Info size={14} style={{ opacity: 0.6, cursor: 'help' }} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Total active days: <span style={{ color: 'var(--text-primary)', marginLeft: '4px' }}>{activeDays}</span></span>
            <span>Max streak: <span style={{ color: 'var(--text-primary)', marginLeft: '4px' }}>{maxStreak}</span></span>
            
            <div style={{ position: 'relative' }}>
              <select 
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                style={{
                  appearance: 'none',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '0.3rem 2rem 0.3rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {availableYears.map(y => <option key={y} value={y} style={{ background: 'var(--bg-panel)' }}>{y}</option>)}
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.7 }} />
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {calendarData.length > 0 ? (
            <ActivityCalendar
              data={calendarData}
              theme={{
                light: codeKaiTheme.light,
                dark: codeKaiTheme.dark,
              }}
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              blockSize={12}
              blockRadius={2}
              blockMargin={4}
              fontSize={12}
              showTotalCount={false}
              showWeekdayLabels={false}
              labels={{
                legend: {
                  less: 'Less',
                  more: 'More'
                }
              }}
            />
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              Loading activity data...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
