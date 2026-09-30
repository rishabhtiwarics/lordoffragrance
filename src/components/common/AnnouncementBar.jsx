import { useEffect, useState } from 'react'


function getTimeLeft(endTime) {
  const diff = Math.max(0, endTime - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

const pad = (n) => String(n).padStart(2, '0')

export default function AnnouncementBar() {
  // Sale ends 4 days from first load, mirrors "18th - 21st September" style countdown
  const [endTime] = useState(() => Date.now() + 11 * 3600 * 1000 + 27 * 60 * 1000)
  const [time, setTime] = useState(() => getTimeLeft(endTime))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(endTime)), 1000)
    return () => clearInterval(id)
  }, [endTime])

  const timerText = `ENDS IN: ${pad(time.days)} DAYS ${pad(time.hours)} HRS ${pad(time.minutes)} MIN ${pad(time.seconds)} SEC`
  const marqueeContent = `THE POWER MOVE  •  ${timerText}`

  return (
    <div className="announcement-bar">
      {/* Static layout – >425px */}
      <span className="announcement-text">THE POWER MOVE</span>
      <span className="announcement-dot">•</span>
      <span className="announcement-timer">
        ENDS IN:&nbsp;
        {pad(time.days)} DAYS {pad(time.hours)} HRS {pad(time.minutes)} MIN {pad(time.seconds)} SEC
      </span>

      {/* Marquee layout – ≤425px */}
      <div className="announcement-marquee-wrap" aria-hidden="true">
        <div className="announcement-marquee-track">
          {/* Duplicated for seamless loop */}
          {[0, 1].map((i) => (
            <span key={i} className="announcement-marquee-item">{marqueeContent}&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
  )
}
