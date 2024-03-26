// Code your solution here
function findMatching(drivers, query) {
    // Convert the query to lowercase for case-insensitive comparison
    const lowercaseQuery = query.toLowerCase();
    
    // Filter the drivers array to find matching names
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
    
    return matchingDrivers;
}
function fuzzyMatch(drivers, query) {
    // Filter the drivers array to find names starting with the query
    const matchingDrivers = drivers.filter(driver => driver.startsWith(query));
    
    return matchingDrivers;
}
function matchName(drivers, query) {
    // Filter the drivers array to find objects with matching names
    const matchingDrivers = drivers.filter(driver => driver.name === query);
    
    return matchingDrivers;
}
