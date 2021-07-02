import { createContext, useState } from 'react';

/** This context provides access to all data (users, exhibits, ...) 
 *  This information is defined in /layouts/PageLayout.jsx
*/

const DataContext = createContext({});
export default DataContext;