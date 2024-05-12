/* initialItems is Array that holds 29 Millions Entries of Object Containing
  {
    id: number,
    isSelected: boolean,
  }
*/
export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

/* The Entry in 29 Million items has "isSelected" value as "true" */
