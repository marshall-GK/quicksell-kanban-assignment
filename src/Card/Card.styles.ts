import { boxShadowColor } from "../Utils/colorScheme";

const useStyles = (theme?: any) => ({
  card: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: "10px",
    // height: '100px',
    padding: "15px",
    display: "grid",
    rowGap: "10px",
    boxShadow: `0px 0px 5px ${boxShadowColor}`
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    height: "25px",
    fontSize: "15px",
    color: "grey",
    fontWeight: 600,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "rgb(58 60 65)",
    display: 'flex',
    columnGap: '10px',
    // alignItems: 'baseline'
    width: '95%'
  },
  cardFooter: {
    display: "flex",
    columnGap: "8px",
    border: 'solid 1px #e5e5e5',
    width: 'max-content',
    padding: '2px 5px',
    borderRadius: '3px'
  },
  cardTag: {
    // padding: "2px 5px",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
    fontWeight: '600'
  },
  cardExtra: {},
  tagStatus: {
    width: "9px",
    height: "9px",
    backgroundColor: "grey",
    borderRadius: "50%",
    marginRight: "5px",
    marginTop: '2px'
  },
});

export default useStyles;
