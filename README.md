## Some examples of how tree-sitter handles empty productions

More specifically, tree-sitter does not handle grammars well where a non-terminal can possible produce the empty word, unless the terminal is the top-level non-terminal. Sometimes it warns of this

- empty_regex_no_warning

Tree-Sitter does not warn when a regex matches the empty string

- regex_empty_rule_warning
- optional_empty_rule_warning

Tree-Sitter does emit a warning when `repeat()` or `optional()` is used in a non-top-level rule

---

### Notes

There's some odd interactions when repeat / optional are wrapped into `token()`

- token(repeat(...)) bug [1]
- empty top-level string bug [2]
- token(repeat(...)) / token(optional(...)) bug [3]


[1] https://github.com/tree-sitter/tree-sitter/issues/1271
[2] https://github.com/tree-sitter/tree-sitter/issues/1111
[3] https://github.com/tree-sitter/tree-sitter/issues/1156
