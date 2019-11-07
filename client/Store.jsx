import React, { useState, createContext } from 'react';
import { isNullOrUndefined } from 'util';//possibly delete as it appears to not be used

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

  const [store, setStore] = useState({
    filterState: 'filterStuff', // Delete later
    zip: '90291',
    charityState: 'chairityStuff', //Delete later
    charityTopTenList: [
      'Charities with Perfect Scores',
      '10 Most Followed Charities',
      '10 Charities Expanding in a Hurry',
      '10 Most Frequently Viewed Charities',
      '10 Celebrity-Related Charities',
      '10 Super-Sized Charities',
      '10 Charities Overpaying their For-Profit Fundraisers',
      '10 Charities with the Most Consecutive 4-Star Ratings',
      '10 Highly Rated Charities Relying on Private Contributions',
      `10 of the Best Charities Everyone's Heard Of`,
      '10 Charities Worth Watching',
    ],
    rows: [{
      name: 'name 1',
      website: 'website 2',
      mission: 'mission 3',
      rate: 'rate 4',
      category: 'category 5',
      cause: 'cause 6',
      city: 'city 7',
      state: 'state 8',
      zip: 'zip 9',
      contact: 'contact 10',
      ein: 'contact 11'
    }],
    defaultZip: '90013'
  })

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext;