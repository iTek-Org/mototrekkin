import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CalendarPicker = ({ label, value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday (0) to 6, Monday (1) to 0
  };

  const getPreviousMonthDays = (month, year) => {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);
    const firstDay = getFirstDayOfMonth(month, year);
    
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(daysInPrevMonth - i);
    }
    return days;
  };

  const getNextMonthDays = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const nextMonthDays = totalCells - (firstDay + daysInMonth);
    
    const days = [];
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    // Use local date to avoid timezone issues
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${dayStr}`;
    onChange(formattedDate);
  };

  const isSelectedDate = (day) => {
    if (!value) return false;
    const selectedDate = new Date(value + 'T00:00:00'); // Add time to avoid timezone issues
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentMonth && 
           selectedDate.getFullYear() === currentYear;
  };

  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === currentMonth && 
           today.getFullYear() === currentYear;
  };

  const formatDisplayValue = () => {
    if (!value) return '';
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const prevMonthDays = getPreviousMonthDays(currentMonth, currentYear);
    const nextMonthDays = getNextMonthDays(currentMonth, currentYear);

    const days = [];
    
    // Previous month days
    prevMonthDays.forEach(day => {
      days.push(
        <button
          key={`prev-${day}`}
          className="w-8 h-8 text-gray-400 text-sm rounded-full hover:bg-gray-100"
          disabled
        >
          {day}
        </button>
      );
    });

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isSelectedDate(day);
      const isTodayDate = isToday(day);
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`w-8 h-8 text-sm rounded-full transition-colors ${
            isSelected
              ? 'bg-gray-800 text-white'
              : isTodayDate
              ? 'bg-blue-100 text-blue-600 font-semibold'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {day}
        </button>
      );
    }

    // Next month days
    nextMonthDays.forEach(day => {
      days.push(
        <button
          key={`next-${day}`}
          className="w-8 h-8 text-gray-400 text-sm rounded-full hover:bg-gray-100"
          disabled
        >
          {day}
        </button>
      );
    });

    return days;
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">(Required)</span>}
      </label>
      
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 min-w-[280px]">
        {/* Month and Year Selectors */}
        <div className="flex justify-between items-center mb-4">
          <select
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          
          <select
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Array.from({ length: 10 }, (_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>{year}</option>
              );
            })}
          </select>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {renderCalendar()}
        </div>

        {/* Selected Date Display */}
        {value && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Selected: <span className="font-semibold text-gray-900">{formatDisplayValue()}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPicker;
