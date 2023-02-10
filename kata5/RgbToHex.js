function rgb(r, g, b) {
  const hex = (n) => {
    if (n < 0) {
      return "00";
    }
    if (n > 255) {
      return "FF";
    }
    return ("0" + Number(n).toString(16)).slice(-2).toUpperCase();
  };
  return hex(r) + hex(g) + hex(b);
}
rgb(255, 255, 255);

// function rgb(r, g, b) {
//   const hex = (n) => {
//     if (n < 0) {
//       return "00";
//     }
//     if (n > 255) {
//       return "FF";
//     }
//     return Number(n).toString(16);
//   };
//   return hex(r) + hex(g) + hex(b);
// }

// rgb(-1, -1, -1);
