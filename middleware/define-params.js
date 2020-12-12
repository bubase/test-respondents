export function defineParams(valuesType) {
  if (valuesType === 'select') {
    return {
      valuesType: 'select',
      value: 'not-selected',
    }
  } else if (valuesType === 'range') {
    return {
      valuesType: 'range',
      ranges:
      {
        from: null,
        to: null,
      },
    }
  }
}
