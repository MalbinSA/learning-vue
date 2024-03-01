import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '/constants'

function normalizePageHash() {
  const hash = window.location.hash.slice(1);

  if ([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) {
    return hash
  } else {
    return window.location.hash = PAGE_TIMELINE
  }
}