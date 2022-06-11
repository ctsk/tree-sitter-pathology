module.exports = grammar({
  name: 'pathological',

  rules: {
    source_file: $ => $.maybe_empty_block,

    maybe_empty_block: $ => /x*/
  }
})
