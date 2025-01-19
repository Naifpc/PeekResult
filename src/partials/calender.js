import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarDaysExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="en-US" startDate="2024/02/13" />
    </div>
  )
}

