export function initiateEventData (data) {
  const eventData = []

  for (let i = 1; i <= 5; i++) {
    const currentData = data[`event${i}`]

    if (currentData.title !== null) {
      eventData.push(currentData)
    }
  }

  return eventData;
}