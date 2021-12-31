const reduce = (state = 0, action) => {
    switch (action.type) {
      case "reset value":
        return (state = 0);
      case "increase value":
        return state + 1;
      case "decrese value":
        return state - 1;
      default:
        return state;
    }
  };
  export default reduce;