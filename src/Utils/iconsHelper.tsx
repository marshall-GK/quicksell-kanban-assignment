import React from 'react';
import { ReactComponent as LowPriorityIcon } from '../assets/low.svg'
import { ReactComponent as MediumPriorityIcon } from '../assets/medium.svg'
import { ReactComponent as HightPriorityIcon } from '../assets/high.svg'
import { ReactComponent as UrgenPriorityIcon } from '../assets/urgent.svg'
import { ReactComponent as UrgenPriorityGreyIcon } from '../assets/urgent_grey.svg'
import { ReactComponent as NoPriorityIcon } from '../assets/no_priority.svg'
import { ReactComponent as InCompleteTaskIcon } from '../assets/incomplete.svg'
import { ReactComponent as InProgressIcon } from '../assets/inprogress.svg'
import { ReactComponent as DoneIcon } from '../assets/done.svg'
import { ReactComponent as BackLogIcon } from '../assets/backlog.svg'
import { ReactComponent as CancelledIcon } from '../assets/cancelledTicket.svg'

export const getPriorityIcons = (priority: number, isCard = false) => {
  switch(priority) {
    case 1: return <LowPriorityIcon />
    case 2: return <MediumPriorityIcon />
    case 3: return <HightPriorityIcon />
    case 4: return isCard ? <UrgenPriorityGreyIcon /> : <UrgenPriorityIcon />
    default: return <NoPriorityIcon />
  }
}

export const getTicketStatusIcons = (status: string) => {
  switch(status) {
    case 'Todo': return <InCompleteTaskIcon />
    case 'In progress': return <InProgressIcon />
    case 'Backlog': return <BackLogIcon />
    case 'Cancelled': return <CancelledIcon />
    default: return <DoneIcon />
  }
}

export const getPriorityColor = (priority: number) => {
  switch(priority) {
    case 1: return 'lightgrey'
    case 2: return 'mediumgrey'
    case 3: return 'grey'
    case 4: return 'red'
    default: return 'lightgrey'
  }
}