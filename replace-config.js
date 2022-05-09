module.exports = {
  files: 'src/models/inputs.ts',
  from: [
    /WhereInput'/g,
    /WhereUniqueInput'/g,
  ],
  to: [
    "Filter'",
    "FilterUnique'",
  ],
}
