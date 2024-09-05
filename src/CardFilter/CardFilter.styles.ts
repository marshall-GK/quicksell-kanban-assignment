import { boxShadowColor } from "../Utils/colorScheme";

const useStyles = (theme?: any) => ({
  filterBlock: {
    position: 'relative'
  },
  filterToggle: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '6px',
    boxShadow: `0px 0px 5px ${boxShadowColor}`,
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  expandedFilterBlock: {
    backgroundColor: '#f8f8fa',
    width: '275px',
    height: '90px',
    position: 'absolute',
    zIndex: 2,
    boxShadow: `0px 0px 5px ${boxShadowColor}`,
    top: '42px',
    borderRadius: '10px'
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '7px 15px',
    fontSize: '14px',
    textTransform: 'capitalize',
    color: 'grey',
    fontWeight: '600',
    '& select': {
      border: 'solid 1px lightgrey',
      padding: '5px',
      borderRadius: '5px',
      width: '100px',
      textTransform: 'capitalize'
    },
    '& select:focus-visible': {
      outline: 'none'
    },
  },
});

export default useStyles;
