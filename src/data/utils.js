export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}


export function matchStateToTerm (state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortStates (a, b, value) {
  const aLower = a.name.toLowerCase();
  const bLower = b.name.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

export function fakeRequest (value, cb) {
  if (value === '')
    return getStates()
  var items = getStates().filter((state) => {
    return matchStateToTerm(state, value)
  })
  setTimeout(() => {
    cb(items)
  }, 500)
}

export function getStates() {
  return [
    { abbr: "AL", name: "Alabama", category: "v"},
    { abbr: "AK", name: "Alaska", category: "c"},
    { abbr: "AZ", name: "Arizona", category: "b"},
    { abbr: "AR", name: "Arkansas", category: "a"},
    { abbr: "CA", name: "California", category: "kkk"},
    { abbr: "CO", name: "Colorado", category: "fff"},
    { abbr: "CT", name: "Connecticut", category: "ddd"},
    { abbr: "DE", name: "Delaware", category: "sss"},
    { abbr: "FL", name: "Florida", category: "sse"},
    { abbr: "GA", name: "Georgia", category: "eee"},
    { abbr: "HI", name: "Hawaii", category: "fff"},
    { abbr: "ID", name: "Idaho", category: "www"},
    { abbr: "IL", name: "Illinois", category: "uuu"}
  ]
}


