module.exports.createRegex = (value) => {
    let createdRegex = new RegExp(value?.toLowerCase(), "i");
  
    return createdRegex;
  }